import React from 'react'
// import Link from 'next/link'
import PublicLayout from '@src/components/public-layout'
import '@src/scss/pages/statistics.scss'
import FloatCSSTransition from '@src/components/float-css-transition'
import {
  updateNigeriaStats,
  updateNigeriaStatesStats,
} from '@src/redux/actions/statisticsActions'
import { connect } from 'react-redux'
import axios from 'axios'
import StatsCard from '@src/components/stats-card'
import NgBarChart from '@src/components/ng-bar-chart'

const allCasesAreZero = (state) => {
  return (
    (Number(state.total_cases) === 0) &&
    (Number(state.active_cases) === 0) &&
    (Number(state.recovered) === 0) &&
    (Number(state.deaths) === 0)
  )
}

class StatisticsPage extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      fetching_ng_stats: true,
      ng_stats: props.ng_stats || {},
      fetching_ng_states_stats: true,
      ng_states_stats: props.ng_states_stats || [],
      filtered_states_stats: props.ng_states_stats || [],
      filtered_state_stats: {},

      // filters
      state_name: '',
      total_cases: '',
      active_cases: '',
      recovered: '',
      deaths: '',
    }

    this.handleInputChangeWithFilter = this.handleInputChangeWithFilter.bind(this)
    this.clearNearestInput = this.clearNearestInput.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
    this.fetchNgStats = this.fetchNgStats.bind(this)
    this.fetchNgStatesStats = this.fetchNgStatesStats.bind(this)
    this.getParams = this.getParams.bind(this)
    this.postDataToChatbot = this.postDataToChatbot.bind(this)
    this.closeWindow = this.closeWindow.bind(this)
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

  async fetchNgStats () {
    let ng_stats = {}

    if (Object.keys(this.props.ng_stats).length !== 0) {
      ng_stats = this.props.ng_stats
    } else {
      try {
        const { data } = await axios.get('https://homehealth-api.herokuapp.com/country-covid-stats?country_name=Nigeria')
        ng_stats = data[0]

        this.props.updateNigeriaStats(ng_stats)
      } catch (error) {
        console.error(error)
      }
    }

    this.setState({
      fetching_ng_stats: false,
      ng_stats,
    })
  }

  async fetchNgStatesStats () {
    let ng_states_stats = []

    if (Object.keys(this.props.ng_states_stats).length !== 0) {
      ng_states_stats = this.props.ng_states_stats
    } else {
      try {
        const { data } = await axios.get('https://homehealth-api.herokuapp.com/country-states-covid-stats?country_name=Nigeria&_sort=state_name:asc')
        ng_states_stats = data

        this.props.updateNigeriaStatesStats(ng_states_stats)
      } catch (error) {
        console.error(error)
      }
    }

    this.setState({
      fetching_ng_states_stats: false,
      ng_states_stats,
      filtered_states_stats: ng_states_stats,
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

  postDataToChatbot () {
    const webViewCallback = this.getParams('webview.onDone')
    console.log('WEBVIEW CALLBACK:', webViewCallback)

    if (webViewCallback) {
      axios.post(
        webViewCallback,
        JSON.stringify({
          ng_stats: this.state.ng_stats,
          ng_states_stats: this.state.ng_states_stats,
        })
      ).then((res) => {
        console.log(res.data)
      }).catch((err) => {
        console.error(err)
      }).finally(() => {
        this.closeWindow()
      })
    }
  }

  closeWindow () {
    window.close()
  }

  componentDidMount () {
    this.fetchNgStats()
    this.fetchNgStatesStats()
  }

  render () {
    const {
      fetching_ng_stats,
      ng_stats,
      fetching_ng_states_stats,
      ng_states_stats,
      filtered_states_stats,
      filtered_state_stats,

      // filters
      state_name,
      total_cases,
      active_cases,
      recovered,
      deaths,
    } = this.state

    let max_cases_value = 100

    if (filtered_state_stats.hasOwnProperty('total_cases')) {
      max_cases_value = filtered_state_stats.total_cases
    } else {
      max_cases_value = Math.max(...filtered_states_stats.map(x => x.total_cases), 0)
      if (max_cases_value > 100) {
        max_cases_value = 100
      }
    }
    if (max_cases_value < 10) {
      max_cases_value = 10
    }

    return (
      <PublicLayout pageTitle="COVID-19 Statistics" pageClass="statistics">
        <section className="section bg-grey1 flex-space-between-responsive">
          <h1 className="font-weight-bold">COIVD-19 Statistics</h1>

          {/* <div>
            <button type="button" className="button" onClick={this.postDataToChatbot}>
              Return to Chatbot
            </button>
          </div> */}
        </section>

        <FloatCSSTransition in={true}>
          <section className="section">
            <h3>Nigeria 🇳🇬</h3>

            <h6>Number of Affected States</h6>
            <div style={{ width: '100%', overflowX: 'auto', overflowY: 'hidden', marginBottom: '1.5rem' }}>
              {(fetching_ng_states_stats === false)
                ? (
                  <>
                    <div className="affected-states">
                      <span>
                        {(ng_states_stats.length - ng_states_stats.filter(allCasesAreZero).length) || 0}
                      </span>
                      <small>affected states</small>
                    </div>

                    <div className="affected-states green">
                      <span>
                        {ng_states_stats.filter(allCasesAreZero).length || 0}
                      </span>
                      <small>unaffected states</small>
                    </div>
                  </>
                )
                : (
                  <div>fetching statistics ...</div>
                )
              }
            </div>

            <h6>Filter Cases Per State</h6>
            <div style={{ width: '100%', overflowX: 'auto', overflowY: 'hidden', marginBottom: '1.5rem' }}>
              <div className="input-filter">
                <select name="state_name" value={state_name} onChange={this.handleInputChangeWithFilter} required>
                  <option value="">Select State to Filter Cases</option>
                  {
                    nigerianStates.map((state, stateIndex) => (
                      <option key={stateIndex} value={state}>{state}</option>
                    ))
                  }
                </select>
              </div>
            </div>

            <h6>Cases Overview</h6>
            <div className="statistics" style={{ marginBottom: '1.5rem' }}>
              {(fetching_ng_stats === false)
                ? (
                  <>
                    {(filtered_state_stats.hasOwnProperty('total_cases'))
                      ? (
                        <div className="stats-card-wrapper">
                          <StatsCard value={Intl.NumberFormat().format(filtered_state_stats.total_cases || 0)} title="Confirmed Cases" />
                          <StatsCard value={Intl.NumberFormat().format(filtered_state_stats.active_cases || 0)} title="Active Cases" />
                          <StatsCard value={Intl.NumberFormat().format(filtered_state_stats.recovered || 0)} title="Recovered" />
                          <StatsCard value={Intl.NumberFormat().format(filtered_state_stats.deaths || 0)} title="Deaths" classNames="text-primary" />
                        </div>
                      )
                      : (
                        <div className="stats-card-wrapper">
                          <StatsCard value={Intl.NumberFormat().format(ng_stats.total_cases || 0)} title="Confirmed Cases" />
                          <StatsCard value={Intl.NumberFormat().format(ng_stats.active_cases || 0)} title="Active Cases" />
                          <StatsCard value={Intl.NumberFormat().format(ng_stats.recovered || 0)} title="Recovered" />
                          <StatsCard value={Intl.NumberFormat().format(ng_stats.deaths || 0)} title="Deaths" classNames="text-primary" />
                        </div>
                      )
                    }
                  </>
                )
                : (
                  <div>fetching statistics ...</div>
                )
              }
            </div>

            <h6>Cases Per State Bar Chart</h6>
            <div style={{ width: '100%', overflowX: 'auto', overflowY: 'hidden', marginBottom: '1.5rem' }}>
              {(fetching_ng_states_stats === false)
                ? (
                  <div style={{ height: '400px', width: '100%', minWidth: '1000px' }}>
                    <NgBarChart
                      data={filtered_states_stats}
                      maxValue={max_cases_value || 100}
                    />
                  </div>
                )
                : (
                  <div>fetching statistics ...</div>
                )
              }
            </div>

            <h6>Cases Per State Table</h6>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>State</th>
                    <th>Total Cases</th>
                    <th>Active Cases</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                  </tr>
                </thead>
                <tbody>
                  {(fetching_ng_states_stats === false)
                    ? (
                      <>
                        <tr className="filters">
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
                        </tr>
                        {(filtered_states_stats.length > 0)
                          ? filtered_states_stats.map((state, index) => {
                            return (
                              <tr key={index}>
                                <th>{state['state_name']}</th>
                                <td>{Intl.NumberFormat().format(state.total_cases || 0)}</td>
                                <td className="text-orange">{Intl.NumberFormat().format(state.active_cases || 0)}</td>
                                <td className="text-green">{Intl.NumberFormat().format(state.recovered || 0)}</td>
                                <td className="text-red">{Intl.NumberFormat().format(state.deaths || 0)}</td>
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
                      </tr>
                    )
                  }
                </tbody>
              </table>

              <p className="total-count">
                {Intl.NumberFormat().format(filtered_states_stats.length || 0)} found
              </p>
            </div>
          </section>
        </FloatCSSTransition>
      </PublicLayout>
    )
  }
}

const nigerianStates = [
  "Abia",
  "Abuja FCT",
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

const mapStateToProps = state => {
  const {statistics} = state

  return {
    ng_stats: statistics.ng_stats || {},
    ng_states_stats: statistics.ng_states_stats || [],
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateNigeriaStats: (ng_stats) => dispatch(updateNigeriaStats(ng_stats)),
    updateNigeriaStatesStats: (ng_states_stats) => dispatch(updateNigeriaStatesStats(ng_states_stats)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsPage)
