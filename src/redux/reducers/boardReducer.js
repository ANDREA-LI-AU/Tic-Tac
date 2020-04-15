import { UPDATE_SQUARE } from '../actions/boardActions';

const initialState = {
    isXNext: true,
    squares:Array(9).fill(null)

}


const boardReducer = ( state = initialState, action ) => {
    //这个state是跟board有关的小部分的state。
    //action是每个reducer都会接收到的。
    switch (action.type) {
        case UPDATE_SQUARE:
            const squares = [...state.squares];
            squares[action.index] = state.isXNext? 'X': 'O';
            return {
                ...state,
                isXNext: !state.isXNext,
                squares
            };

        default: 
            return state;

    }

};

export default boardReducer;