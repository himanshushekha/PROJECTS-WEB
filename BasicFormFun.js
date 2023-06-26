import React, { useState } from 'react'

function BasicFormFun() {
  const[name,setName] = useState("");
  const[Tnc,setTnc] = useState(false);
  const[Interest,setInterest] =useState("");
  function getdata(e)
  {
    e.preventDefault();
    console.log(name,Tnc,Interest);
  }
    
  return (
    <div>


<h1>Handle form in react</h1>
<form onSubmit={getdata} >
<input type="text" placeholder="enter name"  onChange={(e) => setName(e.target.value)}/>
<select onChange={(e)=>setInterest(e.target.value)}>
    


<option> SELECT OPTIONS</option>
    <option>PHYSICS</option>
    <option>CHEMISTRY</option>
    <option>BIOLOGY</option>
    <option>SST</option>
    <option>ENGLISH</option>
    <option>HINDI</option>
    <option>HINDI</option>

</select>
<input type="checkbox"  onChange={(e) => setTnc(e.target.checked)}/><span>TERMS AND CONDITIONS</span>
<br></br>
 
<button type="submit">SUBMIT</button>


   


        







</form>







    </div>
  )
}

export default BasicFormFun