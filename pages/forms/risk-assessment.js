import React from 'react'
// import Link from 'next/link'
import PublicLayout from '@src/components/public-layout'
import '@src/scss/pages/risk-assessment.scss'

const initialState = {
  // flow controls
  step: 'user_details',

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
  assessment_score: 0
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
        this.processHealthDetailsStep(e)
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

        console.table(this.state)
      } else {
        this.setState({
          step: 'health_details',
        })
      }
    }
  }

  processHealthDetailsStep () {
    if (document.getElementById('health-details-form').checkValidity()) {
      e.preventDefault()
      this.setState({
        step: 'final_result',
      })

      console.table(this.state)
    }
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

    return (
      <PublicLayout pageTitle="Risk Assessment" pageClass="risk-assessment">
        <section className={`section${step === 'user_details' ? ' show' : ' hidden'}`}>
          <h3>User Details</h3>

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

        <section className={`section${step === 'travel_details' ? ' show' : ' hidden'}`}>
          <h3>Travel Details</h3>

          <form id="travel-details-form" className="">
            <div className="input-group">
              <label htmlFor="recently_came_in_contact_with_a_traveller">Did you recently come in contact with someone that has travelled to China, Iran, UK, Italy, Spain, USA or any country with confirmed cases?</label>
              <label className="input-radio">
                <input type="radio" name="recently_came_in_contact_with_a_traveller" value="Yes" checked={recently_came_in_contact_with_a_traveller === 'Yes'} onChange={this.handleInputChange} required/>
                <span>Yes</span>
              </label>
              <label className="input-radio">
                <input type="radio" name="recently_came_in_contact_with_a_traveller" value="No" checked={recently_came_in_contact_with_a_traveller === 'No'} onChange={this.handleInputChange} required/>
                <span>No</span>
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="had_a_close_contact_with_a_confirmed_case">Have you had a close contact with a confirmed case of nCoV (coronavirus) infection?</label>
              <label className="input-radio">
                <input type="radio" name="had_a_close_contact_with_a_confirmed_case" value="Yes" checked={had_a_close_contact_with_a_confirmed_case === 'Yes'} onChange={this.handleInputChange} required/>
                <span>Yes</span>
              </label>
              <label className="input-radio">
                <input type="radio" name="had_a_close_contact_with_a_confirmed_case" value="No" checked={had_a_close_contact_with_a_confirmed_case === 'No'} onChange={this.handleInputChange} required/>
                <span>No</span>
              </label>
            </div>
            <div className="input-group align-end py">
              <input className="button" type="submit" value="Save" onClick={this.handleSubmit} step="travel_details"/>
            </div>
          </form>
        </section>

        <section className={`section${step === 'travel_details_confirm_low_risk' ? ' show' : ' hidden'}`}>
          <h3>Travel Details</h3>

          <form id="travel-details-confirm-low-risk-form" className="">
            <div className="input-group">
              <label htmlFor="been_to_a_gathering_that_later_had_a_confirmed_case">Have you been to a gathering that later had a confirmed positive case?</label>
              <label className="input-radio">
                <input type="radio" name="been_to_a_gathering_that_later_had_a_confirmed_case" value="Yes" checked={been_to_a_gathering_that_later_had_a_confirmed_case[0] === 'Y'} onChange={this.handleInputChange} required/>
                <span>Yes</span>
              </label>
              <label className="input-radio">
                <input type="radio" name="been_to_a_gathering_that_later_had_a_confirmed_case" value="No" checked={been_to_a_gathering_that_later_had_a_confirmed_case[0] === 'N'} onChange={this.handleInputChange} required/>
                <span>No</span>
              </label>
              <label className="input-radio">
                <input type="radio" name="been_to_a_gathering_that_later_had_a_confirmed_case" value="Maybe" checked={been_to_a_gathering_that_later_had_a_confirmed_case[0] === 'M'} onChange={this.handleInputChange} required/>
                <span>Maybe</span>
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="have_come_in_contact_with_healthcare_facility_with_a_confirmed_case">Have you or anyone you know have come in contact with or got exposed to a healthcare facility in a country where hospital associated nCOV (coronavirus) infections have been reported?</label>
              <label className="input-radio">
                <input type="radio" name="have_come_in_contact_with_healthcare_facility_with_a_confirmed_case" value="Yes" checked={have_come_in_contact_with_healthcare_facility_with_a_confirmed_case[0] === 'Y'} onChange={this.handleInputChange} required/>
                <span>Yes</span>
              </label>
              <label className="input-radio">
                <input type="radio" name="have_come_in_contact_with_healthcare_facility_with_a_confirmed_case" value="No" checked={have_come_in_contact_with_healthcare_facility_with_a_confirmed_case[0] === 'N'} onChange={this.handleInputChange} required/>
                <span>No</span>
              </label>
              <label className="input-radio">
                <input type="radio" name="have_come_in_contact_with_healthcare_facility_with_a_confirmed_case" value="Maybe" checked={have_come_in_contact_with_healthcare_facility_with_a_confirmed_case[0] === 'M'} onChange={this.handleInputChange} required/>
                <span>Maybe</span>
              </label>
            </div>
            <div className="input-group align-end py">
              <input className="button" type="submit" value="Save" onClick={this.handleSubmit} step="travel_details_confirm_low_risk"/>
            </div>
          </form>
        </section>

        <section className={`section${step === 'health_details' ? ' show' : ' hidden'}`}>
          <h3>Health Details</h3>

          <form id="health-details-form" className="form-section">
            <div className="input-group">
              <label htmlFor="cough">How often do you cough?</label>
            </div>
            <div className="input-group">
              <label htmlFor="difficulty_breathing">Do you experience any difficulties in breathing?</label>
            </div>
            <div className="input-group">
              <label htmlFor="fever">Do you have a fever and if you do, How Often?</label>
            </div>
            <div className="input-group">
              <label htmlFor="watered_eyes">Are your eyes watered?</label>
            </div>
            <div className="input-group">
              <label htmlFor="sneeze">How often do you sneeze?</label>
            </div>
            <div className="input-group">
              <label htmlFor="in_pain">Are you in pain?</label>
            </div>
            <div className="input-group">
              <label htmlFor="hurt">Does your throat hurt?</label>
            </div>
            <div className="input-group">
              <label htmlFor="tired">Do you feel tired?</label>
            </div>
            <div className="input-group align-end">
              <input className="button" type="submit" value="Submit" onClick={this.handleSubmit} step="health_details"/>
            </div>
          </form>
        </section>

        <section id="final_result" className={`section${step === 'final_result' ? ' show' : ' hidden'}`}>
          <h3>Risk Assessment Result</h3>
        </section>
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
