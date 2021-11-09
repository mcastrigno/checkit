import React, { useState, useEffect } from 'react'
import cssMod from './checkbox.module.css'
import PropTypes from 'prop-types'

const EventBox = (props) => {
  const [taskItem, setTaskItem] = useState('')
  const [taskEvent, setTaskEvent] = useState(0)
  const [eventBox, setEventBox] = useState(false)

  useEffect(() => {
    setTaskItem(props.events.taskid)
    setTaskEvent(props.events.eventid)
    setEventBox(props.events.status === 'notDone' ? false : true)
  }, [])

  const onChange = () => {
    setEventBox(!eventBox)
    console.log(`You clicked this taskid: ${taskItem}`)
    console.log(`You clicked this eventid: ${taskEvent}`)
  }
  return (
    <>
      <label className={`${cssMod.script}`}>
        <input
          type="checkbox"
          checked={eventBox}
          value={eventBox}
          onChange={onChange}
        />
        <span className={`${cssMod.box}`}></span>
      </label>
    </>
  )
}
// ooportunity to make centralized props here
EventBox.propTypes = {
  events: PropTypes.object,
}
export default EventBox
