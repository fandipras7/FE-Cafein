import axios from "axios";

export const hireWorker = (data, id) => () => {
    const token = localStorage.getItem("token");
    axios.post(`${process.env.REACT_APP_URL_API}hire/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
          },
    })
        .then(res => {
            console.log('post success', res);
        })
        .catch(err => {
            console.log('err', err);
        })
};