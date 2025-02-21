import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

export interface GalleryCard {
  title: string;
  description: string;
  link: string;
}

export default function Gallery({
  PassedCards,
}: {
  PassedCards: GalleryCard[];
}) {
  function CardHolder({ data }: { data: GalleryCard }) {
    return (
      <Card className="dark:bg-slate-900 bg-slate-100">
        <div className="flex flex-row justify-between py-5">
          <CardHeader>
            <CardTitle>{data.title}</CardTitle>
            <CardDescription>{data.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <a target="_blank" rel="noopener noreferrer" href={data.link}>
              <Button>More</Button>
            </a>
          </CardContent>
        </div>
      </Card>
    );
  }
  const RenderCards = PassedCards.map((data) => (
    <CardHolder key={data.title} data={data} />
  ));
  return <div className="flex flex-col gap-5 flex-wrap ">{RenderCards}</div>;
}
