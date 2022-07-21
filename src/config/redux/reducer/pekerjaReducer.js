const initialState = {
  pekerja: [],
  pagination: {
    currentPage: 0,
    limit: 0,
    totalData: 0,
    totalPage: 0,
  },
  isLoading: false,
  othersProfile: {},
  loginProfile: {},
  isEdit: false,
  skill: []
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_ALL_WORKERS":
      return {
        ...state,
        pekerja: action.payload.workers,
        pagination: action.payload.pagination,
      };
    case "GET_PROFILE_LOGIN":
      return {
        ...state,
        loginProfile: action.payload.profile,
      };
    case "GET_OTHER_PROFILE":
      // console.log(action.payload.profile.fullname);
      return {
        ...state,
        othersProfile: action.payload.profile,
        isLoading: false
      };
    case "EDIT_DATADIRI":
      return {
        ...state,
        detailProfile: action.payload.profile,
        isEdit: true,
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
    case "GET_SKILL":
      return {
        ...state,
        skill: action.payload.skill
      };
    default:
      return state;
  }
};

export default profileReducer;
