import Head from 'next/head'
import './styles/public-layout.scss'
import CONFIG from '@src/config'
import PublicHeader from './public-header'
import PublicSidebar from './public-sidebar'
import PublicFooter from './public-footer'
import NoSSR from 'react-no-ssr'
// import axios from 'axios'

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

  // componentDidMount () {
  //   setTimeout(() => {
  //     axios.get('https://webchat2.botsupply.ai/sdk/RTOMP4Foy')
  //       .then((res) => {
  //         const {data} = res
  //         document.getElementById('botscript').innerHTML = data
  //       })
  //       .catch((err) => console.error(err))
  //   }, 1000)
  // }

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
          <NoSSR>
            <script src="https://webchat2.botsupply.ai/sdk/RTOMP4Foy" type="text/javascript" async defer></script>
          </NoSSR>
          {/* <script id="botscript" type="text/javascript"></script> */}
        </main>
        <PublicFooter />
      </div>
    )
  }
}

export default PublicLayout
