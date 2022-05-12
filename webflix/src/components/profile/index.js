import React from "react";
import { Container, Title, List, User, Picture, Name } from "./styles/profile";

export default function Profile({ children, restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profile.Title = function ProfileTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Profile.List = function ProfileList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};
Profile.User = function ProfileUser({ children, ...restProps }) {
  return <User {...restProps}>{children}</User>;
};
Profile.Name = function ProfileName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};
Profile.Picture = function ProfilePicture({ src, ...restProps }) {
  console.log(src, "SOURCE");
  return (
    <Picture
      {...restProps}
      src={src ? `../images/users/${src}.png` : `../images/misc/loading.gif`}
    />
  );
};

{
  /* <Profile>
        <Profile.Title>Who's watching?</Profile.Title>
        <Profiles.List>
          <Profiles.User>
            <Profiles.Picture />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profile> */
}
