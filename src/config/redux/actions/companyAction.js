import axios from "axios";

export const getCompanyById = (id) => async (dispatch) => {
    try {
        const result = await axios.get(`${process.env.REACT_APP_URL_API}company/profile/${id}`)
        // console.log(result.data);
        const company = result.data.data
        dispatch({ type: "GET_COMPANY_ID", payload: company })
        console.log(company);
    } catch (error) {
        console.log(error);
    }
}

export const editCompany = (id, formData) => () => {
    // dispatch({ type: "UPDATE_PRODUCT" });
    axios.put(`${process.env.REACT_APP_URL_API}company/profile/${id}`, formData)
        .then(res => {
            console.log('post success', res);
            // navigate("/");
        })
        .catch(err => {
            console.log('err', err);
        })
};