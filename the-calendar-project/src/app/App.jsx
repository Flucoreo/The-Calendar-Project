import React from 'react'
import Nav from './components/nav'
import Calendar from './components/calendar'
// import DayBox from './components/dayBox'

import "./globals.css"

export default function App() {
    return (
       <div>
          <Nav />
          <Calendar />
          {/* <DayBox /> */}
       </div>
    )
}
