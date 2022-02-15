// import { useContext } from "react";
// import { Send } from "./sender";

// type contextProviderProps = {
//   children: React.ReactNode;
// };

// const demoContext = useContext(Send);

// export const contextProvider = ({ children }: contextProviderProps) => {
//   return <demoContext.Provider value={Send}>{children}</demoContext.Provider>;
// };
import React from "react";

function context() {
  return <div>context</div>;
}

export default context;
