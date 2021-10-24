import React from 'react'
import classes from './list.module.css'
import '.././App.css'

const List = () => {
  return (
    <div className={`${classes.input} ${classes.checkbox}`}>
      <input type="checkbox" id="idProp" value="this will be a list item" />
      <label style={{ margin: '20px' }} htmlFor="idProp"></label>
      <p className={classes.p}> what about formatting this?</p>
    </div>
  )
}

export default List
