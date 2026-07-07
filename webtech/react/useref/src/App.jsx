import React from "react";
import { useRef } from "react";
function Comp()
{
  let count=useRef(0);

  function Handle()
  {
    count.current=count.current+1;
    console.log(count.current);
    if(count.current>5)
      alert('limit exceeded');
  }
  return <button onClick={Handle}>Add</button>;
}
export default Comp;