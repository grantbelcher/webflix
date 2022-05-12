import React from "react";
import { Header, Profile } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export function SelectProfileContainer({ user, setProfile }) {
  console.log(user, "look the fuck here");
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} alt="Webflix" src={logo} />
          <Header.ButtonLink to="/signin">CHANGE TEXT</Header.ButtonLink>
        </Header.Frame>
      </Header>
      <Profile>
        <Profile.Title>Who's watching?</Profile.Title>
        <Profile.List>
          <Profile.User>
            <Profile.Picture
              src={`../images/users/${user.photoURL}.png`}
              alt="icon"
            />
            <Profile.Name>{user.displayName}</Profile.Name>
          </Profile.User>
        </Profile.List>
      </Profile>
    </>
  );
}
