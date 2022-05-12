import React from "react";
import { Header, Profile } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export function SelectProfileContainer({ user, setProfile }) {
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
          <Profile.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profile.Picture src={user.photoURL} alt="icon" />
            <Profile.Name>{user.displayName}</Profile.Name>
          </Profile.User>
        </Profile.List>
      </Profile>
    </>
  );
}
