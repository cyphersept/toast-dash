/**
 * v0 by Vercel.
 * @see https://v0.dev/t/chdMe8frhxs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage } from "./components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { posts, currentAccount, Updaters, PostsContext } from "./values";
import PostList from "./PostList";

import { useState, useContext } from "react";

export default function CreatePost({ user = currentAccount }) {
  const [newMessage, setNewMessage] = useState("");
  const [currentPosts, setCurrentPosts] = useState(posts);
  const makePost = () => {
    Updaters.createNewPost(newMessage);
    setCurrentPosts([...currentPosts]);
  };

  return (
    <PostsContext.Provider value={currentPosts}>
      <div className="create-post w-full p-6 pt-4 gap-2 bg-card rounded-3xl shadow-lg">
        <div className="flex mb-2 items-center ">
          <Avatar className="-ml-2 mr-2">
            <AvatarImage src={user.avatar} />
          </Avatar>
          <div className="text">
            <Label
              htmlFor="description"
              className="text-xl font-semibold text-primary-foreground"
            >
              <span className="text-amber-600">@{user.name}</span>, share an
              update
            </Label>
            <p className="text-muted-foreground text-sm">
              Tell everyone what you've been working on!
            </p>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <Button variant="outline" size="sm">
              <ImageIcon classes="w-4 h-4 mr-2" />
              Upload Image
            </Button>
            <Button type="submit" onClick={makePost}>
              Post
            </Button>
          </div>
        </div>
        <form className="">
          <div>
            <Textarea
              id="description"
              placeholder="I built this with #shadcn and #react, feeling great!"
              className="w-full min-h-16"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
          </div>
          <div className="flex justify-end"></div>
        </form>
      </div>
      <PostList list={useContext(PostsContext)} />
    </PostsContext.Provider>
  );
}

function ImageIcon({ classes = "" }) {
  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}
