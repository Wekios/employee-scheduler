import React from "react";

import { Avatar } from "components/Avatar";

export function Employee({ firstName, lastName, avatar, position }) {
  return (
    <div className="flex flex-wrap flex-col lg:flex-row items-center justify-center">
      <Avatar src={avatar} />
      <p className="w-3/4 text-sm ml-1">
        {firstName} {lastName}
      </p>
      <small className="font-bold">{position.name}</small>
    </div>
  );
}
