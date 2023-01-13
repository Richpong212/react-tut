import React from 'react'
import { useState, useEffect } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)

    console.log(count)

    // using the usedEffect hook
    // takes two arguments-> function, dependency array
    //useEffect(() => {
        // using timer  to say hello
       //  setTimeout(() => {
        //   alert('Hello')
       // }, 5000)

      // setTimeout(() => {
      //      setCount(count + 1)
      // }, 3000)
    //}, [count])

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <h1>UseEffect TUTS</h1>
        
    </div>
  )
}

export default UseEffect
