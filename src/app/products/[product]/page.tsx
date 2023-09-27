import React from "react";


export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log("Hello");
  return (
    <div>
      <div>Hello</div>
    </div>
  )
}
