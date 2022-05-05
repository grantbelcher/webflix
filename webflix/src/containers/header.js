import { Header } from "../components";

export function HeaderContainer() {
  console.log(Header.Frame, "look here");
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to="/" />
        <Header.ButtonLink to="/">Test</Header.ButtonLink>
      </Header.Frame>
    </Header>
  );
}
