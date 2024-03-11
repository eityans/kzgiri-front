"use client";

import { useEffect, useState } from "react";

export const Odai: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/todos/1")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return <>loading...</>;
  }
  return <>{data.title}</>;
};
