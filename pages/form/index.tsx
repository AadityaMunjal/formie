import { Header, Meta } from "../../components";
import { Short, Heading, Title } from "../../components/form";

import { useState } from "react";

import { BiPaperPlane } from "react-icons/bi";
import { Input } from "@chakra-ui/react";

import { auth } from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

export default function CreateForm() {
  const [user] = useAuthState(auth);

  let [val, setVal] = useState("");

  let [title, setTitle] = useState("");
  let [heading, setHeading] = useState("");
  let [desc, setDesc] = useState("");
  let [questions, setQuestions] = useState([]);

  const add = () => {
    val === ""
      ? null
      : setQuestions([
          ...questions,
          {
            text: val,
            id: questions.length + 1,
          },
        ]);

    setVal("");
  };

  const dlt = (id: any) => {
    const removeQues = questions.filter((todo) => {
      return todo.id !== id;
    });

    setQuestions(removeQues);
  };

  return (
    <>
      <Meta title="Formie-Create Form" />

      <div className="min-h-screen min-w-screen bg-grey font-poppins font-medium">
        <Header />

        <Title title={title} setTitle={(e: any) => setTitle(e.target.value)} />

        <p className="m-4 font-medium text-3xl text-center text-gray-900">
          What will ya create today, {user ? user.displayName : null}?
        </p>

        <div className="w-full grid justify-items-center">
          <button className="flex flex-row justify-center items-center p-3 px-5 rounded-md bg-purple-600 text-white text-xl focus:ring-4 ring-purple-300">
            Send <BiPaperPlane size={25} className="mx-2" />
          </button>

          <Heading
            heading={heading}
            desc={desc}
            setHeading={(e: any) => setHeading(e.target.value)}
            setDesc={(e: any) => setDesc(e.target.value)}
          />

          <div className="m-6 w-6/12 px-8 py-6 bg-white rounded">
            <Input
              variant="flushed"
              placeholder="Question goes here!"
              size="lg"
              onChange={(e: any) => setVal(e.target.value)}
              className="font-medium m-2"
            />

            <div className="w-full flex justify-center ">
              <button
                className="my-2 mx-6 p-3 px-5 bg-purple-600 rounded font-poppins font-medium text-xl text-white focus:ring-4 ring-purple-400 cursor-pointer hover:bg-purple-500 transition-all duration-4"
                onClick={add}
              >
                Add
              </button>
            </div>

            {questions.map((q) => (
              <Short short={q.text} key={null} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
