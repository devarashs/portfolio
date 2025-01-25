import React from "react";

export default function BlogPage({
  params: { title },
}: {
  params: { title: string };
}) {
  return <div>{title}</div>;
}
