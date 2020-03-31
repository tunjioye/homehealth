import Link from 'next/link'
import PublicLayout from '@components/public-layout'
// import Section from '@components/section'
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Card,
} from 'react-bootstrap'

const IndexPage = () => {
  return (
    <PublicLayout pageTitle="Home">
      <Container fluid>
        <Jumbotron className="mb-5">
          <div className="text-center mb-5">
            <h1 className="title">homehealth</h1>
            <p className="lead">read accurate information from various sources about corona virus</p>
          </div>
          <Row className="text-center">
            <Col lg={3} md={6} xs={12} className="mb-2">
              <Link href="/forms/order-test">
                <a href="/forms/order-test">Order Test</a>
              </Link>
            </Col>
            <Col lg={3} md={6} xs={12} className="mb-2">
              <Link href="/forms/request-call">
                <a href="/forms/request-call">Request a call from a Doctor</a>
              </Link>
            </Col>
            <Col lg={3} md={6} xs={12} className="mb-2">
              <Link href="/forms/order-medication">
                <a href="/forms/order-medication">Order Medication Drugs</a>
              </Link>
            </Col>
            <Col lg={3} md={6} xs={12} className="mb-2">
              <Link href="/forms/request-quarantine">
                <a href="/forms/request-quarantine">Request Quarantine</a>
              </Link>
            </Col>
          </Row>
        </Jumbotron>

        <section className="mb-5">
          <div>
            <h2>News from <abbr title="World Health Organization">WHO</abbr></h2>
            <p><em>Information provided by The World Health Organization</em></p>
          </div>
          <Row>
            {
              [1,2,3,4].map((number) => (
                <Col lg={3} md={4} sm={6} xs={12} key={number}>
                  <Card className="mb-2">
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                      <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.
                      </Card.Text>
                      <Card.Link href="#">Read</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </section>

        <section className="mb-5">
          <div>
            <h2>News from <abbr title="Nigeria Centre for Disease Control">NCDC</abbr></h2>
            <p><em>Information provided by Nigeria Centre for Disease Control</em></p>
          </div>
          <Row>
            {
              [1,2,3,4].map((number) => (
                <Col lg={3} md={4} sm={6} xs={12} key={number}>
                  <Card className="mb-2">
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                      <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.
                      </Card.Text>
                      <Card.Link href="#">Read</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </section>

        <section className="mb-5">
          <div>
            <h2>News from Lagos State Government</h2>
            <p><em>Information provided by Lagos State Government</em></p>
          </div>
          <Row>
            {
              [1,2,3,4].map((number) => (
                <Col lg={3} md={4} sm={6} xs={12} key={number}>
                  <Card className="mb-2">
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                      <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.
                      </Card.Text>
                      <Card.Link href="#">Read</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </section>
      </Container>
    </PublicLayout>
  )
}

export default IndexPage
