import React from 'react'
import UseEffect from './useEffect/UseEffect'
import { useState, createContext } from 'react'
import UseEffect1 from './useEffect/UseEffect1'

// creating global state -> provide in main app -> useState

const App = () => {
  const [name, setName] = useState('John')
  const context = createContext()

  return (
    <context.Provider value={name}>
     <component1 />
    </context.Provider>
  )
}

function  component1 () {
  return (
    <div>
      <h1>UseEffect TUTS 1</h1>
    </div>
  )
}

export default App
