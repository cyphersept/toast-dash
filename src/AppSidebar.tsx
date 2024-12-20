import {
  Home,
  MessageCircleMore,
  CircleUserRound,
  LogOut,
  Settings,
} from "lucide-react";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "./components/ui/card";
import { useState } from "react";

// import Logo from "./Logo";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Chats",
    url: "#",
    icon: MessageCircleMore,
  },
  {
    title: "My Account",
    url: "#",
    icon: CircleUserRound,
  },
];

const bottomItems = [
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Log Out",
    url: "#",
    icon: LogOut,
  },
];

export default function AppSidebar() {
  const [selected, setSelected] = useState(0);
  const links = items.map((item, index) => (
    <SidebarItem
      key={item.title}
      item={item}
      classes="border-b border-solid"
      isSelected={index === selected}
      clickFunc={() => setSelected(index)}
    />
  ));
  const footLinks = bottomItems.map((item, index) => (
    <SidebarItem
      key={item.title}
      item={item}
      classes="border-t border-solid"
      isSelected={index + items.length === selected}
      clickFunc={() => setSelected(index + items.length)}
    />
  ));
  return (
    <Card className="flex flex-col w-96 min-w-72  mt-4 mb-8 rounded-s-none ">
      <CardHeader className="flex-row gap-4 pl-8 h-auto items-end border-b font-semibold">
        <img
          src="https://media.discordapp.net/attachments/909164053371433021/1309591050867839138/Logo.png?ex=67422335&is=6740d1b5&hm=4694aaab9aad50ab395024eb71ca152b55fa1e9b4666d9b9a0129140c6fa0735&=&format=webp&quality=lossless"
          alt=""
          className="w-auto h-8 aspect-square "
        />
        <span className="text-2xl  !mt-0">Re:Engage</span>
      </CardHeader>
      <CardContent className="p-0">{links}</CardContent>
      <CardFooter className="flex flex-col items-stretch p-0 pb-4 mt-auto">
        {footLinks}
      </CardFooter>
    </Card>
  );
}

function SidebarItem({
  item = items[0],
  classes = "",
  isSelected = false,
  clickFunc = () => {},
}) {
  const selected = isSelected
    ? " bg-yellow-100 border-l-8 border-l border-solid border-primary font-semibold hover:bg-yellow-200"
    : "";
  return (
    <div key={item.title} className={classes}>
      <button
        className={
          "button-none w-full flex gap-4 p-4 pl-8 hover:bg-muted transition-colors" +
          selected
        }
        onClick={clickFunc}
      >
        <item.icon />
        <span>{item.title}</span>
      </button>
    </div>
  );
}
