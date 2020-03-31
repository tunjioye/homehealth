import Link from 'next/link'
import PublicLayout from '@components/public-layout'
import '@scss/pages/index.scss'
import ListItem from '@components/list-item'
import CONFIG from '../config'

const IndexPage = () => {
  const mappedInformationList = CONFIG.INFORMATION_LIST.map(mapListItem)
  const mappedServiceList = CONFIG.SERVICE_LIST.map(mapListItem)

  return (
    <PublicLayout pageClass="index">
      <div id="resources" className="mb-5"></div>
      <section>
        <div className="flex-heading">
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
        <div className="flex-heading font-weight-bold">
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
        <div>{mappedServiceList}</div>
      </section>
    </PublicLayout>
  )
}

const mapListItem = (listItem, listItemIndex) => {
  const {title, description, href} = listItem

  return (
    <ListItem key={listItemIndex} title={title} desc={description} href={href} />
  )
}

export default IndexPage
