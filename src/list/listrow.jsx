import React, { useState, useEffect } from 'react'
import Checkbox from './checkbox'
import Task from './task'

const ListRow = () => {
  const [allTasks, setAllTasks] = useState([])
  const fetchTasks = async () => {
    const response = await fetch('/tasklist.json')
    const tasks = await response.json()
    setAllTasks(tasks)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <>
      {allTasks.map((allTasks) => (
        <div key={allTasks.id}>
          {allTasks.description}
          <Checkbox task={allTasks.description} />
        </div>
      ))}
    </>
  )
}

export default ListRow
