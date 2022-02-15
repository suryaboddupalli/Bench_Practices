import React from "react";

type ButtonProps = {
  varient: "primary" | "secondary";
} & React.ComponentProps<"button">;

function Button({ varient, children, ...rest }: ButtonProps) {
  return (
    <div>
      <button className={`btn-${varient}`} {...rest}>
        label
      </button>
    </div>
  );
}

export default Button;
