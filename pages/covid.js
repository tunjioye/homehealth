import Link from 'next/link'
import PublicLayout from '@components/public-layout'
import StatsCard from '@components/stats-card'
import '@scss/pages/covid.scss'
import CONFIG from '../config'
import ReactMarkdown from 'react-markdown'

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
  <ReactMarkdown source={`There’s currently no vaccine to prevent coronavirus disease (COVID-19).

You can protect yourself and help prevent spreading the virus to others if you:

**Do**

- Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub
- Cover your nose and mouth with a disposable tissue or flexed elbow when you cough or sneeze
- Avoid close contact (1 meter or 3 feet) with people who are unwell
- Stay home and self-isolate from others in the household if you feel unwell

**Don't**

Touch your eyes, nose, or mouth if your hands are not clean`} />
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
