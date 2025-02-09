import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface ProfileProps {
  images: string;
  name: string;
  role: string;
  medsos: string;
}

const Profile = (props: ProfileProps) => {
  return (
    <div className="relative mt-10 flex h-48 flex-col items-center justify-center rounded-md bg-blueSea-mute p-2 shadow-md shadow-zinc-900">
      <Avatar className="absolute -top-12 h-24 w-24 shadow-sm shadow-zinc-900">
        <AvatarImage>{props.images}</AvatarImage>
        <AvatarFallback>KT</AvatarFallback>
      </Avatar>
      <div className="-top-10 flex w-full flex-col items-center justify-center text-center text-black">
        <h1 className="text-xl font-bold tracking-wide">{props.name}</h1>
        <span className="text-muted-foreground dark:text-muted">
          {props.role}
        </span>
        <span className="text-muted-foreground">{props.medsos}</span>
      </div>
    </div>
  );
};

export default Profile;
