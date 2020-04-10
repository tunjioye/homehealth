import Link from 'next/link'
import './styles/public-header.scss'
import CONFIG from '@src/config'

const PublicHeader = ({ toggleSidebar }) => (
  <header className="header">
    <span className="logo">
      <Link href="/">
        <a href="/" className="no-underline" dangerouslySetInnerHTML={{__html: CONFIG.SITE_NAME_HTML}}></a>
      </Link>
    </span>
    <span className="sidebar-toggle" onClick={toggleSidebar}>☰</span>
  </header>
)

export default PublicHeader
