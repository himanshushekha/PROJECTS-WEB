import React,{useState} from 'react'

function Hookcounter2() {
    const[name,setName] = useState({firstname:'',lastName:''})
  return (
   <form>

        <input type="text"  value={name.firstname}  onChange={e => setName ({ firstname:e.target.value})}/>
        <input type="text"  value={name.lastName}  onChange={e => setName ({ lastName:e.target.value})}/>
        <h1>FIRST NAME:{name.firstname}</h1>
        <h1>LAST NAME:{name.lastName}</h1>
    </form>
  )
}

export default Hookcounter2