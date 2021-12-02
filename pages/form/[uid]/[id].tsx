import { useRouter } from "next/router";

import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../../../firebase.config";

import { Title, Short } from "../../../components/client";
import type { question, answer } from '../../../types/index'

function Form() {
  const router = useRouter();
  let { uid, id } = router.query;

  let [title, setTitle] = useState("");
  let [heading, setHeading] = useState();
  let [desc, setDesc] = useState("");
  let [questions, setQuestions] = useState<question []>();

  let [answers, setAnswers] = useState<answer []>();

  const set = (id, e) => {
    setAnswers([
      ...answers,
      {
        id: id,
        val: e.target.value,
      },
    ]);
  };
 console.log(questions);
 
  useEffect(() => {
    async function getData() {
      const ref = doc(db, "users", uid as string);
      const docSnap = await getDoc(ref);

      setQuestions(docSnap.data().forms[id as string].questions)
    }

    getData();
  }, [id, uid]);

  return (
    <div>
      <Title title="sup" />
      <h1>{`/${uid}/${id}`}</h1>

      {questions ? questions.map((question) => (
        <Short
          key={question.id}
          question={question.text}
          onChange={(e) => set(question.id, e)}
        />
      )) : null}
    </div>
  );
}

export default Form;

// it works
