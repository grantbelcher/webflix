import React from "react";
import { SelectProfileContainer } from "./profile";

export function BrowseContainer({ slides, user }) {
  console.log(slides, "from container");
  return <SelectProfileContainer user={user} />;
}
