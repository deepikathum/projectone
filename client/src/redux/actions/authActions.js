import { ActionTypes } from "../constants/action-types";
// Action creators
export const signinSuccess = (signin) => {
    return{
  type:ActionTypes.SIGNIN_SUCCESS,
  payload:signin
    }
};

export const signoutSuccess = (signout) => {
    return{
  type: ActionTypes.SIGNOUT_SUCCESS,
  payload: signout
    }
};

export const setAuthentication = (isAuthenticated) => {
    return{
  type:ActionTypes.SET_AUTHENTICATION,
  payload: isAuthenticated,
    }
};
