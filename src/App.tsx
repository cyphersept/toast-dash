// import { useState, useContext } from "react";
// import PostList from "./PostList";

import MissionList from "./MissionList";
import AppSidebar from "./AppSidebar";

import { missions } from "./values";
import SearchBar from "./SearchBar";
import CreatePost from "./CreatePost";

function App() {
  return (
    <>
      <AppSidebar />
      <main className="p-8 pt-4">
        <SearchBar />
        <div className="flex wrap items-start gap-8 mt-4">
          <div className="flex flex-col gap-4 grow">
            <CreatePost />
          </div>
          <MissionList list={missions} />
        </div>
      </main>
    </>
  );
}

export default App;
