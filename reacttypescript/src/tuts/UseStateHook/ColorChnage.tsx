import React, { useState } from 'react'



const ColorChnage= () => {
  // creating the state
   const [color, setColor]:any = useState('red')

   // create function to change the state
    const handleClick = () => {
      setColor('blue')
    }

    // create function to change the state Indgigo
    const handleClickIndigo = () => {
      setColor('indigo')
    }

  return (
    <div>
      <p>My favorite color is <strong>{color}</strong></p>
      <button
        style={{
          backgroundColor: 'red',
          color: 'white',
          marginRight: '10px'
        }}
       onClick={handleClick}>blue</button>
      <button style={{
        backgroundColor: 'indigo',
        color: 'white'
      }}  onClick={handleClickIndigo}>Indigo</button>
    </div>
  )
}

export default ColorChnage