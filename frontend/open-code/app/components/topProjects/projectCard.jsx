"use client"
import Image from "next/image";
import hero from "../../../public/images/hero.jpg";
import {Card, CardHeader, CardBody} from "@nextui-org/react";
function ProjectCard({ data }) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={hero}
          width={270}
        />
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
