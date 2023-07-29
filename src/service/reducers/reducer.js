const initialState = {
    cardData: []
}
export default function cardItems(state = [], action) {
    switch (action.type) {
        case "ADD_TO_CART":
            // console.warn("reducer",action)
            return [
                ...state,
                {cardData: action.data}
            ]
        case "REMOVE_FROM_CART":
            console.warn('remove',state);
            state.pop();
            return [
                ...state,
            ]

        default:
            return state
    }


}