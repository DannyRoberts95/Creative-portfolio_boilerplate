const userReducer = (
  state = {
    userProfile: {},
    userProjects: []
  },
  action
) => {
  switch (action.type) {
    case "GET_USERPROFILE_FULFILLED":
      state = {
        ...state,
        userProfile: action.payload
      };
      break;
    case "GET_USERPROJECTS_FULFILLED":
      state = {
        ...state,
        userProjects: action.payload
      };
      break;
    default:
      break;
  }
  return state;
};

export default userReducer;
