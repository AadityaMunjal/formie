import { useRouter } from "next/router";

import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../../../firebase.config";

import { Title, Short } from "../../../components/client";
import { Heading } from "../../../components/form";

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
      
      docSnap ? console.log(docSnap.data()) : console.log("no data");

      console.log(docSnap.data().forms[id]);
      let form = docSnap.data().forms[id]

      setTitle(form.title)
      setQuestions(form.questions)
    }

    getData();
  }, [id, uid]);

  return (
    <div>
      <Title title="sup" />
      
      <div className="m-6 w-6/12 px-8 py-6 bg-white rounded">
      <p className="text-3xl font-poppins font-medium text-gray-700">
      {title}
      </p>
      </div>

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
