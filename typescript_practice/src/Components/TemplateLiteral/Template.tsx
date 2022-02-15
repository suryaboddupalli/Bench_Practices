import React from "react";

type Horizontal = "left" | "right" | "center";
type Vertical = "left" | "right" | "center";

type postionProps = {
  position: Exclude<`${Horizontal}-${Vertical}`, "center-center"> | "center";
};

function Template({ position }: postionProps) {
  return <div>position - {position}</div>;
}

export default Template;
