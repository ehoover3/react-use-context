import React, { useContext } from "react";
import PersonData from "./PersonData";
import { NameContext } from "../App";

export default function FunctionContextComponent() {
  const name = useContext(NameContext);

  return (
    <div>
      <h1>Hi {name}!</h1>
      <PersonData />
    </div>
  );
}
