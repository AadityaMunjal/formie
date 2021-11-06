import { Header, Meta } from "../../components";
import { Short, Heading, Title } from "../../components/form";

import { useState } from "react";

import { BiPaperPlane } from "react-icons/bi";

import { auth } from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

export default function CreateForm() {
  const [user] = useAuthState(auth);

  let [title, setTitle] = useState("");
  let [heading, setHeading] = useState("");
  let [desc, setDesc] = useState("");
  let [short, setShort] = useState("");
  let [questions, setQuestions] = useState(["hoi", "wot"]);

  const add = () => {
    setQuestions([...questions, ""]);
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

          <button
            className="font-medium cursor-pointer px-4 py-2 h-full bg-white rounded mx-2 shadow hover:bg-white-700 focus:ring-4"
            onClick={add}
          >
            Add Question
          </button>

          <div className="m-6 w-6/12 px-8 py-6 bg-white rounded">
            <div className="w-full flex justify-center">
              <button className="my-2 mb-4 px-6 py-2 rounded font-mdeium text-white bg-red-600 focus:ring-2 ring-red-300">
                Delete
              </button>
            </div>

            <Short
              setShort={(e: any) => setShort(e.target.value)}
              short={short}
            />

            {/* {questions.map((q) => (
              <Short onChange={null} key={null} />
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
}
