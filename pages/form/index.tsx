import { Header, Logo, Meta } from "../../components";
import { Short, Heading } from "../../components/form";

import Image from "next/image";

import { useState } from "react";

import { Input } from "@chakra-ui/react";
import { BiPaperPlane } from "react-icons/bi";

import { auth } from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

export default function CreateForm() {
  const [user] = useAuthState(auth);

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

        <div className="min-w-screen flex justify-center">
          <header className="px-6 py-5 w-10/12 m-8 bg-white rounded-full flex flex-row items-center">
            <p className="flex flex-row items-center">
              <Logo />

              <Input
                placeholder="Untitled Form"
                size="xl"
                variant="flushed"
                className="mx-4 text-2xl font-medium"
              />
            </p>
          </header>
        </div>

        <p className="m-4 font-medium text-3xl text-center text-gray-900">
          What will ya create today, {user ? user.displayName : null}?
        </p>

        <div className="w-full grid justify-items-center">
          <button className="flex flex-row justify-center items-center p-3 px-5 rounded-md bg-purple-600 text-white text-xl focus:ring-4 ring-purple-300">
            Send <BiPaperPlane size={25} className="mx-2" />
          </button>

          <Heading
            onHeading={(e: any) => setHeading(e.target.value)}
            onDesc={(e: any) => setDesc(e.target.value)}
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

            <Short onChange={(e: any) => setShort(e.target.value)} />

            {questions.map((q) => (
              <Short onChange={null} key={null} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
