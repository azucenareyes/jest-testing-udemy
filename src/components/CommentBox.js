import React from 'react'
import  { connect } from 'react-redux'
import * as actions from 'actions'

class CommentBox extends React.Component {
    state = { comment: '' }

    handleSubmit =(event)=>{
      event.preventDefault()
      this.props.saveComment(this.state.comment)
      this.setState({
        comment: ''
      })
    }

    handleChange =(event) => {

      this.setState({
        comment: event.target.value
      })

    }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <h5> Add a comment:</h5>
      <textarea
        value={this.state.comment}
        onChange={this.handleChange}
        />
        <div>
          <button>I don't do shit yet</button>
        </div>
      </form>
    )
  }
}
export default connect(null, actions)(CommentBox)
