import React, { useState, useEffect } from 'react'
import EventRow from './eventrow'
import Task from './task'

const ServicePlan = () => {
  const [allServices, setAllServices] = useState([])
  const fetchServices = async () => {
    const response = await fetch('/serviceplan.json')
    const services = await response.json()
    setAllServices(services)
  }

  useEffect(() => {
    fetchServices()
  }, [])
  // we have to iterate over array of service records
  // the service record is an object with some key value pairs one of which is an
  // an array of objects which for each one a checkbox is created

  console.log(allServices)
  return (
    <>
      {allServices.map((allServices) => (
        <div key={allServices.id}>
          <Task task={allServices.description} />
          <EventRow service={allServices.events} />
        </div>
      ))}
    </>
  )
}

export default ServicePlan
