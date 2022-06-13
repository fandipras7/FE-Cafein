import axios from "axios";

// export const loginUser = (dataForm)=> async(dispatch)=>{
//     try {
//         dispatch({type: 'USER_LOGIN_PENDING'})
//         const result = await axios.post(`${process.env.REACT_APP_URL_API}auth/login`, dataForm)
//         const user = result.data.data
//         return user
//         // localStorage.setItem('token', user.token)
//         // localStorage.setItem('refreshToken', user.refreshToken)
//         // dispatch({type: 'USER_LOGIN_SUCCESS', payload: user})
//         // navigate('/home')

//     } catch (error) {
//         // console.log(error.response.data);
//         return error
//     }
// }
export const loginUser = (data) => () => {
    return new Promise((resolve, reject) => {
        axios.post(`${process.env.REACT_APP_URL_API}auth/login`, data)
                .then(res => {  
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                })
        
    });
}

export const registerWorker = (dataForm, navigate)=> async(dispatch)=>{
    try {
        dispatch({type: 'USER_REGISTER_PENDING'})
        const result = 
        await axios.post(`${process.env.REACT_APP_URL_API}auth/regisworker`, dataForm)
        const user = result.data
        console.log(result.data);
        dispatch({type: 'USER_REGISTER_SUCCESS', payload: user})
        navigate('/login')

    } catch (error) {
        console.log(error);
    }
}

export const registerEmployer = (dataForm, navigate)=> async(dispatch)=>{
    try {
        dispatch({type: 'EMPLOYER_REGISTER_PENDING'})
        const result = 
        await axios.post(`${process.env.REACT_APP_URL_API}auth/regisemp`, dataForm)
        const user = result.data
        console.log(result.data);
        dispatch({type: 'EMPLOYER_REGISTER_SUCCESS', payload: user})
        navigate('/login')

    } catch (error) {
        console.log(error);
    }
}
