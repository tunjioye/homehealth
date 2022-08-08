
import React from 'react'
import NProgress from "nprogress"
import Router from 'next/router'
import '@src/scss/index.scss'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import initializeStore from '@src/redux/store'

const MyApp = ({ Component, pageProps, store }) => {
  Router.events.on('routeChangeStart', () => NProgress.start())
  Router.events.on('routeChangeComplete', () => NProgress.done())
  Router.events.on('routeChangeError', () => NProgress.done())

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

MyApp.getInitialProps = async ({Component, ctx}) => {
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  // // set auth information into redux store on the server-side
  // const { store } = ctx
  // if (auth) store.dispatch(setAuth(auth))

  return {
    pageProps,
  }
}

export default withRedux(initializeStore, {debug: false})(MyApp)
