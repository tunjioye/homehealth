import Link from 'next/link'
import PublicLayout from '@components/public-layout'
import StatsCard from '@components/stats-card'
import '@scss/pages/covid.scss'
import CONFIG from '../config'
import ReactMarkdown from 'react-markdown'
import fetch from 'isomorphic-unfetch'
import {
  updateNigeriaStats,
  updateWorldwideStats,
} from '../redux/actions/statisticsActions'
import { connect } from 'react-redux'

const CovidPage = ({ng_stats, world_stats}) => {
  const statisticsContent = () => (
    <div>
      <div className="statistics">
        <div>
          <h5 className="font-weight-bold">Nigeria 🇳🇬</h5>
        </div>
        <div className="stats-card-wrapper">
          <StatsCard value={ng_stats.total_cases || 0} title="Confirmed Cases" />
          <StatsCard value={ng_stats.active_cases || 0} title="Active Cases" />
          <StatsCard value={ng_stats.total_recovered || 0} title="Recovered" />
          <StatsCard value={ng_stats.total_deaths || 0} title="Death" classNames="text-primary" />
        </div>
      </div>
      <div className="statistics">
        <div>
          <h5 className="font-weight-bold">Worldwide 🌎</h5>
        </div>
        <div className="stats-card-wrapper">
          <StatsCard value={world_stats.total_cases || 0} title="Confirmed Cases" />
          <StatsCard value={world_stats.active_cases || 0} title="Active Cases" />
          <StatsCard value={world_stats.total_recovered || 0} title="Recovered" />
          <StatsCard value={world_stats.total_deaths || 0} title="Death" classNames="text-primary" />
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
    <ReactMarkdown source={`People may be sick with the virus for 1 to 14 days before developing symptoms.

The most common symptoms of coronavirus disease (COVID-19) are **fever, tiredness, and dry cough.**

Most people (about 80%) recover from the disease without needing special treatment.

More rarely, the disease can be serious and even fatal. Older people, and people with other medical conditions (such as asthma, diabetes, or heart disease), may be more vulnerable to becoming severely ill.

**People may experience:**
- cough
- fever
- tiredness
- difficulty breathing (in severe cases)`} />
  )

  const preventionContent = () => (
    <div>
      <div className="prevention-wrapper">
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

If you have mild symptoms, stay at home until you’ve recovered. You can relieve your symptoms if you:

- rest and sleep
- keep warm
- drink plenty of liquids
- use a room humidifier or take a hot shower to help ease a sore throat and cough

**Medical treatments**

If you develop a fever, cough, and have difficulty breathing, promptly seek medical care. Call in advance and tell your health provider of any recent travel or recent contact with travelers.`} />
  )

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
        return null
        break
      case "other-resources":
        return null
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
      <div id={hash} key={listItemIndex} className={(listItemIndex % 2 === 0) ? 'bg-grey3' : ''}>
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

CovidPage.getInitialProps = async (ctx) => {
  const { store } = ctx
  let ng_stats = {}
  let world_stats = {}

  if (Object.keys(store.getState().statistics.ng_stats).length === 0) {
    let nigerianStatsRes = await fetch('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?search=nigeria')
    nigerianStatsRes = await nigerianStatsRes.json()
    ng_stats = nigerianStatsRes.data.rows[0]

    let worldwideStatsRes = await fetch('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?search=world')
    worldwideStatsRes = await worldwideStatsRes.json()
    world_stats = worldwideStatsRes.data.rows[0]

    store.dispatch(updateNigeriaStats(ng_stats))
    store.dispatch(updateWorldwideStats(world_stats))
  }

  return {
    ng_stats,
    world_stats,
  }
}

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
