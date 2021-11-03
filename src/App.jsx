import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Checkbox from './list/checkbox'
import ListRow from './list/listrow'
import ServicePlan from './list/servicePlan'

function App() {
  return (
    <>
      <ListRow />
      <ServicePlan />
    </>
  )
}

export default App
