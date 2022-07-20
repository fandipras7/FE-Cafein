import axios from "axios";
import Swal from "sweetalert2";

export const getWorkers =
  ({ page, limit, keyword }) =>
  async (dispatch) => {
    try {
      console.log(keyword);
      const token = localStorage.getItem("token");
      const result = await axios({
        method: "GET",
        baseURL: process.env.REACT_APP_URL_API,
        url: `/home?page=${page}&limit=${limit}${keyword ? "&search=" + keyword : ""}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(result.data.result);

      const workers = result.data.val;
      const pagination = result.data.pagination;
      dispatch({ type: "GET_ALL_WORKERS", payload: { workers, pagination } });
    } catch (error) {
      console.log(error);
    }
  };

export const getDataById = (data, setData, id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    dispatch({ type: "GET_PROFILE_PENDING" });
    // const profiles = await axios.get('http://')
    const result = await axios({
      method: "GET",
      baseURL: process.env.REACT_APP_URL_API,
      url: `/users/profile/${id}`,
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

export const getProfile = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_PROFILE_PENDING"});
    const token = localStorage.getItem("token");
    const result = await axios.get(`${process.env.REACT_APP_URL_API}users/profile${id ? "/" + id : "/"}`, {
      // "content-type": "multipart/form-data",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const profile = result.data.data;
    // console.log(profile);
    if(!id){
      dispatch({ type: "GET_PROFILE_LOGIN", payload: { profile } });
    } else {
      dispatch({ type: "GET_OTHER_PROFILE", payload: { profile } });
    }
    // navigate("/storeprofile/myproduct");
  } catch (error) {
    console.log(error);
    alert("GAGAL GET PROFILE");
  }
};

export const editDataDiri = (dataform) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    console.log(dataform);
    const result = await axios.put(`${process.env.REACT_APP_URL_API}users/profile`, dataform, {
      "content-type": "multipart/form-data",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const profile = result.data.data;
    console.log(result);
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
    console.log(data);
    const result = await axios.post(`${process.env.REACT_APP_URL_API}users/skill`, data, {
      "content-type": "multipart/form-data",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // const profile = result.data.data;
    dispatch({ type: "ADD_NEW_SKILL" /*payload: { profile } */ });
    // navigate("/storeprofile/myproduct");
    Swal.fire({
      icon: 'success',
      title: "Add Skill Success",
      text: ""
    })
    // console.log(data);
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: 'success',
      title: "Failed to Add Skill",
      text: ""
    })
  }
};

export const addWorkExperience = (data) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    console.log(data);
    const result = await axios.post(`${process.env.REACT_APP_URL_API}users/workexp`, data, {
      "content-type": "multipart/form-data",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // const profile = result.data.data;
    dispatch({ type: "ADD_WORK_EXP" /*payload: { profile } */ });
    // navigate("/storeprofile/myproduct");
    // console.log(data);
    alert("Berhasil menambah pengalaman kerja");
  } catch (error) {
    console.log(error);
    alert("gagal ADD_NEW_SKILL");
  }
};

export const addPortofolio = (data) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    console.log(data);
    const result = await axios.post(`${process.env.REACT_APP_URL_API}users/portofolio`, data, {
      "content-type": "multipart/form-data",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // const profile = result.data.data;
    dispatch({ type: "NEW_PORTO" /*payload: { profile } */ });
    // navigate("/storeprofile/myproduct");
    // console.log(data);
    alert("Berhasil menambah Portofolio");
  } catch (error) {
    console.log(error);
    alert("gagal ADD_PORTO");
  }
};

export const uploadAva = (data) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    console.log(data);
    const result = await axios.post(`${process.env.REACT_APP_URL_API}users/upload`, data, {
      "content-type": "multipart/form-data",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // const profile = result.data.data;
    dispatch({ type: "UPLOAD_AVA" /*payload: { profile } */ });
    // navigate("/storeprofile/myproduct");
    // console.log(data);
  } catch (error) {
    console.log(error);
    alert("GAGAL UPLOAD FOTO");
  }
};
