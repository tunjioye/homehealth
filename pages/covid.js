import Link from 'next/link'
import PublicLayout from '@components/public-layout'
import StatsCard from '@components/stats-card'
import '@scss/pages/covid.scss'
import CONFIG from '../config'

const statisticsContent = () => {
  return (
    <div>
      <div className="statistics">
        <div>
          <h5 className="font-weight-bold">Nigeria 🇳🇬</h5>
        </div>
        <div className="stats-card-wrapper">
          <StatsCard value="184" title="Confirmed Cases" />
          <StatsCard value="162" title="Active Cases" />
          <StatsCard value="20" title="Recovered" />
          <StatsCard value="2" title="Death" classNames="text-primary" />
        </div>
      </div>
      <div className="statistics">
        <div>
          <h5 className="font-weight-bold">Worldwide 🌎</h5>
        </div>
        <div className="stats-card-wrapper">
          <StatsCard value="998,047" title="Confirmed Cases" />
          <StatsCard value="738,082" title="Active Cases" />
          <StatsCard value="208,630" title="Recovered" />
          <StatsCard value="51,335" title="Death" classNames="text-primary" />
        </div>
      </div>
    </div>
  )
}

const overviewContent = () => (
  <div>
    <p>Coronavirus disease (COVID-19) is an infectious disease caused by a new virus.</p>
    <p>The disease causes respiratory illness (like the flu) with symptoms such as a cough, fever, and in more severe cases, difficulty breathing. You can protect yourself by washing your hands frequently, avoiding touching your face, and avoiding close contact (1 meter or 3 feet) with people who are unwell.</p>
    <p>Coronavirus disease spreads primarily through contact with an infected person when they cough or sneeze. It also spreads when a person touches a surface or object that has the virus on it, then touches their eyes, nose, or mouth.</p>
  </div>
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
      return null
      break
    case "prevention":
      return null
      break
    case "treatments":
      return null
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

const IndexPage = () => {
  const mappedInformationList = CONFIG.INFORMATION_LIST.map(((listItem, listItemIndex, informationList) => {
    const {title, hash} = listItem
    const prevHash = (informationList[listItemIndex - 1]) ? informationList[listItemIndex - 1].hash : null
    const nextHash = (informationList[listItemIndex + 1]) ? informationList[listItemIndex + 1].hash : null

    return (
      <div key={listItemIndex} className={(listItemIndex % 2 === 0) ? 'bg-grey3' : ''}>
        <div id={hash} className="pb-5"></div>
        <section className="pb-5">
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
                      <a href={`#${prevHash}`} className="font-weight-bold no-underline">prev</a>
                    </Link>
                    &nbsp;
                  </>
                }
                {(nextHash) &&
                  <Link href={`#${nextHash}`}>
                    <a href={`#${nextHash}`} className="font-weight-bold no-underline">next</a>
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

export default IndexPage
