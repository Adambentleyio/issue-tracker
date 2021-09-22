import issues from "../apis/issues";
import history from "../history";

export const signIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const createIssue = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await issues.post("/issues", { ...formValues, userId });

    dispatch({ type: "CREATE_ISSUE", payload: response.data, userId: userId });
    // after we dispatch the action, programatically navigate to root route
    history.push("/");
  };
};

export const fetchIssues = () => async (dispatch) => {
  const response = await issues.get("./issues");

  dispatch({ type: "FETCH_ISSUES", payload: response.data });
};

export const fetchIssue = (id) => async (dispatch) => {
  const response = await issues.get(`/issues/${id}`);

  dispatch({ type: "FETCH_ISSUE", payload: response.data });
};

export const editIssue = (id, formValues) => async (dispatch) => {
  const response = await issues.patch(`/issues/${id}`, formValues);

  dispatch({ type: "EDIT_ISSUE", payload: response.data });
  history.push("/");
};

export const deleteIssue = (id) => async (dispatch) => {
  await issues.delete(`/issues/${id}`);

  dispatch({ type: "DELETE_ISSUE", payload: id });
  // history.push("/");
};
