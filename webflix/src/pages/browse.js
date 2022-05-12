import { useContext } from "react";
import { HeaderContainer } from "../containers/header";
import { BrowseContainer } from "../containers/browse";
import { FirebaseContext } from "../context/firebase";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selectionFilter";

export default function Browse({ user }) {
  const { firebase } = useContext(FirebaseContext);

  const { series } = useContent("series");
  const { films } = useContent("films");

  const slides = selectionFilter({ series, films });
  const handleLogOut = () => {
    firebase.auth().signOut();
  };
  return (
    <>
      <h1>Browse PAge</h1>
      <button onClick={() => handleLogOut()}>log out</button>
      <BrowseContainer user={user} slides={slides} />
    </>
  );
}
