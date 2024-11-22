import {
  Home,
  MessageCircleMore,
  CircleUserRound,
  LogOut,
  Settings,
  CalendarCheck,
} from "lucide-react";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "./components/ui/card";
import { useState } from "react";

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
    <Card className="flex flex-col w-96  mt-4 mb-8 rounded-s-none ">
      <CardHeader className="flex-row gap-4 pl-8 text-lg border-b font-semibold">
        <CalendarCheck /> Placeholder App Name
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
