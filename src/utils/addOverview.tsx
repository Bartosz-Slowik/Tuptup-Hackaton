import React from "react";
import * as ReactDOM from "react-dom/client";
import Overview from "../components/overview";

export default function addOverview(id: Number) {
  const element = document.querySelector(
    `[data-overview="${id}"]`
  ) as HTMLElement;

  console.log(element);
  console.log(`[data-overview="${id}"]`);

  if (!element) {
    return;
  }

  const root = ReactDOM.createRoot(
    document.querySelector(`[data-overview="${id}"]`) as HTMLElement
  );

  root.render(<Overview />);
}
