import { useState } from "react";

import MissionList from "./MissionList";
import PostList from "./PostList";
import AppSidebar from "./AppSidebar";

import { posts, missions } from "./values";
import SearchBar from "./SearchBar";

function App() {
  return (
    <>
      <AppSidebar />
      <main className="grow p-8 pt-4">
        <SearchBar />
        <div className="flex wrap h-full items-start gap-8 mt-8">
          <PostList list={posts} />
          <MissionList list={missions} />
        </div>
      </main>
    </>
  );
}

export default App;
