import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router";
import { StateContext } from "../StateProvider";
import { logout } from "./authApi";

export default function LogoutPage() {
  const { dispatch, state } = useContext(StateContext);
  const { user } = state;

  useEffect(() => {
    // clear cookies
    document.cookie.split(";").forEach(function (c) {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });

    // reload
    location.reload();
  }, []);

  if (!user) {
    return <Redirect to="/auth/login" />;
  }

  return <div>Logging out...</div>;
}
