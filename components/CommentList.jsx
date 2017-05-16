import React, {Component} from 'react'
import Comment from './Comment.jsx'

export default class CommentList extends Component {
    render() {
        return (
            <div className="commentsContainer">
                {this.props.comments.map(comment =>
                    <Comment
                        key={comment.id}
                        {...comment}
                    />
                )}
            </div>
        )
    }
}