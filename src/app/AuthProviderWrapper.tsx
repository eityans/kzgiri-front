"use client";

import { Children } from "react";
import { Auth0Provider } from "@auth0/auth0-react";

export const AuthProviderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}
      authorizationParams={{ redirect_uri: process.env.NEXT_PUBLIC_BASE_URL! }}
    >
      {Children.only(children)}
    </Auth0Provider>
  );
};
