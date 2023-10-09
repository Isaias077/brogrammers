"use client"
import hero from "../../../public/images/hero.jpg";
import {Card, CardHeader, CardBody} from "@nextui-org/react";
function ProjectCard({data}) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{data.title}</h4>
        <p className="text-tiny uppercase font-bold">Topic: {data.topic}</p>
        <small className="text-default-500">Description: {data.topic}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <img
          alt="Card background"
          className="object-cover rounded-xl"
          src={data.photo}
          width={270}
          height={270}
        />
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
