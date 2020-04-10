// import Link from 'next/link'
import PublicLayout from '@src/components/public-layout'
import redirectTo from '@src/utils/redirectTo'

const ServiceFormsPage = () => {
  return (
    <PublicLayout pageTitle="Service Forms">
      <section style={sectionStyle}>
        <h1>Our Service Forms</h1>
      </section>
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

ServiceFormsPage.getInitialProps = ctx => {
  const { res } = ctx
  redirectTo('/forms/risk-assessment', { res, status: 302 })
  return {}
}

export default ServiceFormsPage
