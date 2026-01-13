import React, { createContext } from "react";

export const PostDataContext = createContext();

const PostContext = (props) => {

  const postData = [
    {
      postId: 101,
      userId: 1,
      title: "Mastering Vue 3 Reactivity",
      content:
        "Reactivity in Vue 3 becomes insanely powerful with refs and computed values. Just built a dynamic dashboard with it!",
      likes: 34,
      createdAt: "2026-01-12T10:15:00Z",
    },
    {
      postId: 102,
      userId: 2,
      title: "Why Backend Developers Love Node",
      content:
        "Asynchronous non-blocking I/O is a superpower. Building APIs feels smoother than ever.",
      likes: 52,
      createdAt: "2026-01-11T14:42:00Z",
    },
    {
      postId: 103,
      userId: 3,
      title: "Fullstack Journey Update",
      content:
        "Finally connected frontend forms to a working database! Validation took longer than expected but worth it.",
      likes: 28,
      createdAt: "2026-01-10T08:30:00Z",
    },
    {
      postId: 104,
      userId: 4,
      title: "Designing for Humans",
      content:
        "Every UI decision should remove friction, not add it. Minimalism is not emptiness; it's clarity.",
      likes: 61,
      createdAt: "2026-01-09T19:12:00Z",
    },
    {
      postId: 105,
      userId: 5,
      title: "Deploying with Docker",
      content:
        "Docker containers make deployment predictable. Goodbye 'works on my machine', hello reproducible builds.",
      likes: 47,
      createdAt: "2026-01-08T11:05:00Z",
    },
  ];

  return <PostDataContext.Provider value={postData}>{props.children}</PostDataContext.Provider>;
};

export default PostContext;
