import { Component, PropTypes } from 'react'

export class CommentsList extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (<ul>{this.props.comments.map((comment) => {
      return <li key={comment.id}>{comment.body} - {comment.author}</li>
    })}</ul>)
  }
}

CommentsList.propTypes = {
  comments: PropTypes.array.isRequest
}
