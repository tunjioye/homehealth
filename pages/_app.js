
import React from 'react'
import NProgress from "nprogress"
import Router from 'next/router'
import '../scss/bootstrap.scss'
import '../scss/index.scss'

const MyApp = ({ Component, pageProps }) => {
  Router.events.on('routeChangeStart', () => NProgress.start())
  Router.events.on('routeChangeComplete', () => NProgress.done())
  Router.events.on('routeChangeError', () => NProgress.done())

  return <Component {...pageProps} />
}

export default MyApp
