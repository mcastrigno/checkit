import React from 'react'
import cssMod from './task.module.css'
import propTypes from 'prop-types'
import EventRow from './eventrow'

const Task = (props) => {
  // eslint-disable-next-line react/prop-types
  console.log(props.task)
  // eslint-disable-next-line react/prop-types
  return <div className={`${cssMod.taskBox}`}>{props.task}</div>
}

Task.propTypes = {
  task: propTypes.string,
}
export default Task
