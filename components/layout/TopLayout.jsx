import React, { useState } from "react";

export default function TopLayout({ children }) {
  const [LoggedIn, setLoggedIn] = useState(false);
  return <div>{React.cloneElement(children, { LoggedIn, setLoggedIn })}</div>;
}
