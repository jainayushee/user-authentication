import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const { isLoading } = useAuth0();

  if (isLoading) return <h1>Loading..</h1>;
  return (
    <div className="App">
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
      <Profile></Profile>
    </div>
  );
}
