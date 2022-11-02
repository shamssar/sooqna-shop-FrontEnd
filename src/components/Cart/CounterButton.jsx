import React from "react";

export default function CounterButton(props) {
  let { action, title } = props;
  return <button onClick={action}>{title}</button>;
}