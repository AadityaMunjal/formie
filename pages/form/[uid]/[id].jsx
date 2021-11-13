import { useRouter } from "next/router";

import { getDoc, collection, doc } from "firebase/firestore";
import { useEffect } from "react";

import { db } from "../../../firebase.config";

function Form() {
  const router = useRouter();
  const { uid, id } = router.query;

  useEffect(() => {
    async function getData() {
      const ref = doc(db, "users", uid);
      const docSnap = await getDoc(ref);

      const { data } = docSnap;
      data ? console.log(data.forms[id]) : null;
    }

    getData();
  }, []);

  return (
    <div>
      hey
      <h1>{`/${uid}/${id}`}</h1>
    </div>
  );
}

export default Form;

// it works
