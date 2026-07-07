import{useState,useEffect} from 'react';

function Timer()
{
    let[count,setCount]=useState(0);
    useEffect(()=>{setTimeout(()=>{setCount(count+1)},1000)},[count]);
    return <h1> {count}</h1>
}
export default Timer;