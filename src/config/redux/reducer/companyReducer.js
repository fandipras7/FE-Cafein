const initialState = {
    companyedit:[],
    companyId: {
        "idcompany": "",
        "email": "",
        "name": "",
        "jobposition": "",
        "companyname": "",
        "companyaddress": "",
        "jobfield": "",
        "description": "",
        "phonenumber": "",
        "emailcompany": "",
        "role": "",
        "status": "",
        "instagram": "",
        "companyphone": "",
        "linkedin": "",
        "profileimage": null
    },
}

const companyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COMPANY_ID":
            return {
                ...state,
                companyId: action.payload,
            };
        case "EDIT_COMPANY":
            return {
                ...state,
                companyedit: action.payload,
            };
        default:
            return state;
    }
};

export default companyReducer;