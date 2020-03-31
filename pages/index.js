import Link from 'next/link'
import PublicLayout from '@components/public-layout'
import '@scss/pages/index.scss'

const IndexPage = () => {
  return (
    <PublicLayout>
      <div id="resources" className="mb-5"></div>
      <section>
        <div className="flex flex-row-fs-c">
          <h1>
            <Link href="#resources">
              <a href="#resources" className="text-bold no-underline">
                #
              </a>
            </Link>
            &nbsp;
            <strong>Information We Provide</strong>
            &nbsp;
          </h1>
          <Link href="#services">
            <a href="#services">Our Service Forms</a>
          </Link>
        </div>
        <Link href="/covid19">
          <a href="/covid19">COVID-19 Resources</a>
        </Link>
      </section>

      <div id="services" className="mb-5"></div>
      <section>
        <div className="flex flex-row-fs-c">
          <h1>
            <Link href="#services">
              <a href="#services" className="text-bold no-underline">
                #
              </a>
            </Link>
            &nbsp;
            <strong>Our Service Forms</strong>
            &nbsp;
          </h1>
          <Link href="#resources">
            <a href="#resources">Information We Provide</a>
          </Link>
        </div>
      </section>
    </PublicLayout>
  )
}

export default IndexPage
