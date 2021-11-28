import type { NextPage } from "next";
import type { answers, questions } from "../../../types/form";
import { useRouter } from "next/router";

import { getDoc, doc } from "firebase/firestore";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { db } from "../../../firebase.config";

import { Title, Short } from "../../../components/client";
import { Heading } from "../../../components/form";

function Form() {
  // const router = useRouter();
  // let { uid, id } = router.query;

  let [title, setTitle] = useState<string>();
  let [heading, setHeading] = useState<string>();
  let [desc, setDesc] = useState<string>();
  let [questions, setQuestions] = useState<questions[]>();

  let [answers, setAnswers] = useState<answers[]>();
  console.log(answers);

  const set = (id: Number, e: any) => {
    answers.map((answer) => {
      if (answer.id === id) {
        answer.val = e.target.value;
      }
    });
  };

  // useEffect(() => {
  //   async function getData() {
  //     if (uid && id) {
  //       const ref = doc(db, "users", uid as string);
  //       const docSnap = await getDoc(ref);

  //       // docSnap ? console.log(docSnap.data()) : console.log("no data");
  //       let form = docSnap.data().forms[id as string];

  //       setTitle(form.title);
  //       setQuestions(form.questions);

  //       questions.map((q) => {
  //         setAnswers([
  //           ...answers,
  //           {
  //             id: q.id,
  //             val: "",
  //           },
  //         ]);
  //       });
  //     }
  //   }
  //   getData();
  // }, [id, uid, answers, questions]);

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
          onChange={(e: ChangeEvent) => set(question.id, e)}
        />
      ))}
    </div>
  );
}

// export async function getStaticProps() {
//   const ref = doc(db, "users", uid as string);
//   const docSnap = await getDoc(ref);

//   // docSnap ? console.log(docSnap.data()) : console.log("no data");
//   let form = docSnap.data().forms[id as string];

//   return {
//     props: {
//       form,
//     },
//   };
// }

export default Form;

// it works
