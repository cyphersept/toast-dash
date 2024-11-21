function initEmptyArray() {
  const result: object[] = [];
  return result;
}
export const missions = [
  { name: "Make a post", exp: 100, currentCount: 0, totalCount: 1 },
  { name: "Search for an idea", exp: 20, currentCount: 0, totalCount: 1 },
  { name: "Encourage 5 posts", exp: 50, currentCount: 0, totalCount: 5 },
  { name: "Volunteer on a post", exp: 50, currentCount: 0, totalCount: 1 },
  { name: "Chat with a friend", exp: 500, currentCount: 0, totalCount: 1 },
];

export const users = [
  {
    userId: 0,
    name: "John Doe",
    flairs: [
      { group: 0, id: 0 },
      { group: 1, id: 0 },
      { group: 2, id: 0 },
    ],
    avatar: "https://i.pravatar.cc/150?img=51",
  },
  {
    userId: 1,
    name: "Jane Smith",
    flairs: [
      { group: 0, id: 1 },
      { group: 1, id: 1 },
      { group: 2, id: 1 },
    ],
    avatar: "https://i.pravatar.cc/150?img=31",
  },
  {
    userId: 2,
    name: "Charlie Brown",
    flairs: [
      { group: 0, id: 2 },
      { group: 1, id: 2 },
      { group: 2, id: 2 },
    ],
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    userId: 3,
    name: "Davey Jones",
    flairs: [
      { group: 0, id: 3 },
      { group: 1, id: 3 },
      { group: 2, id: 2 },
    ],
    avatar: "https://i.pravatar.cc/150?img=60",
  },
];

export const posts = [
  {
    postId: 0,
    userId: 2,
    message: "Hello world!",
    cheers: new Set(),
    comments: initEmptyArray(),
  },
  {
    postId: 1,
    userId: 1,
    message: "Lorem Ipsum",
    cheers: new Set(),
    comments: initEmptyArray(),
  },
  {
    postId: 2,
    userId: 0,
    message:
      "Amet veniam reprehenderit officia ipsum officia dolor tempor duis elit consequat incididunt eu.",
    cheers: new Set(),
    comments: initEmptyArray(),
  },
  {
    postId: 3,
    userId: 3,
    message:
      "Et culpa minim consequat veniam fugiat exercitation qui sunt irure deserunt laborum aute.",
    cheers: new Set(),
    comments: initEmptyArray(),
  },
  {
    postId: 4,
    userId: 2,
    message:
      "Laborum nulla voluptate fugiat dolor esse veniam quis laboris id cupidatat amet pariatur Lorem.",
    cheers: new Set(),
    comments: initEmptyArray(),
  },
  {
    postId: 5,
    userId: 4,
    message: "Est Lorem do velit quis anim eu.",
    cheers: new Set(),
    comments: initEmptyArray(),
  },
];

export const flairs = [
  [
    { id: 0, display: "🧱 Redbrick", color: "inherit", bgColor: "bg-red-400" },
    { id: 1, display: "🏐 Shift", color: "inherit", bgColor: "bg-green-400" },
    {
      id: 2,
      display: "✈️ Animoto",
      color: "inherit",
      bgColor: "bg-yellow-400",
    },
    { id: 3, display: "🦢 Delivra", color: "inherit", bgColor: "bg-blue-400" },
    {
      id: 4,
      display: "📰 Leadpages",
      color: "inherit",
      bgColor: "bg-purple-400",
    },
  ],
  [
    {
      id: 0,
      display: "UI/UX Designer",
      color: "inherit",
      bgColor: "bg-yellow-200",
    },
    {
      id: 1,
      display: "Data Architect",
      color: "inherit",
      bgColor: "bg-yellow-200",
    },
    {
      id: 2,
      display: "QA Specialist",
      color: "inherit",
      bgColor: "bg-yellow-200",
    },
    { id: 3, display: "CEO", color: "inherit", bgColor: "bg-yellow-200" },
    {
      id: 4,
      display: "Acquisitions",
      color: "inherit",
      bgColor: "bg-yellow-200",
    },
  ],
  [
    { id: 0, display: "Busy", color: "inherit", bgColor: "bg-red-600" },
    {
      id: 1,
      display: "Open to chat",
      color: "inherit",
      bgColor: "bg-orange-400",
    },
    {
      id: 2,
      display: "Let's collab!",
      color: "inherit",
      bgColor: "bg-green-400",
    },
  ],
];

export const Updaters = {
  cheerPost(index = 0, userId = 3) {
    if (posts[index].cheers.has(index)) posts[index].cheers.delete(userId);
    else posts[index].cheers.add(userId);
  },
  commentPost(index = 0, comment = { userId: 3, time: Date.now() }) {
    posts[index].comments.push(comment);
  },
};
