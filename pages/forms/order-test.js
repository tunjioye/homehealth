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

const OrderTestPage = () => {
  return (
    <PublicLayout pageTitle="Order Test">
      <Container fluid>
        <Jumbotron>
          <div className="text-center mb-5">
            <h1 className="title">Order Test</h1>
            <p className="lead">fill form to order for a corona virus test</p>
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
      </Container>
    </PublicLayout>
  )
}

export default OrderTestPage
