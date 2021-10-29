import React from 'react'
import cssMod from './task.module.css'

const Task = (task) => {
  //console.log(task.description)
  return <div>{task.description}</div>
}

export default Task
