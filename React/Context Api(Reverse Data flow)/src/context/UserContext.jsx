import React, { createContext } from "react";

export const UserDataContext = createContext();

const UserContext = (props) => {
  const userData = [
    {
      id: 1,
      name: "Aarav Kulkarni",
      email: "aarav.kulkarni@example.com",
      role: "Frontend Developer",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      id: 2,
      name: "Sara Desai",
      email: "sara.desai@example.com",
      role: "Backend Developer",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      id: 3,
      name: "Rohan Patil",
      email: "rohan.patil@example.com",
      role: "Fullstack Developer",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      id: 4,
      name: "Meera Sharma",
      email: "meera.sharma@example.com",
      role: "UI/UX Designer",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 5,
      name: "Kunal Singh",
      email: "kunal.singh@example.com",
      role: "DevOps Engineer",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    },
  ];

  return <UserDataContext.Provider value={userData} >{props.children}</UserDataContext.Provider>;
};

export default UserContext;
