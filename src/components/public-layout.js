import Head from 'next/head'
import './styles/public-layout.scss'
import CONFIG from '@src/config'
import PublicHeader from './public-header'
import PublicSidebar from './public-sidebar'
import PublicFooter from './public-footer'

class PublicLayout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showSidebar: false
    }

    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  toggleSidebar () {
    const {showSidebar} = this.state

    this.setState({
      showSidebar: !showSidebar
    })
  }

  render () {
    const {pageTitle, pageClass, children} = this.props
    const {showSidebar} = this.state

    return (
      <div className={`layout${pageClass ? ` ${pageClass}` : ``}`}>
        <Head>
          {(pageTitle)
            ? <title>{pageTitle} | {CONFIG.SITE_NAME}</title>
            : <title>{CONFIG.SITE_NAME}</title>
          }
          <meta name="description" content="a portal that provides accurate information about corona virus to the people"/>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <PublicHeader toggleSidebar={this.toggleSidebar} />
        <PublicSidebar activePageTitle={pageTitle} showSidebar={showSidebar} toggleSidebar={this.toggleSidebar} />
        <main className="main-content">
          {children}
          <script src="https://webchat2.botsupply.ai/sdk/RTOMP4Foy" type="text/javascript" async></script>
        </main>
        <PublicFooter />
      </div>
    )
  }
}

export default PublicLayout
