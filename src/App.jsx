import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Checkbox from './list/checkbox'
import ListRow from './list/listrow'

function App() {
  return (
    <>
      <ListRow />
      <Checkbox />
      <div className="App">
        <header className="Appheader">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            <code>src/App.js </code>
            and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  )
}

export default App
