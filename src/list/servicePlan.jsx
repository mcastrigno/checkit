import React, { useState, useEffect } from 'react'
import EventRow from './eventrow'
import Task from './task'
import cssMod from './servicePlan.module.css'

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
    <div className={`${cssMod.planWrapper}`}>
      <div className={`${cssMod.taskColumnWrapper}`}>
        {allServices.map((allServices) => (
          <div className={`${cssMod.wrapper}`} key={allServices.id}>
            <Task task={allServices.description} />
          </div>
        ))}
      </div>
      <div className={`${cssMod.eventColumnWrapper}`}>
        {allServices.map((allServices) => (
          <div className={`${cssMod.eventWrapper}`} key={allServices.id}>
            <EventRow service={allServices.events} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicePlan
