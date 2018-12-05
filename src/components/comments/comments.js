import React, { Component } from 'react'

import Comment from './comment'
import CommentInput from './comment-input'
import './comments.css'

class Comments extends Component {
  state = { comments: [] }

  componentDidMount() {
    fetch(
      `https://jam-example-deeda.firebaseio.com/comments/${
        this.props.postId
      }.json`
    )
      .then(res => {
        if (!res.ok) {
          throw new Error('Comment not saved.')
        }
        return res.json()
      })
      .then(resData => {
        const comments = []
        for (let key in resData) {
          comments.push({ id: key, text: resData[key].text })
        }
        this.setState({ comments: comments })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleCommentSubmit = commentText => {
    fetch(
      `https://jam-example-deeda.firebaseio.com/comments/${
        this.props.postId
      }.json`,
      {
        method: 'POST',
        body: JSON.stringify({ text: commentText }),
      }
    )
      .then(res => {
        if (!res.ok) {
          throw new Error('Comment not saved.')
        }
        return res.json()
      })
      .then(resData => {
        const generatedId = resData.name
        this.setState(prevState => {
          return {
            comments: [
              ...prevState.comments,
              { id: generatedId, text: commentText },
            ],
          }
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const comments = this.state.comments.map(comment => (
      <Comment key={comment.id} text={comment.text} />
    ))
    return (
      <div className="comments">
        <CommentInput onSubmitComment={this.handleCommentSubmit} />
        <ul className="comments__list">{comments}</ul>
      </div>
    )
  }
}

export default Comments
