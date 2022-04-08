import React, { useContext } from "react";
import { NameContext } from "../App";

export default function PersonData() {
  const name = useContext(NameContext);

  return (
    <div>
      <li>NAME: {name}</li>
      <li>JOB: Engineer</li>
      <li>HOBBY: Being Awesome</li>
    </div>
  );
}
