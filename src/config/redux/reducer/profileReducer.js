const initialState = {
  pekerja: [],
  isGeting: false,
  detailProfile: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE_PENDING":
      return {
        ...state,
        isGeting: true,
      };
    case "GET_PROFILE":
      return {
        ...state,
        pekerja: action.payload,
      };
    case "GET_DETAIL_PROFILE":
      return {
        ...state,
        detailProfile: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
