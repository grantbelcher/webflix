import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

// target will be either series or films
export default function useContent(target) {
  // we will save data to state as content variable
  const [content, setContent] = useState([]);
  // access firestore from firebase context
  const { firebase } = useContext(FirebaseContext);

  // when component initially mounts
  useEffect(() => {
    firebase
      .firestore()
      // access collection associated with target arg
      .collection(target)
      .get()
      .then((snapshot) => {
        // create an array of all items in firestore
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          // add unique id that can be used as key
          docId: contentObj.id,
        }));
        // save data from firestore to content state
        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  // this will be returned from custom hook
  // ex. hook is called with 'series', an object will be returned { series: [seriesObj1, seriesObj2, ...] }
  return { [target]: content };
}
