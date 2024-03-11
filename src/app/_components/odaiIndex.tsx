"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Theme } from "./odai";

export const OdaiIndex: React.FC = () => {
  const [data, setData] = useState<Theme[]>([]);
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/themes")
      .then((res) => res.json())
      .then((data) => setData(data.themes));
  }, []);

  if (!data) {
    return <>loading...</>;
  }

  return (
    <>
      {data.map((theme) => {
        const path = `/themes/${theme.id}`;
        return (
          <>
            <Link href={path}>{theme.text}</Link>
          </>
        );
      })}
    </>
  );
};
