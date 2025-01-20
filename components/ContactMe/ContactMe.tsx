import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactInfo } from "@/app/constants/information";
import Image, { StaticImageData } from "next/image";

export interface ContactCard {
  title: string;
  description: string;
  link: string;
  logo: StaticImageData;
}

export default function ContactMe() {
  function CardHolder({ data }: { data: ContactCard }) {
    return (
      <Card>
        <div className="flex flex-row justify-between py-5">
          <CardHeader>
            <CardTitle>{data.title}</CardTitle>
            <CardDescription>{data.description}</CardDescription>
          </CardHeader>
          <CardContent>
            {data.title === "Email" ? (
              <a href={`mailto:${data.link}`}>
                <Image
                  className="hover:scale-75 transition-all duration-500 cursor-pointer"
                  src={data.logo}
                  alt={data.title}
                  width={35}
                  height={35}
                />
              </a>
            ) : (
              <a href={data.link} target="_blank" rel="noopener noreferrer">
                <Image
                  className="hover:scale-75 transition-all duration-500 cursor-pointer"
                  src={data.logo}
                  alt={data.title}
                  width={35}
                  height={35}
                />
              </a>
            )}
          </CardContent>
        </div>
      </Card>
    );
  }
  const RenderCards = ContactInfo.map((data) => (
    <CardHolder key={data.title} data={data} />
  ));
  return (
    <div className="flex flex-col lg:flex-row gap-5 my-5">{RenderCards}</div>
  );
}
