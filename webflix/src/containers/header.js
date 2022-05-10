import { Header } from "../components";
import logo from "../logo.svg";

export function HeaderContainer() {
  console.log(Header.Frame, "look here");
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to="/" alt="Webflix" src={logo} />
        <Header.ButtonLink to="/">Test</Header.ButtonLink>
      </Header.Frame>
    </Header>
  );
}
