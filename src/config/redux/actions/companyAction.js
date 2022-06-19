import axios from "axios";

// export const getCompanyById = (id, token) => async (dispatch) => {
//   try {
//     // let config = {
//     //     headers: {
//     //         Authorization: `Bearer ${token}`
//     //       }
//     // }
//     // console.log(config);
//     // console.log(token);
//     const result = await axios({
//       method: "GET",
//       baseURL: process.env.REACT_APP_URL_API,
//       url: `/company/profile`,
//       data: id,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     // console.log(result.data);
//     const company = result.data.result
//     // console.log(result.data);
//     dispatch({ type: "GET_COMPANY_ID", payload: company })
//     // console.log(company);
//   } catch (error) {
//     console.log(error);
//   }
// }

export const getCompanyById = (id, token) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      baseURL: process.env.REACT_APP_URL_API,
      url: `/company/profile`,
      data: id,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        dispatch({ type: "GET_COMPANY_ID", payload: res.data.result })
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

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
    dispatch({ type: "EDIT_COMPANY", payload: company });
  } catch (error) {
    console.log(error);
    alert("Edit failed");
  }
};