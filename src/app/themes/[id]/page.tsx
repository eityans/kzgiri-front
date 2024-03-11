"use client";

import { Odai } from "@/app/_components/odai";

export default function Page({ params }: { params: { id: string } }) {
  //const params = useParams<{ id: string; }>()
  console.log(params);
  return (
    <>
      <Odai id={Number(params.id)} />
    </>
  );
}
