import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { db } from "../../firebase.config";
import { getDoc, doc, DocumentData } from "firebase/firestore";

import { Title, Short } from "../../components/client";

function Form() {
  const router = useRouter();
  const { id: formId } = router.query;

  const [form, setForm] = useState<DocumentData>(null)
  const [answers, setAnswers] = useState([]);

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
      if (typeof formId !== "string") return;
      const ref = doc(db, "forms", formId)
      const docSnap = await getDoc(ref);

      setForm(docSnap.data())
    }

    getData();
  }, [formId]);

  return (
    <div>
      <Title title={form?.title} />
      <h1>{`/${formId}`}</h1>

      {form?.questions.map((question) => (
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
