import { Header, Meta } from "../../components";
import { Short, Heading, Title } from "../../components/form";

import { toast, Toaster } from "react-hot-toast";
import { useState } from "react";

import { BiPaperPlane } from "react-icons/bi";
import { Input } from "@chakra-ui/react";

import { auth, db } from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

import { Question, Form } from "../../types/models";

import {
  addDoc,
  collection,
} from "@firebase/firestore";

export default function CreateForm() {
  const [user] = useAuthState(auth);

  const [val, setVal] = useState("");

  const [title, setTitle] = useState("");
  const [heading, setHeading] = useState("");
  const [desc, setDesc] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);

  const addQuestion = () => {
    if (val.trim() !== "") {
      setQuestions([
        ...questions,
        {
          text: val,
          id: questions.length + 1,
        },
      ]);

      setVal("");
      toast.success("Question added");
    } else {
      toast.error("Question field empty!")
    }
  };

  const deleteQuestion = (id: any) => {
    const removeQues = questions.filter((todo) => {
      return todo.id !== id;
    });

    setQuestions(removeQues);
    toast.error("Question deleted");
  };

  const resetInputState = () => {
    setTitle("");
    setHeading("");
    setDesc("");
    setQuestions([]);
  };

  const sendForm = async () => {
    if (user) {
      const areFieldsValid =
        title.trim() !== "" && heading.trim() !== "" && desc.trim() !== "" && questions.length !== 0;

      if (!areFieldsValid) {
        toast.error("Please fill all the fields");
      } else {
        const form: Form = {
          // auto id
          authorId: user.uid,
          title,
          heading,
          desc,
          questions,
        };

        const docRef = await addDoc(collection(db, "forms"), form)

        resetInputState();

        toast.success("Form created successfully");
        console.log(`/form/${docRef.id}`);
      }
    }
  };
  return (
    <>
      <Toaster />
      <Meta title="Formie-Create Form" />

      <div className="min-h-screen min-w-screen bg-grey font-poppins font-medium">
        <Header />

        <Title title={title} setTitle={(e: any) => setTitle(e.target.value)} />

        <p className="m-4 font-medium text-3xl text-center text-gray-900">
          What will ya create today, {user ? user.displayName : null}?
        </p>

        <div className="w-full grid justify-items-center">
          <button
            className="flex flex-row justify-center items-center p-3 px-5 rounded-md bg-purple-600 text-white text-xl focus:ring-4 ring-purple-300"
            onClick={sendForm}
          >
            Send <BiPaperPlane size={25} className="mx-2" />
          </button>

          <Heading
            heading={heading}
            desc={desc}
            setHeading={(e: any) => setHeading(e.target.value)}
            setDesc={(e: any) => setDesc(e.target.value)}
          />

          <div className="m-6 w-6/12 px-8 py-4 bg-white rounded">
            <Input
              variant="flushed"
              placeholder="Question goes here!"
              size="lg"
              onChange={(e: any) => setVal(e.target.value)}
              className="font-medium m-2"
              value={val}
              isRequired
            />

            <div className="w-full flex justify-center ">
              <button
                className="my-2 mx-6 p-3 px-5 bg-purple-600 rounded font-poppins font-medium text-xl text-white focus:ring-4 ring-purple-400 cursor-pointer hover:bg-purple-500 transition-all duration-4"
                onClick={addQuestion}
              >
                Add
              </button>
            </div>
          </div>
          {questions.map((q) => (
            <Short short={q.text} key={q.id} dlt={() => deleteQuestion(q.id)} />
          ))}
        </div>
      </div>
    </>
  );
}
