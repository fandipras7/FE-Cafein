import axios from "axios";

export const getHistoryHire = async (setData) => {
  try {
    const token = localStorage.getItem("token");
    const result = await axios({
      method: "GET",
      baseURL: process.env.REACT_APP_URL_API,
      url: `/users/hire`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setData(result.data.result);

    // console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const historyRecruiter = async (setData) => {
  try {
    const token = localStorage.getItem("token");
    const result = await axios({
      method: "GET",
      baseURL: process.env.REACT_APP_URL_API,
      url: `/hire`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setData(result.data.result);

    // console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const acceptInvitation = async (status) => {
  try {
    const token = localStorage.getItem("token");
    await axios.put(`${process.env.REACT_APP_URL_API}users/hire`, status, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const setisRead = async (read) => {
  try {
    const token = localStorage.getItem("token");
    await axios.put(`${process.env.REACT_APP_URL_API}users/hirenotif`, read, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const getRecruiterProfile = async (setData, id) => {
  try {
    console.log("apakah action jalan");
    const token = localStorage.getItem("token");
    const result = await axios({
      method: "GET",
      baseURL: process.env.REACT_APP_URL_API,
      url: `/company/profile/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setData(result.data.result);
  } catch (error) {
    console.log(error);
  }
};
export const hireWorker = (data, id, Swal) => () => {
  const token = localStorage.getItem("token");
  axios
    .post(`${process.env.REACT_APP_URL_API}hire/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      Swal.fire("Delivered!", "Your Invitation has been delivered.", "success");
      console.log("post success", res);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

export const deletePorto = (name, Swal) => {
  const token = localStorage.getItem("token");
  axios
    .delete(`${process.env.REACT_APP_URL_API}users/deleteporto/${name}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      Swal.fire("Deleted!", "Your portfolio has been deleted.", "success");
    })
    .catch((err) => {
      console.log("err", err);
    });
};
