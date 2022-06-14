import axios from "axios";

export const getDataById = (data, setData) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    dispatch({ type: "GET_PROFILE_PENDING" });
    // const profiles = await axios.get('http://')
    const result = await axios({
      method: "GET",
      baseURL: process.env.REACT_APP_URL_API,
      url: `/users/profile`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // log;
    const profile = result.data.data;
    setData({
      ...data,
      fullname: profile.fullname,
      jobdesk: profile.jobdesk,
      address: profile.address,
      workplace: profile.workplace,
      profileImage: profile.profileImage,
      description: profile.description,
    });
    console.log(data.fullname);
    // console.log(profile.fullname);
    dispatch({ type: "GET_DETAIL_SUCCESS", payload: { profile } });
  } catch (error) {
    console.log(error);
  }
};

export const editDataDiri = (dataform) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    console.log(dataform);
    // const result = await axios(
    //   {
    //     method: "PUT",
    //     baseURL: process.env.REACT_APP_URL_API,
    //     url: `/users/profile`,
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   },
    //   dataform
    //   // { "content-type": "multipart/form-data" }
    // );
    const result = await axios.put(`${process.env.REACT_APP_URL_API}users/profile`, dataform, {
      "content-type": "multipart/form-data",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const profile = result.data.data;
    dispatch({ type: "EDIT_DATADIRI", payload: { profile } });
    // navigate("/storeprofile/myproduct");
  } catch (error) {
    console.log(error);
    alert("gagal Edit DATADIRI");
  }
};

export const addnewSkill = (data) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    const result = await axios(
      {
        method: "POST",
        baseURL: process.env.REACT_APP_URL_API,
        url: `/users/skill`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      data
      // { "content-type": "multipart/form-data" }
    );
    const profile = result.data.data;
    dispatch({ type: "ADD_NEWSKILL", payload: { profile } });
    // navigate("/storeprofile/myproduct");
  } catch (error) {
    console.log(error);
    alert("gagal ADD_NEWSKILL");
  }
};
