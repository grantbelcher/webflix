import React from "react";
import { Spinner, LockBody, Picture, ReleaseBody } from "./styles/loading";

export default function Loading({ src, ...restProps }) {
  return (
    // LOCK BODY TO PREVENT ANY SCROLLING
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
