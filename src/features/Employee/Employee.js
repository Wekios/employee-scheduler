import React from "react";

import { Avatar } from "components/Avatar";

export function Employee({ firstName, lastName, avatar }) {
  return (
    <div className="flex flex-wrap flex-col lg:flex-row items-center justify-center">
      <Avatar src={avatar} />
      <p className="text-sm ml-1">
        {firstName} {lastName}
      </p>
    </div>
  );
}
