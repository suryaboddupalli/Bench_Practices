import React from "react";

type RandomNumber = {
  value: number;
};
type positiveNumber = RandomNumber & {
  isPositive: Boolean;
  isNegative?: never;
  isZero?: never;
};
type negativeNumber = RandomNumber & {
  isNegative: Boolean;
  isPositive?: never;
  isZero?: never;
};
type zero = RandomNumber & {
  isZero: Boolean;
  isPositive?: never;
  isNegative?: never;
};

type RandomProps = positiveNumber | negativeNumber | zero;

function Number({ value, isPositive, isNegative, isZero }: RandomProps) {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "Negative"}{" "}
      {isZero && "Zero"}
    </div>
  );
}

export default Number;
