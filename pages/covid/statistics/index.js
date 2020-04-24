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

class StatisticsPage extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      fetching_ng_stats: true,
      ng_stats: props.ng_stats || {},
      fetching_ng_states_stats: true,
      ng_states_stats: props.ng_states_stats || [],
    }

    this.fetchNgStats = this.fetchNgStats.bind(this)
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
        const { data } = await axios.get('https://homehealth-api.herokuapp.com/country-states-covid-stats?country_name=Nigeria')
        ng_states_stats = data

        this.props.updateNigeriaStatesStats(ng_states_stats)
      } catch (error) {
        console.error(error)
      }
    }

    this.setState({
      fetching_ng_states_stats: false,
      ng_states_stats,
    })
  }

  componentDidMount () {
    this.fetchNgStats()
    this.fetchNgStatesStats()
  }

  render () {
    const {
      // fetching_ng_stats,
      // ng_stats,
      fetching_ng_states_stats,
      ng_states_stats,
    } = this.state

    return (
      <PublicLayout pageTitle="COVID-19 Statistics" pageClass="statistics">
        <section className="section bg-grey3">
          <h1 className="font-weight-bold">COIVD-19 Statistics</h1>
        </section>

        <FloatCSSTransition in={true}>
          <section className="section">
            <h2>Nigeria</h2>

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
                              <input type="text"/>
                              <button title="clear input">✕</button>
                            </div>
                          </td>
                          <td>
                            <div className="input-filter">
                              <input type="text"/>
                              <button title="clear input">✕</button>
                            </div>
                          </td>
                          <td>
                            <div className="input-filter">
                              <input type="text"/>
                              <button title="clear input">✕</button>
                            </div>
                          </td>
                          <td>
                            <div className="input-filter">
                              <input type="text"/>
                              <button title="clear input">✕</button>
                            </div>
                          </td>
                          <td>
                            <div className="input-filter">
                              <input type="text"/>
                              <button title="clear input">✕</button>
                            </div>
                          </td>
                        </tr>
                        {ng_states_stats &&
                          ng_states_stats.map((state, index) => {
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
            </div>
          </section>
        </FloatCSSTransition>
      </PublicLayout>
    )
  }
}

// const nigerianStates = [
//   "Abia",
//   "Abuja FCT",
//   "Adamawa",
//   "Akwa Ibom",
//   "Anambra",
//   "Bauchi",
//   "Bayelsa",
//   "Benue",
//   "Borno",
//   "Cross River",
//   "Delta",
//   "Ebonyi",
//   "Edo",
//   "Ekiti",
//   "Enugu",
//   "Gombe",
//   "Imo",
//   "Jigawa",
//   "Kaduna",
//   "Kano",
//   "Katsina",
//   "Kebbi",
//   "Kogi",
//   "Kwara",
//   "Lagos",
//   "Nasarawa",
//   "Niger",
//   "Ogun",
//   "Ondo",
//   "Osun",
//   "Oyo",
//   "Plateau",
//   "Rivers",
//   "Sokoto",
//   "Taraba",
//   "Yobe",
//   "Zamfara"
// ]

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
