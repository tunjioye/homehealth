// import Link from 'next/link'
import PublicLayout from '@components/public-layout'

const ChatbotPage = () => {
  return (
    <PublicLayout pageTitle="Chatbot">
      <section style={sectionStyle}>
        <h1>Chat with our Chatbot</h1>
      </section>
      {/* <script async defer src="https://webchat2.botsupply.ai/sdk/RTOMP4Foy" type="text/javascript"></script> */}
    </PublicLayout>
  )
}

const sectionStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  minHeight: '80vh',
}

export default ChatbotPage
