"use client";

import React from "react";
import { Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

export const SignInUpButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      style={{ textTransform: "none" }}
      variant="contained"
      color="success"
      onClick={() => {
        loginWithRedirect();
      }}
      fullWidth
    >
      𝕏で登録 / ログイン
    </Button>
  );
};

export const SignOutButton: React.FC = () => {
  const { logout } = useAuth0();

  return (
    <Button
      style={{ textTransform: "none" }}
      variant="contained"
      color="error"
      onClick={() => {
        logout();
      }}
      fullWidth
    >
      ログアウト
    </Button>
  );
};
