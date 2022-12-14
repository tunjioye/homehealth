// import Link from 'next/link'
import PublicLayout from '@src/components/public-layout'

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
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  minHeight: '80vh',
}

export default ChatbotPage
