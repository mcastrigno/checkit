import React, { useState, useEffect } from 'react'
import Checkbox from './checkbox'
import PropTypes from 'prop-types'

const EventRow = (props) => {
  return (
    <>
      {props.service.map((events) => (
        <div key={events.eventid}>
          <Checkbox events={events} />
        </div>
      ))}
    </>
  )
}
EventRow.propTypes = {
  service: PropTypes.object,
}

export default EventRow
