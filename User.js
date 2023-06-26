import React from 'react'




function User(props) {
  
    
    return (
           <div className="App">
           <h2>user component</h2>
                <button onClick={props.data}>UPDATE  </button>
     
      </div>
    )
  }
  export default User;