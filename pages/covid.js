import Link from 'next/link'
import PublicLayout from '@components/public-layout'
import '@scss/pages/covid.scss'
import CONFIG from '../config'

const overViewMarkdown = () => (
  <div>
    <p>Coronavirus disease (COVID-19) is an infectious disease caused by a new virus.</p>
    <p>The disease causes respiratory illness (like the flu) with symptoms such as a cough, fever, and in more severe cases, difficulty breathing. You can protect yourself by washing your hands frequently, avoiding touching your face, and avoiding close contact (1 meter or 3 feet) with people who are unwell.</p>
    <p>Coronavirus disease spreads primarily through contact with an infected person when they cough or sneeze. It also spreads when a person touches a surface or object that has the virus on it, then touches their eyes, nose, or mouth.</p>
  </div>
)

const contentSwitch = (sectionHash) => {
  switch(sectionHash) {
    case "overview":
      return overViewMarkdown()
      break
    case "symptoms":
      return overViewMarkdown()
      break
    case "prevention":
      return overViewMarkdown()
      break
    case "treatments":
      return overViewMarkdown()
      break
    case "faqs":
      return overViewMarkdown()
      break
    case "other-resources":
      return overViewMarkdown()
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
        <section>
          <div className="flex-heading font-weight-bold">
            <h2>
              <Link href={`#${hash}`}>
                <a href={`#${hash}`} className="no-underline">
                  #
                </a>
              </Link>
              &nbsp;
              <strong>{title}</strong>
              &nbsp;
            </h2>
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
          <div>{contentSwitch(hash)}</div>
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
