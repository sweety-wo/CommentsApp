import React, {Component} from 'react'

export default class AddComment extends Component {
    render() {
        const {onAddClick} = this.props;

        return (
            <div className="addCommentContainer">
                <div className="avatarBox">
                    <img className="avatar"
                         src="https://storage.googleapis.com/ranker-dev/users/waamit/avatar.jpg"/>
                </div>
                <div className="commentBox">
                    <input type='text' ref='input' className="comment" placeholder="Write a Comment"
                           onKeyPress={(e) => this.handleKeyPress(e)}/>
                </div>
            </div>
        )
    }

    handleKeyPress(e) {
        const node = this.refs.input;
        const text = node.value.trim();
        if (e.key === 'Enter' && text.length > 0) {
            this.props.onAddClick(text);
            node.value = '';
        }
    }
}