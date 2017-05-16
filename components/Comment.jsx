import React, {Component} from 'react'

export default class Comment extends Component {
    render() {
        return (
            <div>
                <span className="username">{this.props.createdBy}</span>
                <div className="avatarBox m-t-28">
                    <img className="avatar"
                         src={this.props.imageUrl}/>
                </div>
                <div className="commentBox readOnly">
                    <div className="comment">{this.props.text}</div>
                </div>
            </div>
        )
    }
}