import React from 'react'
import { CSSTransition } from 'react-transition-group'
// import Link from 'next/link'
import PublicLayout from '@src/components/public-layout'
import '@src/scss/pages/risk-assessment.scss'
import InputRadioGroup from '@src/components/input-radio-group'

const FloatCSSTransition = ({ in: inProp, children }) => {
  return (
    <CSSTransition
      in={inProp}
      timeout={{ appear: 0, enter: 0, exit: 0 }}
      classNames='float'
      appear
      unmountOnExit
    >
      <div>{children}</div>
    </CSSTransition>
  )
}

const initialState = {
  // flow controls
  step: 'user_details',
  // step: 'final_result',

  // user details
  name: '',
  phone_number: '',
  address: '',
  email: '',
  state: '',

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
  assessment_score: 16,
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
    this.getValuePoint = this.getValuePoint.bind(this)
    this.calculateAssessmentScore = this.calculateAssessmentScore.bind(this)
    this.resetForm = this.resetForm.bind(this)
  }

  handleInputChange (e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit (e) {
    // e.preventDefault()
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
        this.calculateAssessmentScore()
        this.processHealthDetailsStep(e)
        break
      case 'other_health_details':
        this.calculateAssessmentScore()
        this.processOtherHealthDetailsStep(e)
        break
      case 'final_result':
        this.resetForm()
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
        })

        setTimeout(() => {console.table(this.state)}, 200)
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
      this.setState({
        step: 'final_result',
      })

      setTimeout(() => {console.table(this.state)}, 200)
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

  calculateAssessmentScore () {
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
    })
  }

  resetForm () {
    this.setState({
      initialState
    })
  }

  render () {
    const {
      step,

      name,
      phone_number,
      address,
      email,
      state,

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
    } = this.state

    const highRiskContent = () => {
      return (<div>
        <h4>Your Risk is <strong className="risk-color-high">HIGH</strong></h4>
      </div>)
    }

    const mediumRiskContent = () => {
      return (<div>
        <h4>Your Risk is <strong className="risk-color-medium">MEDIUM</strong></h4>
      </div>)
    }

    const lowRiskContent = () => {
      return (<div>
        <h4>Your Risk is <strong className="risk-color-low">LOW</strong></h4>
      </div>)
    }

    const contentSwitch = (assessment_score) => {
      switch(assessment_score) {
        case 16:
        case 15:
        case 14:
        case 13:
        case 12:
        case 11:
        case 10:
        case 9:
          return highRiskContent()
          break
        case 8:
        case 7:
        case 6:
        case 5:
        case 4:
        case 3:
        case 2:
        case 1:
          return mediumRiskContent()
          break
        case 0:
        default:
          return lowRiskContent()
          break
      }
    }

    return (
      <PublicLayout pageTitle="Risk Assessment" pageClass="risk-assessment">
        <section className="section bg-grey3">
          <h1 className="font-weight-bold">Risk Assessment</h1>
        </section>

        <FloatCSSTransition in={(step === 'user_details')}>
          <section className="section">
            <form id="user-details-form" className="form-section">
              <div className="input-group">
                <label htmlFor="name">Your Name</label>
                <input className="input-control" type="text" name="name" value={name} onChange={this.handleInputChange} placeholder="My name is ..." required/>
              </div>
              <div className="input-group">
                <label htmlFor="name">Your Phone Number</label>
                <input className="input-control" type="tel" name="phone_number" value={phone_number} onChange={this.handleInputChange} placeholder="+234 - - - - - - - -" required/>
              </div>
              <div className="input-group">
                <label htmlFor="name">Your Address</label>
                <input className="input-control" type="text" name="address" value={address} onChange={this.handleInputChange} placeholder="I live at ..." required/>
              </div>
              <div className="input-group">
                <label htmlFor="name">Your Email Address</label>
                <input className="input-control" type="email" name="email" value={email} onChange={this.handleInputChange} placeholder="My name is ..." required/>
              </div>
              <div className="input-group">
                <label htmlFor="name">Your State</label>
                <select className="input-select" name="state" value={state} onChange={this.handleInputChange} required>
                  <option value="">Select Your State</option>
                  {nigerianStates.map((state, stateIndex) => <option key={stateIndex}>{state}</option>)}
                </select>
              </div>
              <div className="input-group align-end">
                <input className="button" type="submit" value="Save" onClick={this.handleSubmit} step="user_details"/>
              </div>
            </form>
          </section>
        </FloatCSSTransition>

        <FloatCSSTransition in={(step === 'travel_details')}>
          <section className="section">
            <form id="travel-details-form" className="">
              <InputRadioGroup
                question="Did you recently come in contact with someone that has travelled to China, Iran, UK, Italy, Spain, USA or any country with confirmed cases?"
                options={[
                  'Yes',
                  'No',
                ]}
                name="recently_came_in_contact_with_a_traveller"
                value={recently_came_in_contact_with_a_traveller}
                onInputChange={this.handleInputChange}
                required
              />
              <InputRadioGroup
                question="Have you had a close contact with a confirmed case of nCoV (coronavirus) infection?"
                options={[
                  'Yes',
                  'No',
                ]}
                name="had_a_close_contact_with_a_confirmed_case"
                value={had_a_close_contact_with_a_confirmed_case}
                onInputChange={this.handleInputChange}
                required
              />
              <div className="input-group align-end py">
                <input className="button" type="submit" value="Save" onClick={this.handleSubmit} step="travel_details"/>
              </div>
            </form>
          </section>
        </FloatCSSTransition>

        <FloatCSSTransition in={(step === 'travel_details_confirm_low_risk')}>
          <section className="section">
            <form id="travel-details-confirm-low-risk-form" className="">
              <InputRadioGroup
                question="Have you been to a gathering that later had a confirmed positive case?"
                options={[
                  'Yes',
                  'No',
                  'Maybe',
                ]}
                name="been_to_a_gathering_that_later_had_a_confirmed_case"
                value={been_to_a_gathering_that_later_had_a_confirmed_case}
                onInputChange={this.handleInputChange}
                required
              />
              <InputRadioGroup
                question="Have you or anyone you know have come in contact with or got exposed to a healthcare facility in a country where hospital associated nCOV (coronavirus) infections have been reported?"
                options={[
                  'Yes',
                  'No',
                  'Maybe',
                ]}
                name="have_come_in_contact_with_healthcare_facility_with_a_confirmed_case"
                value={have_come_in_contact_with_healthcare_facility_with_a_confirmed_case}
                onInputChange={this.handleInputChange}
                required
              />
              <div className="input-group align-end py">
                <input className="button" type="submit" value="Save" onClick={this.handleSubmit} step="travel_details_confirm_low_risk"/>
              </div>
            </form>
          </section>
        </FloatCSSTransition>

        <FloatCSSTransition in={(step === 'health_details')}>
          <section className="section">
            <form id="health-details-form" className="form-section">
              <InputRadioGroup
                question="How often do you cough?"
                options={[
                  'Frequent',
                  'Sometimes',
                  'Never',
                ]}
                name="cough"
                value={cough}
                onInputChange={this.handleInputChange}
                required
              />
              <InputRadioGroup
                question="Do you experience any difficulties in breathing?"
                options={[
                  'Frequent',
                  'Sometimes',
                  'Never',
                ]}
                name="difficulty_breathing"
                value={difficulty_breathing}
                onInputChange={this.handleInputChange}
                required
              />
              <InputRadioGroup
                question="Do you have a fever and if you do, How Often?"
                options={[
                  'Frequent',
                  'Sometimes',
                  'Never',
                ]}
                name="fever"
                value={fever}
                onInputChange={this.handleInputChange}
                required
              />
              <InputRadioGroup
                question="Are your eyes watered?"
                options={[
                  'Frequent',
                  'Sometimes',
                  'Never',
                ]}
                name="watered_eyes"
                value={watered_eyes}
                onInputChange={this.handleInputChange}
                required
              />
              <div className="input-group align-end">
                <input className="button" type="submit" value="Submit" onClick={this.handleSubmit} step="health_details"/>
              </div>
            </form>
          </section>
        </FloatCSSTransition>

        <FloatCSSTransition in={(step === 'other_health_details')}>
          <section className="section">
            <form id="other-health-details-form" className="form-section">
              <InputRadioGroup
                question="How often do you sneeze?"
                options={[
                  'Frequent',
                  'Sometimes',
                  'Never',
                ]}
                name="sneeze"
                value={sneeze}
                onInputChange={this.handleInputChange}
                required
              />
              <InputRadioGroup
                question="Are you in pain?"
                options={[
                  'Frequent',
                  'Sometimes',
                  'Never',
                ]}
                name="in_pain"
                value={in_pain}
                onInputChange={this.handleInputChange}
                required
              />
              <InputRadioGroup
                question="Does your throat hurt?"
                options={[
                  'Frequent',
                  'Sometimes',
                  'Never',
                ]}
                name="hurt"
                value={hurt}
                onInputChange={this.handleInputChange}
                required
              />
              <InputRadioGroup
                question="Do you feel tired?"
                options={[
                  'Frequent',
                  'Sometimes',
                  'Never',
                ]}
                name="tired"
                value={tired}
                onInputChange={this.handleInputChange}
                required
              />
              <div className="input-group align-end">
                <input className="button" type="submit" value="Submit" onClick={this.handleSubmit} step="other_health_details"/>
              </div>
            </form>
          </section>
        </FloatCSSTransition>

        <FloatCSSTransition in={(step === 'final_result')}>
          <section className="section">
            <h2 className="font-weight-bold">The Result</h2>
            {contentSwitch(assessment_score)}
          </section>
        </FloatCSSTransition>
      </PublicLayout>
    )
  }
}

const nigerianStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT - Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara"
]

export default RiskAssessmentPage
