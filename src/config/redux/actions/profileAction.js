import axios from "axios";

export const getData = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_PROFILE_PENDING" });
    // const profiles = await axios.get('http://')
  } catch (error) {}
};
