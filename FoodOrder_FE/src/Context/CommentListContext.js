import { createContext } from 'react';

export const commentListContext = createContext();

const CommentListReducer = (current, action) => {
    switch(action.type){
        case 'set':
            return action.payload;
    }
    return current
}

export default CommentListReducer;