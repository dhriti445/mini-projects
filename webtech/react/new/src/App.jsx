import React from 'react'

function Child({name, age})    //reusable parameters
{
    return  <div> <h1> Name:{name} </h1>
            <h1> Age:{age}</h1>
            </div>
}


export default function Parent()
{
    return <Child name="PES" age={123}/> 
}
