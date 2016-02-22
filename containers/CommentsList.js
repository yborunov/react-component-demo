import { Component, PropTypes } from 'react'
import CommentsList from '../components/CommentsList'

const JSON_URL = 'https://api.example.io/comments.json'

function getComments() {
  return new Promise((resolve) => {
    $.ajax({
      url: JSON_URL,
      dataTypes: 'json',
      success(data) {
        resolve(data.comments)
      }
    })
  })
}

class CommentsList extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    getComments().then((comments) => this.setState({ comments }))
  }

  render() {
    if (!this.state.comments) {
      return (<div>Comments are loading...</div>)
    }
    return (<CommentsList comments={this.state.comments} />)
  }
}