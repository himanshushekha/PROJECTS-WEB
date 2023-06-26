import React,{useState,useEffect} from 'react'

 




function App(props) {
  const [count,setcount] = useState(100)
  const [data,setdata] = useState(10)
  useEffect(()=>{
   
    alert("count is "+count)
  },[props.count]
  )
  return (
   <>
     <h1> count:: {props.count}</h1>
     <h1>  data:: {props.data}</h1>
   
   
   </>
   


  )
}

export default App;