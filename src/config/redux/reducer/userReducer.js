const initialState = {
    user: [],
    isLoading: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EMPLOYER_REGISTER_PENDING":
            return {
                ...state,
                isLoading: true
            };
        case "EMPLOYER_REGISTER_SUCCESS":
            return {
                ...state,
                isLoading: true
            };
        case "USER_REGISTER_PENDING":
            return {
                ...state,
                isLoading: true
            };
        case "USER_REGISTER_SUCCESS":
            return {
                ...state,
                isLoading: true
            };
        case "USER_LOGIN_PENDING":
            return {
                ...state,
                isLoading: true
            };
        case 'USER_LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
};


export default userReducer