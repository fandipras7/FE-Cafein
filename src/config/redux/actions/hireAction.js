import axios from "axios";

export const getHistoryHire = async (setData) => {
    try {
        const token = localStorage.getItem('token')
        const result = await axios({
            method: "GET",
            baseURL: process.env.REACT_APP_URL_API,
            url: `/users/hire`,
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })

        setData(
            result.data.result
        )

        // console.log(result);

    } catch (error) {
        console.log(error);
    }
}

export const acceptInvitation = async (status) => {
    try {
        const token = localStorage.getItem('token')
        const result = await axios({
            method: "PUT",
            baseURL: process.env.REACT_APP_URL_API,
            url: `/users/hire`,
            data: status,
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })

        // console.log(result);

    } catch (error) {
        console.log(error);
    }
}

export const getRecruiterProfile = async (setData, id) => {
    try {
        const token = localStorage.getItem('token')
        const result = await axios({
            method: "GET",
            baseURL: process.env.REACT_APP_URL_API,
            url: `/company/profile/${id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })

        setData(result.data.data)

    } catch (error) {
        console.log(error);
    }
}