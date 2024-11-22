import { Avatar, AvatarImage } from "./components/ui/avatar";
import { Card } from "./components/ui/card";
import { MessageCircleMore } from "lucide-react";
import { users, posts, Updaters } from "./values";
//import { createContext, useContext } from "react";

import { Flair, FlatFlair } from "./Flair";

export default function PostList({ list = posts }) {
  const displayList =
    list.length === 0 ? (
      <div className="text-background text-xl">No posts yet. Be the first!</div>
    ) : (
      list.map((e) => (
        <Post
          postId={e.postId}
          message={e.message}
          user={users[e.userId]}
          cheers={e.cheers}
          comments={e.comments}
        />
      ))
    );
  return <section className="flex flex-col gap-2">{displayList}</section>;
}

export function Post({
  postId = -1,
  message = "Error: Post message missing",
  user = users[0],
  cheers = new Set(),
  comments = [{}],
}) {
  const flairList = user.flairs.map((obj, index) =>
    index == 2 ? (
      <Flair group={obj.group} id={obj.id} />
    ) : (
      <FlatFlair group={obj.group} id={obj.id} />
    )
  );
  const cheerThisPost = () => {
    Updaters.cheerPost(postId);
  };
  const userTitle = (
    <div className="text-sm text-secondary-foreground">
      {flairList[1]} @ {flairList[0]}
    </div>
  );
  const regex = /#[-\w]+/g;
  const tags = message.match(regex) ?? [];
  const tagDisplay = tags.map((tag, index) =>
    index === 0 ? (
      <div className="tag ml-auto">{tag}</div>
    ) : (
      <div className="tag">{tag}</div>
    )
  );
  const parsedMessage = message
    .replace(regex, "<split-here>$&<split-here>")
    .split("<split-here>")
    .map((part) =>
      part.match(regex) ? <span className="highlight-tag">{part}</span> : part
    );
  return (
    <Card className="p-2 flex gap-2 ">
      <Avatar className="h-16 w-16">
        <AvatarImage src={user.avatar} />
      </Avatar>
      <div className="grow ">
        <div className="flex gap-2 wrap items-center">
          <span className="font-semibold nametag">{user.name}</span>
          {userTitle}
          {tagDisplay}
        </div>
        <div className="py-1 text-left w-full">
          <span>{parsedMessage}</span>
          <div className="inline-flex gap-2 float-end">
            {/* <Reaction icon={<span>💖</span>} count={hearts.size} /> */}
            {/* <Reaction icon={<span>🤝</span>} count={dittos.size} /> */}
            <Reaction
              icon={<span>🎉</span>}
              count={cheers.size}
              clickFunc={cheerThisPost}
            />
            <Reaction icon={<MessageCircleMore />} count={comments.length} />
          </div>
        </div>
      </div>
    </Card>
  );
}

function Reaction({ icon = <span />, count = 0, clickFunc = () => {} }) {
  return (
    <button
      className="bg-transparent p-0.5 border-none flex gap-1.5 items-center "
      onClick={clickFunc}
    >
      <span>{icon}</span>
      <span>{count}</span>
    </button>
  );
}

export function MiniPost({ message = "", user = users[0] }) {
  return (
    <div className="p-1 flex gap-2 ">
      <Avatar className="h-8 w-8">
        <AvatarImage src={user.avatar} />
      </Avatar>
      <div className="grow ">
        <div className="flex gap-2 wrap items-center">
          <span className="mr-2 font-semibold nametag">{user.name}</span>
        </div>
        <div className="py-1 text-left w-full">{message}</div>
      </div>
    </div>
  );
}
