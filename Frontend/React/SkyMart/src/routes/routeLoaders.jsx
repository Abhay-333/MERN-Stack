import { redirect } from "react-router";

const getLoggedUser = () => {
  const rawUser = localStorage.getItem("logged_user:");
  return rawUser ? JSON.parse(rawUser) : null;
};

export const redirectIfAuthenticated = async () => {
  const loggedUser = getLoggedUser();

  if (loggedUser) {
    throw redirect("/dashboard");
  }

  return null;
};

export const requireAuth = async () => {
  const loggedUser = getLoggedUser();

  if (!loggedUser) {
    throw redirect("/");
  }

  return null;
};
