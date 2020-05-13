import React from 'react'
// import Link from 'next/link'
import PublicLayout from '@src/components/public-layout'
import '@src/scss/pages/risk-assessment.scss'
import FloatCSSTransition from '@src/components/float-css-transition'
import InputRadioGroup from '@src/components/input-radio-group'
import LangSwitcher from '@src/components/lang-switcher'
import axios from 'axios'
import CONFIG from '@src/config'
import RISK_ASSESSMENT_LANGUAGES from '@src/utils/risk-assessment-languages'
import NIGERIAN_STATES from '@src/utils/nigerian-states'
import LGA_LIST from '@src/utils/lga-list'

const initialState = {
  // flow controls
  step: 'user_details',
  // step: 'final_result',
  lang: 'ENGLISH',
  // lang: 'YORUBA',

  // user details
  name: '',
  phone_number: '',
  address: '',
  email: '',
  state: '',
  lga: '',
  dob: '',
  sex: '',
  marital_status: '',

  // travel details
  recently_came_in_contact_with_a_traveller: '',
  had_a_close_contact_with_a_confirmed_case: '',
  been_to_a_gathering_that_later_had_a_confirmed_case: '',
  have_come_in_contact_with_healthcare_facility_with_a_confirmed_case: '',

  // health details
  cough: '',
  fever: '',
  difficulty_breathing: '',
  watered_eyes: '',
  sneeze: '',
  in_pain: '',
  hurt: '',
  tired: '',

  // assessment score
  assessment_score: 0,
  risk_level: 'LOW',

  // recent contacts
  contact_name: '',
  contact_phone_number: '',
  recent_contacts: [],

  // environment
  env: process.env.NODE_ENV,

  // geolocation
  latitude: null,
  longitude: null,
  accuracy: null,
}

class RiskAssessmentPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ...initialState
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.processUserDetailsStep = this.processUserDetailsStep.bind(this)
    this.processTravelDetailsStep = this.processTravelDetailsStep.bind(this)
    this.processTravelDetailsConfirmLowRiskStep = this.processTravelDetailsConfirmLowRiskStep.bind(this)
    this.processHealthDetailsStep = this.processHealthDetailsStep.bind(this)
    this.processOtherHealthDetailsStep = this.processOtherHealthDetailsStep.bind(this)
    this.finalResultStep = this.finalResultStep.bind(this)
    this.getValuePoint = this.getValuePoint.bind(this)
    this.calculateAssessmentScoreAndRiskLevel = this.calculateAssessmentScoreAndRiskLevel.bind(this)
    this.calculateRiskLevel = this.calculateRiskLevel.bind(this)
    this.saveToDatabase = this.saveToDatabase.bind(this)
    this.resetForm = this.resetForm.bind(this)
    this.getParams = this.getParams.bind(this)
    this.postFormDataToChatbot = this.postFormDataToChatbot.bind(this)
    this.closeWindow = this.closeWindow.bind(this)
    this.setUserLang = this.setUserLang.bind(this)
  }

  handleInputChange (e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit (e) {
    const step = e.target.getAttribute('step') || ''

    switch (step) {
      case 'user_details':
        this.processUserDetailsStep(e)
        break
      case 'travel_details':
        this.processTravelDetailsStep(e)
        break
      case 'travel_details_confirm_low_risk':
        this.processTravelDetailsConfirmLowRiskStep(e)
        break
      case 'health_details':
        this.processHealthDetailsStep(e)
        break
      case 'other_health_details':
        this.processOtherHealthDetailsStep(e)
        break
      case 'final_result':
        e.preventDefault()
        this.finalResultStep()
        break
      default:
        break
    }
  }

  processUserDetailsStep (e) {
    if (document.getElementById('user-details-form').checkValidity()) {
      e.preventDefault()
      this.setState({
        step: 'travel_details',
      })
    }
  }

  processTravelDetailsStep (e) {
    if (document.getElementById('travel-details-form').checkValidity()) {
      e.preventDefault()

      const {
        recently_came_in_contact_with_a_traveller,
        had_a_close_contact_with_a_confirmed_case,
      } = this.state

      if (recently_came_in_contact_with_a_traveller[0] === 'N' && had_a_close_contact_with_a_confirmed_case[0] === 'N') {
        // set step to travel_details_confirm_low_risk
        this.setState({
          step: 'travel_details_confirm_low_risk',
        })
      } else {
        this.setState({
          step: 'health_details',
        })
      }
    }
  }

  processTravelDetailsConfirmLowRiskStep (e) {
    if (document.getElementById('travel-details-confirm-low-risk-form').checkValidity()) {
      e.preventDefault()

      const {
        been_to_a_gathering_that_later_had_a_confirmed_case,
        have_come_in_contact_with_healthcare_facility_with_a_confirmed_case,
      } = this.state

      if (been_to_a_gathering_that_later_had_a_confirmed_case[0] === 'N' && have_come_in_contact_with_healthcare_facility_with_a_confirmed_case[0] === 'N') {
        // low_risk confirmed, jump straight to result
        this.setState({
          step: 'final_result',
        }, () => {
          console.table(this.state)
          this.saveToDatabase()
        })
      } else {
        this.setState({
          step: 'health_details',
        })
      }
    }
  }

  processHealthDetailsStep (e) {
    if (document.getElementById('health-details-form').checkValidity()) {
      e.preventDefault()
      this.setState({
        step: 'other_health_details',
      })
    }
  }

  processOtherHealthDetailsStep (e) {
    if (document.getElementById('other-health-details-form').checkValidity()) {
      e.preventDefault()
      this.calculateAssessmentScoreAndRiskLevel()
    }
  }

  getValuePoint (name) {
    switch (name) {
      case 'Frequent':
        return 2
        break
      case 'Sometimes':
        return 1
        break
      case 'Never':
      default:
        return 0
        break
    }
  }

  finalResultStep () {
    if (this.state.env === 'development') {
      this.resetForm()
      this.closeWindow()
    } else {
      this.postFormDataToChatbot()
    }
  }

  calculateAssessmentScoreAndRiskLevel () {
    const {
      cough,
      fever,
      difficulty_breathing,
      watered_eyes,
      sneeze,
      in_pain,
      hurt,
      tired,
    } = this.state

    this.setState({
      assessment_score: (this.getValuePoint(cough)
      + this.getValuePoint(fever)
      + this.getValuePoint(difficulty_breathing)
      + this.getValuePoint(watered_eyes)
      + this.getValuePoint(sneeze)
      + this.getValuePoint(in_pain)
      + this.getValuePoint(hurt)
      + this.getValuePoint(tired))
    }, () => this.calculateRiskLevel())
  }

  calculateRiskLevel () {
    const {
      assessment_score,
      risk_level,
    } = this.state

    let new_risk_level = risk_level

    if (assessment_score >= 9) {
      new_risk_level = 'HIGH'
    } else if (assessment_score >= 1) {
      new_risk_level = 'MEDIUM'
    } else {
      new_risk_level = 'LOW'
    }

    this.setState({
      risk_level: new_risk_level,
      step: 'final_result',
    }, () => {
      console.table(this.state)
      this.saveToDatabase()
    })
  }

  async saveToDatabase () {
    let postData = this.state

    if (delete postData.step) {
      try {
        const res = await axios.post(`${CONFIG.API_HOST}/risk-assessments`, postData)
        if (this.state.env !== 'production') console.log(res.data)
      } catch (error) {
        console.error(error)
      }
    }
  }

  resetForm () {
    this.setState({
      ...initialState
    })
  }

  getParams (name) {
    const WEBVIEW_PARAMS = window.webviewParameters || {}
    console.log('WEBVIEW PARAMS:', WEBVIEW_PARAMS)

    if (WEBVIEW_PARAMS.parameters) {
      const param = window.webviewParameters.parameters.filter(wvParam => (wvParam.key === name))[0]
      if (param.value) return param.value
    }

    return ''
  }

  postFormDataToChatbot () {
    const webViewCallback = this.getParams('webview.onDone')
    console.log('WEBVIEW CALLBACK:', webViewCallback)

    if (webViewCallback) {
      axios.post(
        webViewCallback,
        JSON.stringify({
          name: this.state.name,
          risk_level: this.state.risk_level,
        })
      ).then((res) => {
        console.log(res.data)
      }).catch((err) => {
        console.error(err)
      }).finally(() => {
        this.resetForm()
        this.closeWindow()
      })
    }
  }

  closeWindow () {
    window.close()
  }

  setUserLang () {
    if (typeof window !== 'undefined') {
      const userLang = this.getParams('user.lang')
      console.log('USER LANG:', userLang)

      if (userLang) {
        this.setState({
          lang: String(userLang).trim().toUpperCase()
        })
      }
    }
  }

  componentDidMount () {
    this.setUserLang()

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setLocation, showError)
      } else {
        console.log('Geolocation is not supported by this browser.')
      }
    }

    const setLocation = ((position) => {
      const {latitude, longitude, accuracy} = position.coords
      this.setState({latitude, longitude, accuracy})
      if (this.state.env !== 'production') console.log({latitude, longitude, accuracy})
    }).bind(this)

    const showError = (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.log("User denied the request for Geolocation.")
          // window.alert('Please enable your GPS')
          break
        case error.POSITION_UNAVAILABLE:
          console.log("Location information is unavailable.")
          x.innerHTML = ""
          break
        case error.TIMEOUT:
          console.log("The request to get user location timed out.")
          break
        case error.UNKNOWN_ERROR:
          console.log("An unknown error occurred.")
          break
      }
    }

    // call geolocation function
    getLocation()
  }

  render () {
    const {
      // form controls
      step,
      lang,

      name,
      phone_number,
      address,
      email,
      state,
      lga,
      dob,
      sex,
      marital_status,

      recently_came_in_contact_with_a_traveller,
      had_a_close_contact_with_a_confirmed_case,
      been_to_a_gathering_that_later_had_a_confirmed_case,
      have_come_in_contact_with_healthcare_facility_with_a_confirmed_case,

      cough,
      fever,
      difficulty_breathing,
      watered_eyes,
      sneeze,
      in_pain,
      hurt,
      tired,

      assessment_score,
      risk_level,

      contact_name,
      contact_phone_number,
      recent_contacts,
    } = this.state

    const highRiskContent = () => {
      return (<div>
        <h4>Your Risk is <strong className="risk-color-high">{risk_level || 'HIGH'}</strong></h4>
      </div>)
    }

    const mediumRiskContent = () => {
      return (<div>
        <h4>Your Risk is <strong className="risk-color-medium">{risk_level || 'MEDIUM'}</strong></h4>
      </div>)
    }

    const lowRiskContent = () => {
      return (<div>
        <h4>Your Risk is <strong className="risk-color-low">{risk_level || 'LOW'}</strong></h4>
      </div>)
    }

    const contentSwitch = (assessment_score) => {
      if (assessment_score >= 9) {
        return highRiskContent()
      } else if (assessment_score >= 1) {
        return mediumRiskContent()
      } else {
        return lowRiskContent()
      }
    }

    return (
      <PublicLayout pageTitle="Risk Assessment" pageClass="risk-assessment">
        <section className="section bg-grey1 flex-space-between-responsive">
          <h1 className="font-weight-bold">{RISK_ASSESSMENT_LANGUAGES[lang]['title']}</h1>

          <LangSwitcher
            name="lang"
            value={lang}
            onChange={this.handleInputChange}
          />
        </section>

        <FloatCSSTransition in={(step === 'user_details')}>
          <section className="section">
            <h4>{RISK_ASSESSMENT_LANGUAGES[lang]['1']}</h4>

            <form id="user-details-form" className="form-section">
              <div className="input-group">
                <label htmlFor="name">{RISK_ASSESSMENT_LANGUAGES[lang]['1a']}</label>
                <input className="input-control" type="text" name="name" value={name} onChange={this.handleInputChange} placeholder={RISK_ASSESSMENT_LANGUAGES[lang]['1aplaceholder']} required/>
              </div>
              <div className="input-group">
                <label htmlFor="name">{RISK_ASSESSMENT_LANGUAGES[lang]['1b']}</label>
                <input className="input-control" type="tel" name="phone_number" value={phone_number} onChange={this.handleInputChange} placeholder="+234 - - - - - - - -" required/>
              </div>
              <div className="input-group">
                <label htmlFor="name">{RISK_ASSESSMENT_LANGUAGES[lang]['1c']}</label>
                <input className="input-control" type="text" name="address" value={address} onChange={this.handleInputChange} placeholder={RISK_ASSESSMENT_LANGUAGES[lang]['1cplaceholder']} required/>
              </div>
              <div className="input-group">
                <label htmlFor="name">{RISK_ASSESSMENT_LANGUAGES[lang]['1d']}</label>
                <input className="input-control" type="email" name="email" value={email} onChange={this.handleInputChange} placeholder="abc@xyz.com" required/>
              </div>
              <div className="input-group">
                <label htmlFor="name">{RISK_ASSESSMENT_LANGUAGES[lang]['1e']}</label>
                <select className="input-select" name="state" value={state} onChange={this.handleInputChange} required>
                  <option value="">{RISK_ASSESSMENT_LANGUAGES[lang]['1eplaceholder']}</option>
                  {NIGERIAN_STATES.map((state, stateIndex) => <option key={stateIndex}>{state}</option>)}
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="lga">{RISK_ASSESSMENT_LANGUAGES[lang]['1f']}</label>
                <select className="input-select" name="lga" value={lga} onChange={this.handleInputChange} required>
                  <option value="">{RISK_ASSESSMENT_LANGUAGES[lang]['1fplaceholder']}</option>
                  {(LGA_LIST[state] !== undefined) && (
                    Array.from(LGA_LIST[state]).map((lga, lgaIndex) => <option key={lgaIndex}>{lga}</option>)
                  )}
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="sex">{RISK_ASSESSMENT_LANGUAGES[lang]['1g']}</label>
                <select className="input-select" name="sex" value={sex} onChange={this.handleInputChange} required>
                  <option value="">{RISK_ASSESSMENT_LANGUAGES[lang]['1gplaceholder']}</option>
                  {
                    RISK_ASSESSMENT_LANGUAGES[lang]['sexoptions'].map((sex, sexIndex) => (
                      <option key={sexIndex} value={sex.key}>{sex.label}</option>
                    ))
                  }
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="marital_status">{RISK_ASSESSMENT_LANGUAGES[lang]['1h']}</label>
                <select className="input-select" name="marital_status" value={marital_status} onChange={this.handleInputChange} required>
                  <option value="">{RISK_ASSESSMENT_LANGUAGES[lang]['1hplaceholder']}</option>
                  {
                    RISK_ASSESSMENT_LANGUAGES[lang]['maritalstatusoptions'].map((status, statusIndex) => (
                      <option key={statusIndex} value={status.key}>{status.label}</option>
                    ))
                  }
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="dob">{RISK_ASSESSMENT_LANGUAGES[lang]['1i']}</label>
                <input className="input-control" type="date" name="dob" value={dob} onChange={this.handleInputChange} placeholder="YYYY-MM-DD" required/>
              </div>
              <div className="input-group align-end">
                <input className="button" type="submit" value={RISK_ASSESSMENT_LANGUAGES[lang]['savebuttontext']} onClick={this.handleSubmit} step="user_details"/>
              </div>
            </form>
          </section>
        </FloatCSSTransition>

        <FloatCSSTransition in={(step === 'travel_details')}>
          <section className="section">
            <h4>{RISK_ASSESSMENT_LANGUAGES[lang]['2']}</h4>

            <form id="travel-details-form" className="">
              <InputRadioGroup
                question={RISK_ASSESSMENT_LANGUAGES[lang]['2a']}
                options={RISK_ASSESSMENT_LANGUAGES[lang]['traveloptions1']}
                name="recently_came_in_contact_with_a_traveller"
                value={recently_came_in_contact_with_a_traveller}
                onInputChange={this.handleInputChange}
                required
              />
              <InputRadioGroup
                question={RISK_ASSESSMENT_LANGUAGES[lang]['2b']}
                options={RISK_ASSESSMENT_LANGUAGES[lang]['traveloptions1']}
                name="had_a_close_contact_with_a_confirmed_case"
                value={had_a_close_contact_with_a_confirmed_case}
                onInputChange={this.handleInputChange}
                required
              />
              <div className="input-group align-end py">
                <input className="button" type="submit" value="Save and Continue" onClick={this.handleSubmit} step="travel_details"/>
              </div>
            </form>
          </section>
        </FloatCSSTransition>

        <FloatCSSTransition in={(step === 'travel_details_confirm_low_risk')}>
          <section className="section">
            <h4>{RISK_ASSESSMENT_LANGUAGES[lang]['2']}</h4>

            <form id="travel-details-confirm-low-risk-form" className="">
              <InputRadioGroup
                question={RISK_ASSESSMENT_LANGUAGES[lang]['2c']}
                options={RISK_ASSESSMENT_LANGUAGES[lang]['traveloptions2']}
                name="been_to_a_gathering_that_later_had_a_confirmed_case"
                value={been_to_a_gathering_that_later_had_a_confirmed_case}
                onInputChange={this.handleInputChange}
                required
              />
              <InputRadioGroup
                question={RISK_ASSESSMENT_LANGUAGES[lang]['2d']}
                options={RISK_ASSESSMENT_LANGUAGES[lang]['traveloptions2']}
                name="have_come_in_contact_with_healthcare_facility_with_a_confirmed_case"
                value={have_come_in_contact_with_healthcare_facility_with_a_confirmed_case}
                onInputChange={this.handleInputChange}
                required
              />
              <div className="input-group align-end py">
                <input className="button" type="submit" value={RISK_ASSESSMENT_LANGUAGES[lang]['savebuttontext']} onClick={this.handleSubmit} step="travel_details_confirm_low_risk"/>
              </div>
            </form>
          </section>
        </FloatCSSTransition>

        <FloatCSSTransition in={(step === 'health_details')}>
          <section className="section">
            <h4>{RISK_ASSESSMENT_LANGUAGES[lang]['3']}</h4>

            <form id="health-details-form" className="form-section">
              <InputRadioGroup
                question={RISK_ASSESSMENT_LANGUAGES[lang]['3a']}
                options={RISK_ASSESSMENT_LANGUAGES[lang]['healthoptions1']}
                name="cough"
                value={cough}
                onInputChange={this.handleInputChange}
                required
              />
              <InputRadioGroup
                question={RISK_ASSESSMENT_LANGUAGES[lang]['3b']}
                options={RISK_ASSESSMENT_LANGUAGES[lang]['healthoptions1']}
                name="difficulty_breathing"
                value={difficulty_breathing}
                onInputChange={this.handleInputChange}
                required
              />
              <InputRadioGroup
                question={RISK_ASSESSMENT_LANGUAGES[lang]['3c']}
                options={RISK_ASSESSMENT_LANGUAGES[lang]['healthoptions1']}
                name="fever"
                value={fever}
                onInputChange={this.handleInputChange}
                required
              />
              <InputRadioGroup
                question={RISK_ASSESSMENT_LANGUAGES[lang]['3d']}
                options={RISK_ASSESSMENT_LANGUAGES[lang]['healthoptions1']}
                name="watered_eyes"
                value={watered_eyes}
                onInputChange={this.handleInputChange}
                required
              />
              <div className="input-group align-end">
                <input className="button" type="submit" value={RISK_ASSESSMENT_LANGUAGES[lang]['savebuttontext']} onClick={this.handleSubmit} step="health_details"/>
              </div>
            </form>
          </section>
        </FloatCSSTransition>

        <FloatCSSTransition in={(step === 'other_health_details')}>
          <section className="section">
            <h4>{RISK_ASSESSMENT_LANGUAGES[lang]['3']}</h4>

            <form id="other-health-details-form" className="form-section">
              <InputRadioGroup
                question={RISK_ASSESSMENT_LANGUAGES[lang]['3e']}
                options={RISK_ASSESSMENT_LANGUAGES[lang]['healthoptions1']}
                name="sneeze"
                value={sneeze}
                onInputChange={this.handleInputChange}
                required
              />
              <InputRadioGroup
                question={RISK_ASSESSMENT_LANGUAGES[lang]['3f']}
                options={RISK_ASSESSMENT_LANGUAGES[lang]['healthoptions1']}
                name="in_pain"
                value={in_pain}
                onInputChange={this.handleInputChange}
                required
              />
              <InputRadioGroup
                question={RISK_ASSESSMENT_LANGUAGES[lang]['3g']}
                options={RISK_ASSESSMENT_LANGUAGES[lang]['healthoptions1']}
                name="hurt"
                value={hurt}
                onInputChange={this.handleInputChange}
                required
              />
              <InputRadioGroup
                question={RISK_ASSESSMENT_LANGUAGES[lang]['3h']}
                options={RISK_ASSESSMENT_LANGUAGES[lang]['healthoptions1']}
                name="tired"
                value={tired}
                onInputChange={this.handleInputChange}
                required
              />
              <div className="input-group align-end">
                <input className="button" type="submit" value={RISK_ASSESSMENT_LANGUAGES[lang]['completebuttontext']} onClick={this.handleSubmit} step="other_health_details"/>
              </div>
            </form>
          </section>
        </FloatCSSTransition>

        <FloatCSSTransition in={(step === 'final_result')}>
          <section className="section">
            <h2 className="font-weight-bold">The Result</h2>
            {contentSwitch(assessment_score)}

            <div className="section"></div>

            <form id="final-result-form" className="form-section">
              <div className="input-group align-end">
                <input className="button" type="submit" value={RISK_ASSESSMENT_LANGUAGES[lang]['returnbuttontext']} onClick={this.handleSubmit} step="final_result"/>
              </div>
            </form>
          </section>
        </FloatCSSTransition>
      </PublicLayout>
    )
  }
}

export default RiskAssessmentPage
