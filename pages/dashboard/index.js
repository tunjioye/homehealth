import React from 'react'
// import Link from 'next/link'
import PublicLayout from '@src/components/public-layout'
import '@src/scss/pages/statistics.scss'
import FloatCSSTransition from '@src/components/float-css-transition'
import {
  updateRiskAssessments,
} from '@src/redux/actions/riskassessmentsActions'
import { connect } from 'react-redux'
import axios from 'axios'
import StatsCard from '@src/components/stats-card'
import Modal from '@src/components/modal'

class StatisticsPage extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      show_modal: false,
      active_risk_assessment: {},

      fetching_risk_assessments: true,
      risk_assessments: props.risk_assessments || [],
      filtered_risk_assessments: props.risk_assessments || [],

      // filters
      name: '',
      phone_number: '',
      address: '',
      state: '',
      email: '',
      risk_level: '',
    }

    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.setRiskAssessment = this.setRiskAssessment.bind(this)
    this.handleInputChangeWithFilter = this.handleInputChangeWithFilter.bind(this)
    this.clearNearestInput = this.clearNearestInput.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
    this.fetchRiskAssessments = this.fetchRiskAssessments.bind(this)
  }

  showModal () {
    this.setState({
      show_modal: true,
    })
  }

  hideModal () {
    this.setState({
      show_modal: false,
    }, () => {
      this.setState({
        active_risk_assessment: {}
      })
    })
  }

  setRiskAssessment (risk_assessment) {
    this.setState({
      active_risk_assessment: risk_assessment,
    }, () => {
      this.showModal()
    })
  }

  handleInputChangeWithFilter (e) {
    const { name, value } = e.target
    this.setState({
      name: '',
      phone_number: '',
      address: '',
      state: '',
      email: '',
      risk_level: '',
    }, () => {
      this.setState({
        [name]: value
      }, () => this.handleFilter(name))
    })
  }

  clearNearestInput (e) {
    const { name } = e.target.previousElementSibling
    this.setState({
      [name]: ''
    }, () => this.handleFilter(name))
  }

  handleFilter (name) {
    const {
      risk_assessments,
    } = this.state

    let filtered_risk_assessments = []

    // if entry is empty return full stats
    if (this.state[name].trim() === '') {
      filtered_risk_assessments = risk_assessments
      return this.setState({
        filtered_risk_assessments,
      })
    }

    filtered_risk_assessments = risk_assessments.filter(state => {
      return (String(state[name]).toLowerCase().indexOf(this.state[name].trim().toLowerCase()) !== -1)
    })

    return this.setState({
      filtered_risk_assessments,
    })
  }

  async fetchRiskAssessments () {
    let risk_assessments = []

    if (Object.keys(this.props.risk_assessments).length !== 0) {
      risk_assessments = this.props.risk_assessments
    } else {
      try {
        const { data } = await axios.get('https://homehealth-api.herokuapp.com/risk-assessments')
        risk_assessments = data

        this.props.updateRiskAssessments(risk_assessments)
      } catch (error) {
        console.error(error)
      }
    }

    this.setState({
      fetching_risk_assessments: false,
      risk_assessments,
      filtered_risk_assessments: risk_assessments,
    })
  }

  componentDidMount () {
    this.fetchRiskAssessments()
  }

  render () {
    const {
      show_modal,
      active_risk_assessment,

      fetching_risk_assessments,
      risk_assessments,
      filtered_risk_assessments,

      // filters
      name,
      phone_number,
      address,
      state,
      email,
      risk_level,
    } = this.state

    return (
      <PublicLayout pageTitle="COVID-19 Statistics" pageClass="statistics">
        <section className="section bg-grey3 flex-space-between-responsive">
          <h1 className="font-weight-bold">Dashboard</h1>

          {/* <div>
            <button type="button" className="button" onClick={this.postDataToChatbot}>
              Return to Chatbot
            </button>
          </div> */}
        </section>

        <FloatCSSTransition in={true}>
          <section className="section">
            <h3>Risk Assessments</h3>

            <h6>Overview</h6>
            <div className="statistics" style={{ marginBottom: '2.5rem' }}>
              {(fetching_risk_assessments === false)
                ? (
                  <div className="stats-card-wrapper">
                    <StatsCard value={Intl.NumberFormat().format(risk_assessments.length || 0)} title="Risks in Total" />
                    <StatsCard value={Intl.NumberFormat().format(risk_assessments.filter(x => x.risk_level === 'LOW').length || 0)} title="Low Risks" />
                    <StatsCard value={Intl.NumberFormat().format(risk_assessments.filter(x => x.risk_level === 'MEDIUM').length || 0)} title="Medium Risks" />
                    <StatsCard value={Intl.NumberFormat().format(risk_assessments.filter(x => x.risk_level === 'HIGH').length || 0)} title="High Risks" classNames="text-primary" />
                  </div>
                )
                : (
                  <div>fetching ...</div>
                )
              }
            </div>

            <h6>Risk Assessments Table</h6>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>#</th>

                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>State</th>
                    <th>Email</th>

                    <th>Risk Level</th>

                    <th>Actions</th>

                    {/* <th>Recently Came In Contact With A Traveller</th>
                    <th>Had A Close Contact With A Confirmed Case</th>
                    <th>Been To A Gathering That Later Had A Confirmed Case</th>
                    <th>Have Come In Contact With Healthcare Facility With A Confirmed Case</th>

                    <th>Coughing</th>
                    <th>High Fever</th>
                    <th>Difficulty Breathing</th>
                    <th>Watered Eyes</th>
                    <th>Sneezing</th>
                    <th>In Pain</th>
                    <th>Hurt</th>
                    <th>Tired</th> */}
                  </tr>
                </thead>
                <tbody>
                  {(fetching_risk_assessments === false)
                    ? (
                      <>
                        <tr className="filters">
                          <td>&nbsp;</td>
                          <td>
                            <div className="input-filter">
                              <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={this.handleInputChangeWithFilter}
                                placeholder="name"
                                autoComplete="off"
                              />
                              <button title="clear input" tabIndex="-1" onClick={this.clearNearestInput}>✕</button>
                            </div>
                          </td>
                          <td>
                            <div className="input-filter">
                              <input
                                type="text"
                                name="phone_number"
                                value={phone_number}
                                onChange={this.handleInputChangeWithFilter}
                                placeholder="080..."
                                autoComplete="off"
                              />
                              <button title="clear input" tabIndex="-1" onClick={this.clearNearestInput}>✕</button>
                            </div>
                          </td>
                          <td>
                            <div className="input-filter">
                              <input
                                type="text"
                                name="address"
                                value={address}
                                onChange={this.handleInputChangeWithFilter}
                                placeholder="ikorodu"
                                autoComplete="off"
                              />
                              <button title="clear input" tabIndex="-1" onClick={this.clearNearestInput}>✕</button>
                            </div>
                          </td>
                          <td>
                            <div className="input-filter">
                              <input
                                type="text"
                                name="state"
                                value={state}
                                onChange={this.handleInputChangeWithFilter}
                                placeholder="lagos"
                                autoComplete="off"
                              />
                              <button title="clear input" tabIndex="-1" onClick={this.clearNearestInput}>✕</button>
                            </div>
                          </td>
                          <td>
                            <div className="input-filter">
                              <input
                                type="text"
                                name="email"
                                value={email}
                                onChange={this.handleInputChangeWithFilter}
                                placeholder="name@email.com"
                                autoComplete="off"
                              />
                              <button title="clear input" tabIndex="-1" onClick={this.clearNearestInput}>✕</button>
                            </div>
                          </td>
                          <td>
                            <div className="input-filter">
                              <select name="risk_level" value={risk_level} onChange={this.handleInputChangeWithFilter} required>
                                <option value="">All</option>
                                <option value="HIGH">HIGH</option>
                                <option value="MEDIUM">MEDIUM</option>
                                <option value="LOW">LOW</option>
                              </select>
                            </div>
                          </td>
                          <td>&nbsp;</td>
                        </tr>
                        {(filtered_risk_assessments.length > 0)
                          ? filtered_risk_assessments.map((ra, index) => {
                            return (
                              <tr key={index}>
                                <th>{index + 1}</th>

                                <th>{ra.name}</th>
                                <td>{ra.phone_number}</td>
                                <td>{ra.address}</td>
                                <td>{ra.state}</td>
                                <td>{ra.email}</td>

                                <td><strong>{ra.risk_level}</strong></td>

                                <td>
                                  <span className="link" role="button" onClick={() => this.setRiskAssessment(ra)}>view</span>
                                </td>

                                {/* <td>{ra.recently_came_in_contact_with_a_traveller}</td>
                                <td>{ra.had_a_close_contact_with_a_confirmed_case}</td>
                                <td>{ra.been_to_a_gathering_that_later_had_a_confirmed_case}</td>
                                <td>{ra.have_come_in_contact_with_healthcare_facility_witd_a_confirmed_case}</td>

                                <td>{ra.cough}</td>
                                <td>{ra.fever}</td>
                                <td>{ra.difficulty_breatding}</td>
                                <td>{ra.watered_eyes}</td>
                                <td>{ra.sneeze}</td>
                                <td>{ra.in_pain}</td>
                                <td>{ra.hurt}</td>
                                <td>{ra.tired}</td> */}
                              </tr>
                            )
                          })
                          : (
                            <tr className="loading">
                              <td>...</td>

                              <td className="text-red">Nothing Found</td>
                              <td>...</td>
                              <td>...</td>
                              <td>...</td>
                              <td>...</td>

                              <td>...</td>

                              <td>...</td>

                              {/* <td>...</td>
                              <td>...</td>
                              <td>...</td>
                              <td>...</td>

                              <td>...</td>
                              <td>...</td>
                              <td>...</td>
                              <td>...</td>
                              <td>...</td>
                              <td>...</td>
                              <td>...</td>
                              <td>...</td> */}
                            </tr>
                          )
                        }
                      </>
                    )
                    : (
                      <tr className="loading">
                        <td>...</td>

                        <td>loading</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>

                        <td>...</td>

                        <td>...</td>

                        {/* <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>

                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td> */}
                      </tr>
                    )
                  }
                </tbody>
              </table>

              <p className="total-count">
                {Intl.NumberFormat().format(filtered_risk_assessments.length || 0)} found
              </p>
            </div>
          </section>
        </FloatCSSTransition>


        {/* <FloatCSSTransition in={show_modal}> */}
          <Modal
            size="small"
            active={show_modal}
            handleModalClose={this.hideModal}
            title={active_risk_assessment.name}
            footer={true}
          >
            <div>
              {
                Object.keys(active_risk_assessment).map((ra, raIndex) => {
                  if (['_id', 'updatedAt', '__v', 'id', 'env', 'latitude', 'longitude', 'accuracy'].indexOf(ra) !== -1) {
                    return null
                  } else if (ra === 'createdAt') {
                    return (
                      <div className="data-content" key={raIndex}>
                        <div>Created At</div>
                        <div>{active_risk_assessment[ra].split('T')[0] || '--'}</div>
                      </div>
                    )
                  } else if (ra === 'phone_number') {
                    return (
                      <div className="data-content" key={raIndex}>
                        <div>Phone Number</div>
                        <div>
                          <a href={`tel:${active_risk_assessment[ra]}`} target="_blank" rel="noreferrer noopener">
                            {active_risk_assessment[ra] || '--'}
                          </a>
                        </div>
                      </div>
                    )
                  } else if (ra === 'email') {
                    return (
                      <div className="data-content" key={raIndex}>
                        <div>Email</div>
                        <div>
                          <a href={`mailto:${active_risk_assessment[ra]}`} target="_blank" rel="noreferrer noopener">
                            {active_risk_assessment[ra] || '--'}
                          </a>
                        </div>
                      </div>
                    )
                  } else if (ra === 'risk_level') {
                    return (
                      <div className="data-content" key={raIndex}>
                        <div>Risk Level</div>
                        <div><strong>{active_risk_assessment[ra] || '--'}</strong></div>
                      </div>
                    )
                  } else {
                    return (
                      <div className="data-content" key={raIndex}>
                        <div>{ra.split('_').join(' ').replace(/\b\S/g, t => t.toUpperCase())}</div>
                        <div>{active_risk_assessment[ra] || '--'}</div>
                      </div>
                    )
                  }
                })
              }
            </div>
          </Modal>
        {/* </FloatCSSTransition> */}
      </PublicLayout>
    )
  }
}

const mapStateToProps = state => {
  const {riskassessments} = state

  return {
    risk_assessments: riskassessments.risk_assessments || [],
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateRiskAssessments: (risk_assessments) => dispatch(updateRiskAssessments(risk_assessments)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsPage)
