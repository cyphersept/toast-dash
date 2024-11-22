import { useFuzzySearchList, Highlight } from "@nozbe/microfuzz/react";
import { Search } from "lucide-react";
import { useState } from "react";
import { MiniPost } from "./PostList";
import { users, posts } from "./values";

// https://www.npmjs.com/package/@nozbe/microfuzz
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function SearchBar({ searchList = posts }) {
  const [value, setValue] = useState("");
  // const filteredList = useFuzzySearchList({
  //   searchList,
  //   // If `queryText` is blank, `list` is returned in whole
  //   value,
  //   // optional `getText` or `key`, same as with `createFuzzySearch`
  //   getText: (post) => [post.message, post.getUser.name],
  //   // arbitrary mapping function, takes `FuzzyResult<T>` as input
  //   mapResultItem: ({ item, score, matches: [highlightRanges] }) => ({
  //     item,
  //     highlightRanges,
  //   }),
  // });

  //Render `filteredList`'s labels with matching characters highlighted
  const results = [...searchList];
  results.length = 10;
  const resultDisplay = results.map((item) => (
    <MiniPost
      key={item.postId}
      message={item.message}
      user={users[item.userId]}
    ></MiniPost>
  ));

  return (
    <Popover>
      <PopoverTrigger className="relative w-full">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search"
          className="pl-8 rounded-full text-lg p-1 w-full"
          onChange={(e) => setValue(e.target.value)}
        />
      </PopoverTrigger>
      <PopoverContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="w-[--radix-popover-trigger-width]"
      ></PopoverContent>
    </Popover>
  );
}
