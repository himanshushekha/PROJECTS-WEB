import React, { Component } from 'react'

   class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         UserName:'',
         Comment:'',
         language:'React'
      }
    }
    handlereventChange=e=>
    {
        this.setState(
            {
                UserName:e.target.value
            }
        )
    }
    handlerCommentChange=e=>
    {
        this.setState(
            {
                Comment:e.target.value
            }
        )
    }
    handlerCommentChange=e=>
    {
       e.preventDefault();
       console.log(this.state);
    }
    handleSubmit=e=>
    {
        this.setState(
            {
                language:e.target.value
            }
        )
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
 <div>
<label htmlFor='UserName'>UserName</label>
<input type='text' id='UserName' value={this.state.UserName} onChange={this.handlereventChange}/>


      </div>
      <div>
<label htmlFor='Comment'>Comment</label>

<textarea id='Comment' value={this.state.Comment} onChange={this.handlerCommentChange}/>
      </div>
      <div>
        <label htmlFor='language'>language</label>
        <select id='language' value={this.state.language} onChange={this.handlerLanguageChange}>
        <option value="reactReact">REACT</option>
        <option value="reactReact">HTML</option>
        <option value="reactReact">CSS</option>
        <option value="reactReact">JS</option>
        </select>
      </div>
      <button type="submit"></button>
        </form>
      
    )
  }
}

export default Form