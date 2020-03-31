import Link from 'next/link'
import PublicLayout from '@components/public-layout'
import '@scss/pages/index.scss'
import ListItem from '@components/list-item'

const IndexPage = () => {
  const mappedInformationList = informationList.map(mapListItem)
  const mappedServicesList = servicesList.map(mapListItem)

  return (
    <PublicLayout pageClass="index">
      <div id="resources" className="mb-5"></div>
      <section>
        <div className="flex flex-row-fs-c mb-1">
          <h1>
            <Link href="#resources">
              <a href="#resources" className="no-underline">
                #
              </a>
            </Link>
            &nbsp;
            <strong>Information We Provide</strong>
            &nbsp;
          </h1>
          <Link href="#services">
            <a href="#services" className="font-weight-bold no-underline">Our Service Forms</a>
          </Link>
        </div>
        <div>{mappedInformationList}</div>
      </section>

      <div id="services" className="mb-5"></div>
      <section>
        <div className="flex flex-row-fs-c mb-1 font-weight-bold">
          <h1>
            <Link href="#services">
              <a href="#services" className="no-underline">
                #
              </a>
            </Link>
            &nbsp;
            <strong>Our Service Forms</strong>
            &nbsp;
          </h1>
          <Link href="#resources">
            <a href="#resources" className="font-weight-bold no-underline">Information We Provide</a>
          </Link>
        </div>
        <div>{mappedServicesList}</div>
      </section>
    </PublicLayout>
  )
}

const mapListItem = (listItem, listItemIndex) => {
  const {title, description, link} = listItem

  return (
    <ListItem key={listItemIndex} title={title} desc={description} link={link} />
  )
}

const informationList = [
  {
    title: 'COVID-19 Statistics',
    description: 'See our COVID-19 Dashboard for recent Statistics in Nigeria & The Whole World',
    link: '/covid',
  },
  {
    title: 'What is COVID-19?',
    description: 'The coronavirus disease (COVID-19) is an infectious disease caused by a new virus',
    link: '/covid',
  },
  {
    title: 'COVID-19 Symptoms',
    description: 'Cough, Fever, Tiredness, Difficulty Breathing (in severe cases)',
    link: '/covid',
  },
  {
    title: 'COVID-19 Prevention',
    description: 'There’s currently no vaccine to prevent COVID-19. But, You can help prevent spreading of the virus to others if you:',
    link: '/covid',
  },
  {
    title: 'COVID-19 Treatments',
    description: 'Medical Care and Self Care such as Resting & Sleeping, Drinking plenty of liquids etc.',
    link: '/covid',
  },
  {
    title: 'COVID-19 FAQs',
    description: 'Frequently Asked Questions about COVID-19 and corresponding Expert Answers',
    link: '/covid',
  },
  {
    title: 'COVID-19 Tweets',
    description: 'Read the most recent tweets about the coronavirus disease (COVID-19)',
    link: '/covid',
  },
  {
    title: 'Handpicked COVID-19 Videos',
    description: 'Watch handpicked informative videos on COIVID-19 from YouTube',
    link: '/covid',
  },
  {
    title: 'Other Useful Resources',
    description: 'A List of other useful resources or news from sources like NCDC, WHO, CDC etc.',
    link: '/covid',
  },
]

const servicesList = [
  {
    title: 'COVID-19 Risk Assessment',
    description: 'Take a quiz as our chatbot predicts your risk of having the coronavirus',
    link: '/#services',
  },
  {
    title: 'Request a Call from a Doctor',
    description: 'Fill a form to request help or support from a Qualified Medical Doctor',
    link: '/#services',
  },
  {
    title: 'Purchase Medication & PPE',
    description: 'Purchase some medication drugs and personal protective gear (PPE)',
    link: '/#services',
  },
  {
    title: 'Request for Quarantine',
    description: 'Fill a form to request for Quarantine or a nearby Hotel for Self Isolation ',
    link: '/#services',
  },
  {
    title: 'Report a COVID-19 Suspect',
    description: 'Fill our form to report someone you suspect has COVID-19 and why?',
    link: '/#services',
  },
]

export default IndexPage
