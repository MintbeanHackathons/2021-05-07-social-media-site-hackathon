import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router";
import { StateContext } from "../StateProvider";
import { logout } from "./authApi";

export default function LogoutPage() {
  const { dispatch, state } = useContext(StateContext);
  const { user } = state;

  useEffect(() => {
    logout().then(() =>
      dispatch({
        type: "unsetUser",
        payload: null,
      })
    );
  }, []);

  if (!user) {
    return <Redirect to="/auth/login" />;
  }

  return <div>Logging out...</div>;
}
