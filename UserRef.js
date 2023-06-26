
import React, { Component } from 'react'

 class UserRef extends Component {
    constructor(props) {
      super(props);
      this.UserRef=React.createRef();
      this.CommentRef=React.createRef();

    
     
    }
    handleSubmit=e=>
    {
        e.preventDefault();
        console.log(this.UserRef.current.value);
        console.log(this.CommentRef.current.value);
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
    <div>

<label htmlFor='UserName' >UserName</label>
<input type='text' id='UserName' ref={this.UserRef} />
</div>
<div>
<label htmlFor='Comment' >Comment</label>

<textarea id='Comment' ref={this.CommentRef}/>


      </div>
      <button type="submit">USEREF MODE</button>

        </form>
  
    )
  }
}

export default UserRef