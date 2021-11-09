import React, { useState, useEffect } from 'react'
import EventBox from './eventBox'
import PropTypes from 'prop-types'
import cssMod from './eventrow.module.css'

const EventRow = (props) => {
  console.log(props.service)
  return (
    <>
      {props.service.map((events) => (
        <div className={`${cssMod.eventBox}`} key={events.eventid}>
          <EventBox events={events} />
        </div>
      ))}
    </>
  )
}
EventRow.propTypes = {
  service: PropTypes.array,
}

export default EventRow
