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

      // // filters
      // state_name: '',
      // total_cases: '',
      // active_cases: '',
      // recovered: '',
      // deaths: '',
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
      state_name: '',
      total_cases: '',
      active_cases: '',
      recovered: '',
      deaths: '',
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
      ng_states_stats,
    } = this.state

    let filtered_states_stats = []
    let filtered_state_stats = {}

    // if entry is empty return full stats
    if (this.state[name].trim() === '') {
      filtered_states_stats = ng_states_stats
      return this.setState({
        filtered_states_stats,
        filtered_state_stats,
      })
    }

    if (name !== 'state_name') {
      if (this.state[name].trim().indexOf('-') !== -1) {
        // filter range
        let splittedInput = this.state[name].split('-')
        const minNum = Number(splittedInput[0].trim())
        const maxNum = Number(splittedInput[1].trim())

        if (splittedInput[0].trim() !== '' && splittedInput[1].trim() !== '') {
          filtered_states_stats = ng_states_stats.filter(state => {
            return (Number(state[name]) >= minNum && Number(state[name]) <= maxNum)
          })
        }
      } else if (this.state[name].trim().indexOf('>') !== -1) {
        // filter greater than
        let splittedInput = this.state[name].split('>')
        const minNum = Number(splittedInput[1].trim())

        filtered_states_stats = ng_states_stats.filter(state => {
          return (Number(state[name]) > minNum)
        })
      } else if (this.state[name].trim().indexOf('<') !== -1) {
        // filter less than
        let splittedInput = this.state[name].split('<')
        const maxNum = Number(splittedInput[1].trim())

        filtered_states_stats = ng_states_stats.filter(state => {
          return (Number(state[name]) < maxNum)
        })
      } else {
        filtered_states_stats = ng_states_stats.filter(state => {
          return (Number(state[name]) === Number(this.state[name]))
        })
      }
    } else {
      filtered_states_stats = ng_states_stats.filter(state => {
        return (String(state[name]).toLowerCase().indexOf(this.state[name].trim().toLowerCase()) !== -1)
      })

      // set filtered_state_stats
      if (filtered_states_stats.length === 1) {
        filtered_state_stats = filtered_states_stats[0]
      }
    }

    return this.setState({
      filtered_states_stats,
      filtered_state_stats,
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

      // // filters
      // state_name,
      // total_cases,
      // active_cases,
      // recovered,
      // deaths,
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
                        {/* <tr className="filters">
                          <td>
                            <div className="input-filter">
                              <input
                                type="text"
                                name="state_name"
                                value={state_name}
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
                                name="total_cases"
                                value={total_cases}
                                onChange={this.handleInputChangeWithFilter}
                                placeholder="0-10"
                                autoComplete="off"
                              />
                              <button title="clear input" tabIndex="-1" onClick={this.clearNearestInput}>✕</button>
                            </div>
                          </td>
                          <td>
                            <div className="input-filter">
                              <input
                                type="text"
                                name="active_cases"
                                value={active_cases}
                                onChange={this.handleInputChangeWithFilter}
                                placeholder="10"
                                autoComplete="off"
                              />
                              <button title="clear input" tabIndex="-1" onClick={this.clearNearestInput}>✕</button>
                            </div>
                          </td>
                          <td>
                            <div className="input-filter">
                              <input
                                type="text"
                                name="recovered"
                                value={recovered}
                                onChange={this.handleInputChangeWithFilter}
                                placeholder=">10"
                                autoComplete="off"
                              />
                              <button title="clear input" tabIndex="-1" onClick={this.clearNearestInput}>✕</button>
                            </div>
                          </td>
                          <td>
                            <div className="input-filter">
                              <input
                                type="text"
                                name="deaths"
                                value={deaths}
                                onChange={this.handleInputChangeWithFilter}
                                placeholder="<10"
                                autoComplete="off"
                              />
                              <button title="clear input" tabIndex="-1" onClick={this.clearNearestInput}>✕</button>
                            </div>
                          </td>
                        </tr> */}
                        {(risk_assessments.length > 0)
                          ? risk_assessments.map((ra, index) => {
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
                              <td className="text-red">Not Found</td>

                              <td>...</td>
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
                        <td>loading</td>

                        <td>...</td>
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
                {Intl.NumberFormat().format(risk_assessments.length || 0)} found
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
