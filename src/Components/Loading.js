import React from "react";
import Spinner from "../assets/loading/spinner.gif";

export default function Loading() {
  return (
    <div className="loading-main">
      <img src={Spinner} width="220" height="220" alt="loading" />
    </div>
  );
}
