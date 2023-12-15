import React,{useState} from 'react';
import "./counter.css";

function Counter() {
    const [count,setCount]= useState(0);

    const handleIncrement=()=>{
        setCount(count+1);
    };
    const handleDecrement=()=>{
        if(count>0){
        setCount(count-1);
        }
    };
    const handleReset=()=>{
        setCount(0);
    };

  return (
    <div className='counter'>
        <h1>Counter App</h1>
        
        <div className='button-container'>
           
            <button onClick={handleDecrement}>-</button>
            <p>Count:{count}</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleReset}>Reset</button>
        </div>
      
    </div>
  )
}

export default Counter;
