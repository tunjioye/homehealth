import React from 'react'

class BotScript extends React.Component {
  componentDidMount () {
    if (window['Zone']) {
      window['Zone'] = undefined
    }
  }

  render () {
    return (<script src="https://webchat2.botsupply.ai/sdk/RTOMP4Foy" type="text/javascript" async></script>)
    // return (<script type="text/javascript" src="/js/freshchat.min.js" async></script>)
  }
}

export default BotScript
