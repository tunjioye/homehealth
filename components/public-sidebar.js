import Link from 'next/link'
import './styles/public-sidebar.scss'
import CONFIG from '../config'

const PublicSidebar = ({ activePageTitle, showSidebar, toggleSidebar }) => {
  const mapNavItem = ((navItem, navItemIndex) => {
    const {title, href, pageTitle} = navItem

    return (
      <li key={navItemIndex} className={(pageTitle !== undefined && pageTitle === activePageTitle) ? `active` : ``}>
        <Link href={href}>
          <a href={href}>{title}</a>
        </Link>
      </li>
    )
  }).bind(activePageTitle)

  const mappedMainNavList = mainNavList.map(mapNavItem)
  const mappedInformationNavList = CONFIG.INFORMATION_LIST.map(mapNavItem)
  const mappedServiceNavList = CONFIG.SERVICE_LIST.map(mapNavItem)

  return (
    <>
      <div className={`sidebar-overlay${(showSidebar) ? ` show` : ``}`} onClick={toggleSidebar}></div>
      <nav className={`sidebar${(showSidebar) ? ' show' : ''}`}>
        <div className="sidebar-header">
          <span className="logo">
            <Link href="/">
              <a href="/" className="no-underline" dangerouslySetInnerHTML={{__html: CONFIG.SITE_NAME_HTML}}></a>
            </Link>
          </span>
          <span className="sidebar-toggle" onClick={toggleSidebar}>✕</span>
        </div>
        <div className="sidebar-content">
          <nav>
            <ul className="nav mainnav">
              {mappedMainNavList}
            </ul>
          </nav>
          <ul className="nav subnav">
            {mappedInformationNavList}
          </ul>
          <ul className="nav subnav">
            {mappedServiceNavList}
          </ul>
          <footer className="footer">
            <span>
              <span>&copy; 2020</span>
              &nbsp;
              <a href="http://datacrestgroup.com" target="_blank">
                Datacrest Technologies
              </a>
            </span>
          </footer>
        </div>
      </nav>
    </>
  )
}

const mainNavList = [
  {
    title: 'COVID-19 Resources',
    href: '/covid',
    pageTitle: 'COVID-19',
  },
  {
    title: 'Our Service Forms',
    href: '/#services',
    pageTitle: 'Service Forms',
  },
]

export default PublicSidebar
