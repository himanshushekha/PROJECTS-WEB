import React,{useState} from 'react'


function InputBoxPrint() {
    const[data,setState] = useState(null)
    const[print,setPrint] = useState(false)
  return (
    <div>
<h1>
    print?<h1> {data}</h1>
    :null
    
    
    </h1>
<input TYPE="text" onChange={e =>{setState(e.target.value)}}/>
<button onClick={()=>setPrint(true)}>PRINT</button> 






    </div>
  )
}

export default InputBoxPrint