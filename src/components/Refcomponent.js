import React, { useEffect } from 'react'
import { useRef } from 'react'

function Refcomponent() {
    const inputRef = useRef('hello')
    const passwordRef =useRef()
    useEffect(()=>{
        console.log("inputRef",inputRef)
        console.log("inputRef",inputRef.current)
        inputRef.current.focus()
    },[])
    return (
        <div>
           <input ref={inputRef} type="text" placeholder="Enter-Email"></input> 
           <input ref={passwordRef} type="text" placeholder="password"></input>
           <button onClick={()=>{
               passwordRef.current.focus()
           }}>button</button>
        </div>
    )
}

export default Refcomponent

