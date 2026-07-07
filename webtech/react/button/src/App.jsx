import { useState } from "react";
function Time()
{
  let[count,setCount]=useState(0); //useReducer(reducer,0);
  return<>
  <h1> Count: {count}</h1>
     <button onClick={()=>{setCount(count+1)}}>In</button>
     <button onClick={()=>{setCount(count-1)}}>De</button>
  </>
}
export default Time;