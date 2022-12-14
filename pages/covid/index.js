import React from 'react'
import Link from 'next/link'
import PublicLayout from '@src/components/public-layout'
import StatsCard from '@src/components/stats-card'
import '@src/scss/pages/covid.scss'
import CONFIG from '@src/config'
import ReactMarkdown from 'react-markdown'
import {
  updateNigeriaStats,
  updateWorldwideStats,
} from '@src/redux/actions/statisticsActions'
import { connect } from 'react-redux'
import VideosContent from '@src/components/videos-content'
import axios from 'axios'

class CovidPage extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      fetching_ng_stats: true,
      ng_stats: props.ng_stats || {},
      fetching_world_stats: true,
      world_stats: props.world_stats || {},
    }

    this.fetchNgStats = this.fetchNgStats.bind(this)
    this.fetchWorldStats = this.fetchWorldStats.bind(this)
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

  async fetchWorldStats () {
    let world_stats = {}

    if (Object.keys(this.props.world_stats).length !== 0) {
      world_stats = this.props.world_stats
    } else {
      try {
        const { data } = await axios.get('https://homehealth-api.herokuapp.com/country-covid-stats?country_name=World')
        world_stats = data[0]

        this.props.updateWorldwideStats(world_stats)
      } catch (error) {
        console.error(error)
      }
    }

    this.setState({
      fetching_world_stats: false,
      world_stats,
    })
  }

  componentDidMount () {
    this.fetchNgStats()
    this.fetchWorldStats()
  }

  render () {
    const {
      fetching_ng_stats,
      ng_stats,
      fetching_world_stats,
      world_stats,
    } = this.state

    const statisticsContent = () => (
      <div>
        <div className="statistics">
          <div className="flex-heading">
            <h5 className="font-weight-bold">Nigeria ???????? &nbsp;</h5>
            <div>
              <Link href="/covid/statistics">
                <a href="/covid/statistics" className="font-weight-bold no-underline">more statistics</a>
              </Link>
            </div>
          </div>
          <div className="stats-card-wrapper">
            {(fetching_ng_stats === false)
              ? (
                <>
                  <StatsCard value={Intl.NumberFormat().format(ng_stats.total_cases || 0)} title="Confirmed Cases" />
                  <StatsCard value={Intl.NumberFormat().format(ng_stats.active_cases || 0)} title="Active Cases" />
                  <StatsCard value={Intl.NumberFormat().format(ng_stats.recovered || 0)} title="Recovered" />
                  <StatsCard value={Intl.NumberFormat().format(ng_stats.deaths || 0)} title="Deaths" classNames="text-primary" />
                </>
              )
              : (
                <div>fetching statistics ...</div>
              )
            }
          </div>
        </div>
        <div className="statistics">
          <div>
            <h5 className="font-weight-bold">Worldwide ????</h5>
          </div>
          <div className="stats-card-wrapper">
            {(fetching_world_stats === false)
              ? (
                <>
                  <StatsCard value={Intl.NumberFormat().format(world_stats.total_cases || 0)} title="Confirmed Cases" />
                  <StatsCard value={Intl.NumberFormat().format(world_stats.active_cases || 0)} title="Active Cases" />
                  <StatsCard value={Intl.NumberFormat().format(world_stats.recovered || 0)} title="Recovered" />
                  <StatsCard value={Intl.NumberFormat().format(world_stats.deaths || 0)} title="Deaths" classNames="text-primary" />
                </>
              )
              : (
                <div>fetching statistics ...</div>
              )
            }
          </div>
        </div>
      </div>
    )

    const overviewContent = () => (
      <div>
        <p>Coronavirus disease (COVID-19) is an infectious disease caused by a new virus.</p>
        <p>The disease causes respiratory illness (like the flu) with symptoms such as a cough, fever, and in more severe cases, difficulty breathing. You can protect yourself by washing your hands frequently, avoiding touching your face, and avoiding close contact (1 meter or 3 feet) with people who are unwell.</p>
        <p>Coronavirus disease spreads primarily through contact with an infected person when they cough or sneeze. It also spreads when a person touches a surface or object that has the virus on it, then touches their eyes, nose, or mouth.</p>
      </div>
    )

    const symptomsContent = () => (
      <div>
        <div className="auto-grid">
          <div>
            <div className="ai-fe">
              <img className="scale-up" src="/svg/symptom01.svg" alt="..."/>
            </div>
            <div>High fever</div>
          </div>
          <div>
            <div className="ai-fe">
              <img className="scale-up" src="/svg/symptom02.svg" alt="..."/>
            </div>
            <div>Dry cough</div>
          </div>
          <div>
            <div className="ai-fe">
              <img className="scale-up" src="/svg/symptom03.svg" alt="..."/>
            </div>
            <div>Difficulty breathing</div>
          </div>
          <div>
            <div className="ai-fe">
              <img className="scale-up" src="/svg/symptom04.svg" alt="..."/>
            </div>
            <div>Tiredness</div>
          </div>
        </div>
      </div>
    )

    const preventionContent = () => (
      <div>
        <div className="auto-grid">
          <div>
            <div className="overflow-visible">
              <img className="scale-up" src="/svg/preventn01.svg" alt="..."/>
            </div>
            <div>Avoid close contact</div>
          </div>
          <div>
            <div className="overflow-visible">
              <img className="scale-up" src="/svg/preventn02.svg" alt="..."/>
            </div>
            <div>Wash your hands often</div>
          </div>
          <div>
            <div>
              <img className="scale-down" src="/svg/preventn03.svg" alt="..."/>
            </div>
            <div>Stay at home</div>
          </div>
          <div>
            <div>
              <img className="scale-up" src="/svg/preventn04.svg" alt="..."/>
            </div>
            <div>Cover coughs <br/>and sneezes</div>
          </div>
          <div>
            <div>
              <img className="scale-up" src="/svg/preventn05.svg" alt="..."/>
            </div>
            <div>Wear a facemask <br/>if you are sick</div>
          </div>
          <div>
            <div>
              <img className="scale-down" src="/svg/preventn06.svg" alt="..."/>
            </div>
            <div>Clean and disinfect</div>
          </div>
        </div>
      </div>
    )

    const treatmentsContent = () => (
      <ReactMarkdown source={`There is no specific medicine to prevent or treat coronavirus disease (COVID-19). People may need supportive care to help them breathe.

**Self care**

If you have mild symptoms, stay at home until you???ve recovered. You can relieve your symptoms if you:

- rest and sleep
- keep warm
- drink plenty of liquids
- use a room humidifier or take a hot shower to help ease a sore throat and cough

**Medical treatments**

If you develop a fever, cough, and have difficulty breathing, promptly seek medical care. Call in advance and tell your health provider of any recent travel or recent contact with travelers.`} />
    )

    const faqsContent = () => {
      const mappedFaqs = CONFIG.FAQS.map((faq, faqIndex) => {
        const {question, answer} = faq

        return (
          <div key={faqIndex} className="accordion faq">
            {(faqIndex < 2)
              ? <input id={`accordion-${faqIndex}`} type="checkbox" name="accordion-checkbox" hidden checked onChange={(e) => (e.target.toggleAttribute('checked'))} />
              : <input id={`accordion-${faqIndex}`} type="checkbox" name="accordion-checkbox" hidden />
            }
            <label className="accordion-header" htmlFor={`accordion-${faqIndex}`}>
              <span className="icon left"></span>
              {question}
            </label>
            <div className="accordion-body">
              {answer}
            </div>
          </div>
        )
      })

      return (
        <div className="faqs-grid">
          {mappedFaqs}
        </div>
      )
    }

    const tweetsContent = () => (
      <div className="">
        // recent tweets about #coronavirus to be soon displayed here ...
      </div>
    )

    const videosContent = () => {
      const mappedVideos = CONFIG.VIDEOS.map((video, videoIndex) => {
        const {title, videoId} = video

        return <VideosContent key={videoIndex} title={title} videoId={videoId} />
      })

      return (
        <div>
          <div className="videos-flex">
            {mappedVideos}
          </div>
          <p className="text-grey3"><small>??????</small> <small>scroll horizontally for more</small></p>
        </div>
      )
    }

    const otherResourcesContent = () => {
      const mappedOtherResources = CONFIG.OTHER_RESOURCES.map((otherRes, otherResIndex) => {
        const {title, href} = otherRes

        return (
          <li key={otherResIndex}>
            <a href={href} target="_blank" rel="noreferrer noopener">{title}</a>
          </li>
        )
      })

      return (
        <div className="other-resources">
          <ul className="nav resourcenav">
            {mappedOtherResources}
          </ul>
        </div>
      )
    }

    const contentSwitch = (sectionHash) => {
      switch(sectionHash) {
        case "statistics":
          return statisticsContent()
          break
        case "overview":
          return overviewContent()
          break
        case "symptoms":
          return symptomsContent()
          break
        case "prevention":
          return preventionContent()
          break
        case "treatments":
          return treatmentsContent()
          break
        case "faqs":
          return faqsContent()
          break
        case "tweets":
          return tweetsContent()
          break
        case "videos":
          return videosContent()
          break
        case "other-resources":
          return otherResourcesContent()
          break
        default:
          return null
          break
      }
    }

    const mappedInformationList = CONFIG.INFORMATION_LIST.map(((listItem, listItemIndex, informationList) => {
      const {title, hash} = listItem
      const prevHash = (informationList[listItemIndex - 1]) ? informationList[listItemIndex - 1].hash : null
      const nextHash = (informationList[listItemIndex + 1]) ? informationList[listItemIndex + 1].hash : null

      return (
        <div id={hash} key={listItemIndex} className={(listItemIndex % 2 === 0) ? 'bg-grey1' : ''}>
          <section className="section">
            <div className="flex-heading font-weight-bold">
              <h3>
                <Link href={`#${hash}`}>
                  <a href={`#${hash}`} className="no-underline">
                    #
                  </a>
                </Link>
                &nbsp;
                <strong>{title}</strong>
                &nbsp;
              </h3>
              {(prevHash || nextHash) &&
                <div>
                  {(prevHash) &&
                    <>
                      <Link href={`#${prevHash}`}>
                        <a href={`#${prevHash}`} className="font-weight-bold no-underline">Prev</a>
                      </Link>
                      &nbsp;
                    </>
                  }
                  {(nextHash) &&
                    <Link href={`#${nextHash}`}>
                      <a href={`#${nextHash}`} className="font-weight-bold no-underline">Next</a>
                    </Link>
                  }
                </div>
              }
            </div>
            {contentSwitch(hash)}
          </section>
        </div>
      )
    }).bind(contentSwitch))
    return (
      <PublicLayout pageTitle="COVID-19" pageClass="covid">
        {mappedInformationList}
      </PublicLayout>
    )
  }
}

// CovidPage.getInitialProps = async (ctx) => {
//   const { store } = ctx
//   let ng_stats = {}
//   let world_stats = {}

//   if (Object.keys(store.getState().statistics.ng_stats).length === 0) {
//     try {
//       const { data } = await axios.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?search=nigeria')
//       ng_stats = data.rows[0]
//       // const { data } = await axios.get('https://homehealth-api.herokuapp.com/country-covid-stats?country_name=Nigeria')
//       // ng_stats = data[0]

//       store.dispatch(updateNigeriaStats(ng_stats))
//     } catch (error) {
//       console.error(error)
//     }

//     try {
//       const { data } = await axios.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?search=world')
//       world_stats = data.rows[0]
//       // const { data } = await axios.get('https://homehealth-api.herokuapp.com/country-covid-stats?country_name=World')
//       // world_stats = data[0]

//       store.dispatch(updateWorldwideStats(world_stats))
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   return {
//     ng_stats,
//     world_stats,
//   }
// }

const mapStateToProps = state => {
  const {statistics} = state

  return {
    ng_stats: statistics.ng_stats || {},
    world_stats: statistics.world_stats || {},
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateNigeriaStats: (ng_stats) => dispatch(updateNigeriaStats(ng_stats)),
    updateWorldwideStats: (world_stats) => dispatch(updateWorldwideStats(world_stats)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CovidPage)
