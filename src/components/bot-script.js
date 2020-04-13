const BotScript = () => (<script src="https://webchat2.botsupply.ai/sdk/RTOMP4Foy" type="text/javascript" async></script>)
// const BotScript = () => (<script type="text/javascript" src="/js/freshchat.min.js" async></script>)

BotScript.getInitialProps = () => {
  return {
    ssr: false
  }
}

export default BotScript
