import React from "react";

// type props = {
//   items: number[] | string[];
// };

// function List({ items }: props) {
//   return (
//     <div>
//       {items.map((item) => (
//         <div>{item}</div>
//       ))}
//     </div>
//   );
// }

// export default List;

type props<T> = {
  items: T[];
};

function List<T extends { name: string; age: number }>({ items }: props<T>) {
  return (
    <div>
      {items.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
}

export default List;
