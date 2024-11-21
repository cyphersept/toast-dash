import { flairs } from "./values";

export default function Flair({ group = 0, id = 0 }) {
  const flairData = flairs[group][id];
  return (
    <div
      className={
        "inline-block rounded-full text-sm align-middle font-semibold shadow-sm text-nowrap py-0.5 px-2 " +
        flairData.bgColor
      }
    >
      {flairData.display}
    </div>
  );
}
