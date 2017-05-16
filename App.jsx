import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addComment} from './actions/actions';

import Header from './components/Header.jsx';
import AddComment from './components/AddComment.jsx';
import CommentList from './components/CommentList.jsx';

class App extends Component {
    render() {
        const {dispatch, visibleComments} = this.props;
        return (
            <div className="mainContainer">
                <Header/>

                <AddComment onAddClick={text => dispatch(addComment(text))}/>

                <CommentList comments={visibleComments}/>
            </div>
        )
    }
}

function select(state) {
    return {
        visibleComments: state.comments
    }
}

export default connect(select)(App)