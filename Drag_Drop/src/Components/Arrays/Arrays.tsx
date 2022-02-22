import React, { useEffect } from "react";

const items = [
  { name: "Apple", Price: 100 },
  { name: "Orange", Price: 40 },
  { name: "Grape", Price: 70 },
  { name: "Mango", Price: 80 },
  { name: "PineApple", Price: 50 },
  { name: "Berry", Price: 200 },
  { name: "Lemon", Price: 10 },
  { name: "Promogrante", Price: 150 },
];

console.log(items);
// FILTER /////
const itemsFilter = items.filter((item) => item.Price > 100);
const itemDelete = items.filter((item) => item.Price !== 100);
console.log(itemsFilter);
console.log(itemDelete);

// AT //////
console.log(items.at(3));
console.log(items.at(-2));

// CONCAT ---------------------

const arr = [
  { name: "Lemon", Price: 109 },
  { name: "Promogrante", Price: 550 },
];
console.log(items.concat(arr));

/// CopyWith In -----------------
const arr1 = [1, 2, 3, 4, 5];
console.log(items.copyWithin(0, 2, 3));
console.log(arr1.copyWithin(0, 3));
console.log(arr1.copyWithin(0, 3, 4));
console.log(arr1.copyWithin(-2, -3, -1));

//Fill ----
console.log(arr1.fill(0, 2, 4));
console.log(arr1.fill(5, 1));
console.log(arr1.fill(6));

//Find------------------

const find = items.find((item) => (item.Price = 100));
console.log(find);

//ForEach
const foreach = items.forEach((item) => console.log(item));

//Include ------
console.log(items.includes({ name: "apple", Price: 100 }));

//Join---------------
const elements = ["surya", "Naveen", "revath"];

console.log(elements.join());
console.log(elements.join(""));
console.log(elements.join("-"));

//Map ------------------
const Itemlist = items.map(
  (item) => (
    console.log(item.Price * 2),
    console.log(item.name),
    (
      <div>
        <div>{item.name}</div>
      </div>
    )
  )
);

///pop-----------
const newarr = items.pop();
console.log(newarr);

//Push ----
const newarr1 = items.push({ name: "surya", Price: 0 });
console.log(newarr1);
console.log(items);

//Reduce ------------
const prices = [50, 98, 60, 45, 67, 21];
const add = prices.reduce((a, b) => a + b, 0);
const multi = prices.reduce((c, d) => c * d, 1);
console.log(add, multi);

//Reverse ----
const reverse = items.reverse();
console.log(reverse);
const rev = prices.reverse();
console.log(rev);

//Shift-----------------
const shift = items.shift();
console.log(shift);

//Unshift-----
const Unshift = items.unshift({ name: "naveen", Price: 0 });
console.log(Unshift);
console.log(items);
//slice----------------
console.log(items.slice(2));
console.log(items.slice(2, 7));
console.log(items.slice(5, 6));
console.log(items.slice(3, -4));

//splice-------------
items.splice(4, 0, { name: "revanth", Price: 0 });
console.log(items);

//Some---------------
const highest = items.some((item) => {
  return item.Price > 100;
});
console.log(highest);

//every-----
const every = items.every((item) => {
  return item.Price > 100;
});
console.log(every);

// sort ------------------
const number = [5, 10, 209, 35, 75, 34, 1000];
console.log(number.sort());
console.log(number.sort(order));

function order(a: any, b: any) {
  return a - b;
}
var asorder = (a: any, b: any) => {
  return a - b;
};
console.log(number.sort(asorder));

items.sort((a, b) => {
  return a.Price - b.Price;
});

console.log(items);

function Arrays() {
  return <div>hello</div>;
}

export default Arrays;
