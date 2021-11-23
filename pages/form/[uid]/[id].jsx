import { useRouter } from "next/router";

import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../../../firebase.config";

import { Title, Short } from "../../../components/client";

function Form() {
  const router = useRouter();
  let { uid, id } = router.query;

  let [title, setTitle] = useState("");
  let [heading, setHeading] = useState();
  let [desc, setDesc] = useState("");
  let [questions, setQuestions] = useState([]);

  let [answers, setAnswers] = useState([]);

  const set = (id, e) => {
    setAnswers([
      ...answers,
      {
        id: id,
        text: e.target.value,
      },
    ]);
  };

  useEffect(() => {
    async function getData() {
      const ref = doc(db, "users", uid);
      const docSnap = await getDoc(ref);

      console.log(docSnap.data());
      console.log(docSnap.data().forms[id]);
    }

    getData();
  }, [id, uid]);

  return (
    <div>
      <Title title="sup" />
      <h1>{`/${uid}/${id}`}</h1>

      {questions.map((question) => (
        <Short
          key={question.id}
          question={question.text}
          onChange={(e) => set(question.id, e)}
        />
      ))}
    </div>
  );
}

export default Form;

// it works
