import React from 'react'
import cssMod from './checkbox.module.css'

const consoleOut = () => {
  console.log('you clicked me')
}
const Checkbox = () => {
  return (
    <>
      <div>Checkbox</div>
      <label className={`${cssMod.script}`}>
        <input type="checkbox" onChange={consoleOut} />
        <span className={`${cssMod.box}`}></span>
      </label>
    </>
  )
}

export default Checkbox
