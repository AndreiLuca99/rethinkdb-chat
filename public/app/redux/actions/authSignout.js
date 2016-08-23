// @flow
import type { Dispatch } from 'redux';

import { authSignoutSuccess } from 'public/app/redux/actions';
import AuthService from 'public/app/services/AuthService';

const authService = new AuthService();

export default function() {
  return (dispatch: Dispatch, getState: Function) => {
    authService.signout()
    .then((resp) => {
      dispatch(authSignoutSuccess(resp.body));
    });
  }
}
