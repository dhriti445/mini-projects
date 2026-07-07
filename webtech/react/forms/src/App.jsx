import { useState } from 'react';
import('react').EventHandler;

function Form(){
    let[name,setName]=useState(" ");
    function HandleChange(event)
    {
        setName(event.target.value.toUpperCase())
    }
    function HandleSubmit(event)
    {
        event.preventDefault;
        alert(name);
    }
    return(
    <form onSubmit={HandleSubmit}>
     <input type ="text"
      onChange={HandleChange}
      placeholder='enter your name'/>
      <button type="submit">Submit</button>
    </form>
    );
}
export default Form;

