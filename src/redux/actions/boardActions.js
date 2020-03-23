export const UPDATE_SQUARE = 'UPDATE_SQUARE';


export const boardActions = (index) => {
    return{
        type: 'UPDATE_SQUARE',
        index,
    }

}