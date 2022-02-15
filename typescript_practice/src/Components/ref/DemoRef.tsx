import React, { useEffect, useRef } from "react";

// function DemoRef() {
//   const inputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     inputRef.current?.focus();
//   });
//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//     </div>
//   );
// }

function DemoRef() {
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default DemoRef;
