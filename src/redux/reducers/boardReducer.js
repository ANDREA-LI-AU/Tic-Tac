import { UPDATE_SQUARE } from '../actions/boardActions';


const boardReducer = ( state, action ) => {
    //这个state是跟board有关的小部分的state。
    //action是每个reducer都会接收到的。
    switch (action.type) {
        case UPDATE_SQUARE:
            return {};

        default:
            return state;

    }

};

export default boardReducer;