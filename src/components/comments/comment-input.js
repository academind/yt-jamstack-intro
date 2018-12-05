import React, { Component } from 'react'

import './comment-input.css'

class CommentInput extends Component {
  state = {
    commentText: '',
  }

  handleInputChange = event => {
    this.setState({ commentText: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSubmitComment(this.state.commentText)
    this.setState({ commentText: '' })
  }

  render() {
    return (
      <form
        className="comments__form"
        onSubmit={this.handleSubmit}
      >
        <textarea
          value={this.state.commentText}
          onChange={this.handleInputChange}
          rows={5}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default CommentInput
