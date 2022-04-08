import React, { useState } from "react";
import Person from "./components/Person";
export const NameContext = React.createContext(); // <-- !!! THIS IS BEING EXPORTED

export default function App() {
  const [name, setName] = useState("John");

  return (
    <>
      <NameContext.Provider value={name}>
        <Person />
      </NameContext.Provider>
    </>
  );
}
