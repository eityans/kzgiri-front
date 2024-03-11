"use client";

import { useEffect, useState } from "react";

export const Odai: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);
  if (!data) {
    return <>loading...</>;
  }
  return <>{data.title}</>;
};
