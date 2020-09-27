import React from "react";

import { Avatar } from "components/Avatar";

export function Employee({ firstName, lastName, avatar, position }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Avatar src={avatar} />
      <h3 className="w-3/4 text-sm ml-1">
        {firstName} {lastName}
      </h3>
      <p className="text-xs font-bold">{position.name}</p>
    </div>
  );
}
