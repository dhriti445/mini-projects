import {useState} from 'react'

function Timer()
{ 
  let [count,setCount]=useState(0);
  setTimeout(()=>{setCount(count+1)},1000);
  return <h1>{count}</h1>
}

export default Timer;
