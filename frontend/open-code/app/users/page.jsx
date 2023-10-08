import React from "react";
import SearchBar from "../components/searchbar/searchBar";
import UserComponent from "../components/user/userComponent";

function page() {
  return (
    <div>
      <SearchBar />
      <UserComponent />
    </div>
  );
}

export default page;
