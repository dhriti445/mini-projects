import {useReducer} from 'react';

function reducer(count,action)
{
  if(action === 'inc')
    {return (count+1);}

  else if(action === 'dec')
    {return (count-1);}
}

function Time()
{
  let [count, setCount] = useReducer(reducer,0);

  return<>
  <h1>Count:{count}</h1>
  <button onClick={()=>{setCount('inc')}}>In</button>
  <button onClick={()=>{setCount('dec')}}>De</button>
  </>
}



export default Time;
