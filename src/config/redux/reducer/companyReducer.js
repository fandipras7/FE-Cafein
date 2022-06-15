const initialState = {
    companyId: [],
}

const companyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COMPANY_ID":
            return {
                ...state,
                companyId: action.payload,
            };
        default:
            return state;
    }
};

export default companyReducer;