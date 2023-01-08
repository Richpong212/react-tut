import {useState} from 'react'


const UseState = () => {
    // Before using UseState we need to import from react 

// Add number component increment and decrement number

const [count, setCount] = useState(0);

// handle increment function
const handleIncrement = () => {
    // increment by 1
      setCount(count + 1)
     
     // increment by 3
     //setCount(count + 3)

}

// handle decrement function
const handleDecrement = () => {
    // descrement by 1
     //setCount(count - 1)

    // descrement by 3
    // setCount(count - 3)

    // descrement by 1 but if count is less than 0 then set count to 0
   // if(count > 0){
   //     setCount(count - 1)
   // }else{
   //     setCount(0)
   // }

   // using ternary operator
   count > 0 ? setCount(count-1) : setCount(0)
}

// handle reset function
const handleReset = () => {
    // reset count to 0
    setCount(0)
}

// color change



  return (
    <div>
       <button onClick={handleIncrement} style={{margin: 10}}>increment</button>
       <span>{count}</span>
       <button onClick={handleDecrement}  style={{margin: 10}}>decrement</button>
       <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default UseState
