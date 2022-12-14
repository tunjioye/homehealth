import Link from 'next/link'
import PublicLayout from '@src/components/public-layout'
import '@src/scss/pages/index.scss'
import ListItem from '@src/components/list-item'
import CONFIG from '@src/config'

const IndexPage = () => {
  const mappedInformationList = CONFIG.INFORMATION_LIST.map(mapListItem)
  const mappedServiceList = CONFIG.SERVICE_LIST.map(mapListItem)

  return (
    <PublicLayout pageClass="index">
      <div id="resources">
        <section className="section">
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
            <div>
              <Link href="#services">
                <a href="#services" className="font-weight-bold no-underline">Our Service Forms</a>
              </Link>
            </div>
          </div>
          <div>{mappedInformationList}</div>
        </section>
      </div>

      <div id="services">
        <section className="section">
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
            <div>
              <Link href="#resources">
                <a href="#resources" className="font-weight-bold no-underline">Information We Provide</a>
              </Link>
            </div>
          </div>
          <div>{mappedServiceList}</div>
        </section>
      </div>
    </PublicLayout>
  )
}

const mapListItem = (listItem, listItemIndex) => {
  const {title, description, href, hash} = listItem

  return (
    <ListItem key={listItemIndex} title={title} desc={description} href={href} hash={hash} />
  )
}

export default IndexPage
