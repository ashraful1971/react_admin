const reducer = (state = [], action) => {
    switch (action.type) {
        case action.type === "ami":
            state = { ...state }
            break;
        default:
            return state;
    }
}

export default reducer;