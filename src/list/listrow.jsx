import React, { useState, useEffect } from 'react'
import Checkbox from './checkbox'
import Task from './task'

const ListRow = () => {
  const [allTasks, setAllTasks] = useState([])
  const fetchTasks = async () => {
    const response = await fetch('/tasklist.json')
    const tasks = await response.json()
    setAllTasks(tasks)
    console.log(tasks)
    console.log(`${tasks} tasks from api`)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  console.log('All tasks')
  return (
    <>
      <div>useEffect</div>
      <ul>
        {allTasks.map((allTasks) => (
          <li key={allTasks.id}>{allTasks.description}</li>
        ))}
      </ul>
    </>
  )
}

export default ListRow
