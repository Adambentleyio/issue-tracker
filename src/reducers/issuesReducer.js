import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_ISSUES":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "FETCH_ISSUE":
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case "DELETE_ISSUE":
      return _.omit(...state, action.payload);
    case "EDIT_ISSUE":
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case "CREATE_ISSUE":
      return {
        ...state,
        [action.payload.id]: action.payload,
        issueOpen: true,
        userId: action.userId,
      };
    default:
      return state;
  }
};
