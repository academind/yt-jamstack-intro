import React from 'react'

import './comment.css'

const comment = props => (
  <li className="comment">
    <p>{props.text}</p>
  </li>
)

export default comment
