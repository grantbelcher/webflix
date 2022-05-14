import { useState } from "react";

import {
  Button,
  ButtonLink,
  Frame,
  Profile,
  Text,
  Dropdown,
  FeatureCallOut,
  TextLink,
  Feature,
  Picture,
  Search,
  SearchIcon,
  SearchInput,
  Background,
  Container,
  Group,
  Logo,
} from "./styles/header";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Header({ bg = true, children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};
Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group>{children}</Group>;
};
Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`images/users/${src}.png`} />;
};
Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="/images/icons/icons/search.png" alt="search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        active={searchActive}
        onChange={({ target }) => setSearchTerm(target.value)}
      />
    </Search>
  );
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};
Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.Button = function HeaderButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

// Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
//   return <ButtonLink {...restProps}>{children}</ButtonLink>;
// };
Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
