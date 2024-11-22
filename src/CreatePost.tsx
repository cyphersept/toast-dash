/**
 * v0 by Vercel.
 * @see https://v0.dev/t/chdMe8frhxs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function CreatePost() {
  return (
    <div className="w-full px-8 py-4 gap-2 bg-card rounded-3xl shadow-lg">
      <div className="flex mb-2">
        <div className="text">
          <Label
            htmlFor="description"
            className="text-xl font-semibold text-primary-foreground"
          >
            🔥 Share an update
          </Label>
          <p className="text-muted-foreground text-sm">
            Tell everyone what you've been working on!
          </p>
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <Button variant="outline" size="sm">
            <ImageIcon className="w-4 h-4 mr-2" />
            Upload Image
          </Button>
          <Button type="submit">Post</Button>
        </div>
      </div>
      <form className="">
        {/* <div>
          <Label htmlFor="title">Tags</Label>
          <Input
            id="title"
            type="text"
            placeholder="Enter a title"
            className="w-full"
          />
        </div> */}
        <div>
          <Textarea
            id="description"
            placeholder="I built this with #shadcn and #react, feeling great!"
            className="w-full min-h-16"
          />
        </div>
        <div className="flex justify-end"></div>
      </form>
    </div>
  );
}

function ImageIcon(props) {
  return (
    <svg
      {...props}
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

function VideoIcon(props) {
  return (
    <svg
      {...props}
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
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  );
}
