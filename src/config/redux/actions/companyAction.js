import axios from "axios";

export const getCompanyById = (id, token) => async (dispatch) => {
    try {
        // let config = {
        //     headers: {
        //         Authorization: `Bearer ${token}`
        //       }
        // }
        // console.log(config);
        // console.log(token);
        const result = await axios({
            method: "GET",
            baseURL: process.env.REACT_APP_URL_API,
            url: `/company/profile`, 
            data: id,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        // console.log(result.data);
        const company = result.data.result
        // console.log(result.data);
        dispatch({ type: "GET_COMPANY_ID", payload: company })
        // console.log(company);
    } catch (error) {
        console.log(error);
    }
}

// export const editCompany = (id, formData) => () => {
//     // dispatch({ type: "UPDATE_PRODUCT" });
//     axios.put(`${process.env.REACT_APP_URL_API}company/profile/${id}`, formData)
//         .then(res => {
//             console.log('post success', res);
//             // navigate("/");
//         })
//         .catch(err => {
//             console.log('err', err);
//         })
// };

export const editCompany = (formData) => async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const result = await axios.put(`${process.env.REACT_APP_URL_API}company/profile`, formData, {
        "content-type": "multipart/form-data",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const company = result.data;
      dispatch({ type: "EDIT_COMPANY", payload:  company });
    } catch (error) {
      console.log(error);
      alert("Edit failed");
    }
  };