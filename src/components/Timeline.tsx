"use client";

import { WorkflowIcon } from "lucide-react";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "./ui/button";
import Profile from "./Profile";

type StrukturData = {
  avatar: string;
  name: string;
  role: string;
  medsos: string;
  date: string;
}[];

type TimelineProps = {
  data: StrukturData;
};

const Timeline = ({ data }: TimelineProps) => {
  return (
    <VerticalTimeline>
      {data.map((data, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1e3a8a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #1e3a8a" }}
          date={data.date}
          iconStyle={{ background: "#1e3a8a", color: "#fff" }}
          icon={<WorkflowIcon />}
        >
          <Profile
            images={data.avatar}
            name={data.name}
            role={data.role}
            medsos={data.medsos}
          />
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
