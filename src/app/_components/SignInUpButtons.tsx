import React from "react";
import { Button } from "@mui/material";

export const SignInUpButton: React.FC = () => {
  return (
    <Button
      style={{ textTransform: "none" }}
      variant="contained"
      color="success"
      onClick={() => {
        location.href = "/api/auth/login";
      }}
      fullWidth
    >
      𝕏で登録 / ログイン
    </Button>
  );
};

export const SignOutButton: React.FC = () => {
  return (
    <Button
      style={{ textTransform: "none" }}
      variant="contained"
      color="error"
      onClick={() => {
        location.href = "/api/auth/logout";
      }}
      fullWidth
    >
      ログアウト
    </Button>
  );
};
