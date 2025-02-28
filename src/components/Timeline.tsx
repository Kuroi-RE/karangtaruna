"use client";

import { WorkflowIcon } from "lucide-react";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
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
          className="vertical-timeline-element--work w-full md:w-[400px] lg:w-full"
          contentStyle={{ background: "#1e3a8a", color: "#1e3a8a" }}
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
