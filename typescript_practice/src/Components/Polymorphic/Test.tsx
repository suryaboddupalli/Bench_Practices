import React, { Children } from "react";

type textProps = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: React.ElementType;
};

function Test({ size, color, children, as }: textProps) {
  const Component = as || "div";
  return <Component className={`${size}-${color}`}>{children}</Component>;
}

export default Test;
