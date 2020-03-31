import Link from 'next/link'
import './styles/public-sidebar.scss'
import CONFIG from '../config'

const PublicSidebar = ({ activePageTitle, showSidebar, toggleSidebar }) => (
  <>
    <div className={`sidebar-overlay${(showSidebar) ? ' show' : ''}`} onClick={toggleSidebar}></div>
    <nav className={`sidebar${(showSidebar) ? ' show' : ''}`}>
      <div className="sidebar-header">
        <span className="logo">
          <Link href="/">
            <a href="/">
              {CONFIG.SITE_NAME}
            </a>
          </Link>
        </span>
        <span className="sidebar-toggle" onClick={toggleSidebar}></span>
      </div>
    </nav>
  </>
)

export default PublicSidebar
