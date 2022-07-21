import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  UPDATE_USER,
  UPDATE_SHIPPING_ADDRESS,
} from "../action/types";
// Interfaces
import { AddressProps } from "components/ProfileCard/UserInfo";

const initialState = {
  isLoggedIn: false,
  auth: { user: { shippingAddresses: [] } },
};

function auth(state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        auth: payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        auth: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        auth: null,
      };
    case UPDATE_USER:
      return {
        ...state,
        auth: {
          ...state.auth,
          user: payload,
        },
      };
    case UPDATE_SHIPPING_ADDRESS:
      // replace old address with updated
      const addresses = state.auth.user.shippingAddresses.map(
        (a: AddressProps["data"]) => {
          if (a.id === payload.id) return payload;

          return a;
        }
      );

      return {
        ...state,
        auth: {
          ...state.auth,
          user: {
            ...state.auth.user,
            shippingAddresses: addresses,
          },
        },
      };
    default:
      return state;
  }
}

export default auth;
