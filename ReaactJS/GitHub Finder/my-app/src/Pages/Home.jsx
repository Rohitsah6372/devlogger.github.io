import React from "react";
import UserResult from "../Components/layout/Users/UserResult";
import UserSearch from "../Components/layout/Users/UserSearch";

export default function Home() {
  return (
    <div>
      <UserSearch />
      <UserResult />
    </div>
  );
}
