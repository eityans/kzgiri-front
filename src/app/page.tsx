"use client";

import Image from "next/image";
import { OdaiIndex } from "./_components/odaiIndex";
import styles from "./page.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { SignInUpButton, SignOutButton } from "./_components/SignInUpButtons";
import React from "react";

export default function Home() {
  const { user, getAccessTokenSilently } = useAuth0();

  React.useEffect(() => {
    if (user !== undefined) {
      console.log(user);
      getAccessTokenSilently().then((token) => {
        console.log(token);
      });
    }
  }, [user]);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By {/* ここに便キャのロゴを貼る */}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      {user === undefined && <SignInUpButton />}
      <OdaiIndex />
      {user !== undefined && <SignOutButton />}
    </main>
  );
}
