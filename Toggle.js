import React,{useState} from 'react'


function Toggle()
 {
    const[status,setstaus]=useState(true)
  return (
    <div>

<h1>{status}</h1>
status?
<h1>{status}</h1>
:null
<button onClick={()=>setstaus(false)}>HIDE</button>
<button onClick={()=>setstaus(true)}>SHOW</button>
    </div>
  )
}

export default Toggle