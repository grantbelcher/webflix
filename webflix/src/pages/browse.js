import { useContext } from "react";
import { HeaderContainer } from "../containers/header";
import { FirebaseContext } from "../context/firebase";

export default function Browse() {
  const { firebase } = useContext(FirebaseContext);

  console.log(firebase.auth().currentUser, "CURRENT USER");
  const handleLogOut = () => {
    firebase.auth().signOut();
  };
  return (
    <>
      <h1>Browse PAge</h1>
      <button onClick={() => handleLogOut()}>log out</button>
    </>
  );
}
