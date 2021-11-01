import React, { useState, useEffect } from 'react'
import cssMod from './checkbox.module.css'
import PropTypes from 'prop-types'

const Checkbox = (props) => {
  const [taskItem, setTaskItem] = useState('')
  const [checkBox, setCheckBox] = useState(false)

  useEffect(() => {
    setTaskItem(props.task)
  }, [])

  const onChange = () => {
    console.log(`You clicked this task: ${taskItem}`)
  }
  return (
    <>
      <label className={`${cssMod.script}`}>
        <input type="checkbox" defaultChecked={checkBox} onChange={onChange} />
        <span className={`${cssMod.box}`}></span>
      </label>
    </>
  )
}

Checkbox.propTypes = {
  task: PropTypes.string,
}
export default Checkbox
