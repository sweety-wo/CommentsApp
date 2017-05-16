export const ADD_COMMENT = 'ADD_COMMENT';

let nextCommentId = 3; //Added 3 default comments already.

export function addComment(text) {
    return {
        type: ADD_COMMENT,
        id: nextCommentId++,
        text,
        createdBy: 'Me',
        imageUrl: 'https://storage.googleapis.com/ranker-dev/users/waamit/avatar.jpg'
    };
}