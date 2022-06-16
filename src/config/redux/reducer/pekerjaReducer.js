const initialState = {
  pekerja: [],
  pagination: {
    currentPage: 0,
    limit: 0,
    totalData: 0,
    totalPage: 0,
  },
  isGeting: false,
  detailProfile: {},
  profile: {},
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE_PENDING":
      return {
        ...state,
        isGeting: true,
      };
    case "GET_ALL_WORKERS":
      return {
        ...state,
        pekerja: action.payload.workers,
        pagination: action.payload.pagination,
      };
    case "GET_PROFILE_BY_ID":
      return {
        ...state,
        profile: action.payload.profile,
      };
    case "GET_DETAIL_SUCCESS":
      // console.log(action.payload.profile.fullname);
      return {
        ...state,
        detailProfile: action.payload.profile,
      };
    case "EDIT_DATADIRI":
      return {
        ...state,
        detailProfile: action.payload.profile,
      };
    case "ADD_NEW_SKILL":
      return {
        ...state,
        // detailProfile: action.payload.profile,
      };
    case "ADD_WORk_EXP":
      return {
        ...state,
      };
    case "NEW_PORTOFOLIO":
      return {
        ...state,
      };
    case "UPLOAD_AVA":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default profileReducer;
