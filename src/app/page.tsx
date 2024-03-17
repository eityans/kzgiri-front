"use client";

import Image from "next/image";
import { OdaiIndex } from "./_components/odaiIndex";
import styles from "./page.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";
import { SignInUpButton, SignOutButton } from "./_components/SignInUpButtons";
import React from "react";

export default function Home() {
  const { user, error, isLoading } = useUser();

  React.useEffect(() => {
    console.log(user);
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
