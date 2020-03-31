import Link from 'next/link'
import './styles/public-header.scss'
import CONFIG from '../config'

const PublicHeader = ({ activePageTitle, toggleSidebar }) => (
  <header className="header">
    <span className="logo">
      <Link href="/">
        <a href="/">
          {CONFIG.SITE_NAME}
        </a>
      </Link>
    </span>
    <span className="sidebar-toggle" onClick={toggleSidebar}>☰</span>
  </header>
)

export default PublicHeader
