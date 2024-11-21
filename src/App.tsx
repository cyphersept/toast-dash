import { useState } from "react";

import MissionList from "./MissionList";
import PostList from "./PostList";
import AppSidebar from "./AppSidebar";

import { posts, missions } from "./values";

function App() {
  return (
    <>
      <MissionList list={missions} />
      <PostList list={posts} />
      <AppSidebar />
    </>
  );
}

export default App;
