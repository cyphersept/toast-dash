import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleCheckBig, Circle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { missions } from "./values";
import { useState } from "react";

export default function MissionList({ list = missions }) {
  const listMissions = list.map((el) => (
    <Mission
      name={el.name}
      exp={el.exp}
      currentCount={el.currentCount}
      totalCount={el.totalCount}
    />
  ));

  // Check if all tasks are complete
  const doneCount = list.reduce(
    (acc, curr) => acc + Math.floor(curr.currentCount / curr.totalCount),
    0
  );
  const missionsLeft = list.length - doneCount;
  const allDone = list.length == doneCount;
  const isDoneMessage = allDone
    ? "️‍🔥 You're on a roll!"
    : "Complete " + missionsLeft + " more missions to continue your streak!";
  return (
    <Card className="rounded-3xl min-w-24">
      <CardHeader>
        <CardTitle>Today's Missions</CardTitle>
        <CardDescription>
          Complete missions to continue your streak and earn bonus EXP!
        </CardDescription>
      </CardHeader>
      <CardContent>{listMissions}</CardContent>
      <CardFooter className="w-3/4 m-auto pb-8">{isDoneMessage}</CardFooter>
    </Card>
  );
}

function Mission({
  name = "Mission",
  exp = 100,
  currentCount = 0,
  totalCount = 1,
}) {
  const done = currentCount === totalCount;
  const doneClass = done ? "done" : "";
  const statusIcon = done ? (
    <CircleCheckBig className="text-yellow-500 " />
  ) : (
    <Circle className="text-yellow-500  " />
  );

  return (
    <div className={doneClass + "mission flex items-center py-2"}>
      {statusIcon}
      <div className="grow pl-4 ">
        <div className="flex content-start gap-4 py-1">
          <div>{name}</div>
          <div className="text-muted-foreground">+{exp} XP</div>
          <div className="progress text-muted-foreground ml-auto ">
            {currentCount}/{totalCount}
          </div>
        </div>
        <Progress value={(100 * currentCount) / totalCount} />
      </div>
    </div>
  );
}
