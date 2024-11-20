import { Avatar, AvatarImage } from "./components/ui/avatar";
import { Card } from "./components/ui/card";
import { FaRegHand } from "react-icons/fa6";

const;

export default function Post({
  message,
  user,
  cheers = new Set(),
  dittos = new Set(),
  comments = [],
}) {
  return (
    <Card>
      <Avatar>
        <AvatarImage src={user.avatar} />
      </Avatar>
      <div className="interactions flex gap-2">
        <Reaction icon={<FaRegHand />} count={cheers.size} />
        <Reaction icon={<FaRegHand />} count={dittos.size} />
        <Reaction icon={<FaRegHand />} count={comments.length} />
      </div>
    </Card>
  );
}

function Reaction({ icon = <FaRegHand />, count = 0, clickFunc = () => {} }) {
  return (
    <button className="bg-none border-none " onClick={clickFunc}>
      {icon}
      <span className="ml-1">{count}</span>
    </button>
  );
}
