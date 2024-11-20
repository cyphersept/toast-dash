export const missions = [
  { name: "Make a post", exp: 100, currentCount: 0, totalCount: 1 },
  { name: "Search for an idea", exp: 20, currentCount: 0, totalCount: 1 },
  { name: "Encourage 5 posts", exp: 50, currentCount: 0, totalCount: 5 },
  { name: "Volunteer on a post", exp: 50, currentCount: 0, totalCount: 1 },
  { name: "Chat with a friend", exp: 500, currentCount: 0, totalCount: 1 },
];

export const users = [
  { userId: 1, name: "John Doe", avatar: "./assets/deer.svg" },
  { userId: 2, name: "Jane Smith", avatar: "./assets/bee.svg" },
  { userId: 3, name: "Charlie Brown", avatar: "./assets/bear.svg" },
];

export const posts = [
  {
    userId: 3,
    message: "Hello world!",
    cheers: new Set(),
    dittos: new Set(),
    comments: [],
  },
];
