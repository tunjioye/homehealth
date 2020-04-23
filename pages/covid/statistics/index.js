import React from 'react'
// import Link from 'next/link'
import PublicLayout from '@src/components/public-layout'
import '@src/scss/pages/statistics.scss'
import FloatCSSTransition from '@src/components/float-css-transition'

class StatisticsPage extends React.Component {
  render () {
    return (
      <PublicLayout pageTitle="Statistics" pageClass="statistics">
        <section className="section bg-grey3">
          <h1 className="font-weight-bold">Statistics</h1>
        </section>

        <FloatCSSTransition in={true}>
          <section className="section">
            <h4>Nigeria</h4>



          </section>
        </FloatCSSTransition>
      </PublicLayout>
    )
  }
}

// const nigerianStates = [
//   "Abia",
//   "Adamawa",
//   "Akwa Ibom",
//   "Anambra",
//   "Bauchi",
//   "Bayelsa",
//   "Benue",
//   "Borno",
//   "Cross River",
//   "Delta",
//   "Ebonyi",
//   "Edo",
//   "Ekiti",
//   "Enugu",
//   "FCT - Abuja",
//   "Gombe",
//   "Imo",
//   "Jigawa",
//   "Kaduna",
//   "Kano",
//   "Katsina",
//   "Kebbi",
//   "Kogi",
//   "Kwara",
//   "Lagos",
//   "Nasarawa",
//   "Niger",
//   "Ogun",
//   "Ondo",
//   "Osun",
//   "Oyo",
//   "Plateau",
//   "Rivers",
//   "Sokoto",
//   "Taraba",
//   "Yobe",
//   "Zamfara"
// ]

export default StatisticsPage
