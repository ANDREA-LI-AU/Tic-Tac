export const UPDATE_SQUARE = 'UPDATE_SQUARE';


export const updateSquareAction = (index) => {
    return{
        type: UPDATE_SQUARE,
        index,
    }

}