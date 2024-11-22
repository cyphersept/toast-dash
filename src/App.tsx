import { useState } from "react";

import MissionList from "./MissionList";
import PostList from "./PostList";
import AppSidebar from "./AppSidebar";

import { posts, missions } from "./values";
import SearchBar from "./SearchBar";
import CreatePost from "./CreatePost";

function App() {
  return (
    <>
      <AppSidebar />
      <main className="grow p-8 pt-4">
        <SearchBar />
        <div className="flex wrap items-start gap-8 mt-4">
          <div className="flex flex-col gap-4 grow">
            <CreatePost />
            <PostList list={posts} />
          </div>
          <MissionList list={missions} />
        </div>
      </main>
    </>
  );
}

export default App;
