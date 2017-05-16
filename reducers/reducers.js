import {combineReducers} from 'redux';
import {ADD_COMMENT} from '../actions/actions';

const initComments = [
    {
        id: 0,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using / making it look like readable English.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        createdBy: 'Monali Jain',
        imageUrl: 'https://storage.googleapis.com/ranker-dev/users/wo-dev/avatar.jpg'
    }, {
        id: 1,
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
        createdBy: 'Vipul Jain',
        imageUrl: 'https://storage.googleapis.com/ranker-dev/users/wodev08/avatar.jpg'
    }, {
        id: 2,
        text: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        createdBy: 'Sweety WO',
        imageUrl: 'https://storage.googleapis.com/ranker-dev/users/sangamkumari/avatar.jpg'
    }
];

function comment(state, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                id: action.id,
                text: action.text,
                createdBy: action.createdBy,
                imageUrl: action.imageUrl
            };

        default:
            return state
    }
}

function comments(state = initComments, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [
                comment(undefined, action),
                ...state
            ];

        default:
            return state
    }
}

const commentApp = combineReducers({
    comments
});

export default commentApp