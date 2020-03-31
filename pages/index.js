import Link from 'next/link'
import PublicLayout from '@components/public-layout'
import '@scss/pages/index.scss'

const IndexPage = () => {
  return (
    <PublicLayout>
      <section id="resources" className="mb-5">
        <h1>
          <Link href="#resources">
            <a href="#resources" className="text-bold no-underline">
              #
            </a>
          </Link>
          &nbsp;
          <strong>Information We Provide</strong>
        </h1>
        <Link href="/covid19">
          <a href="/covid19">COVID-19 Resources</a>
        </Link>
      </section>
      <section id="services">
        <h1>
          <Link href="#resources">
            <a href="#resources" className="text-bold no-underline">
              #
            </a>
          </Link>
          &nbsp;
          <strong>Our Service Forms</strong>
        </h1>
      </section>
    </PublicLayout>
  )
}

export default IndexPage
