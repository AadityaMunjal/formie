import { Header, Meta } from "../../components";
import { Short, Heading, Title } from "../../components/form";

import { toast, Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";

import { BiPaperPlane } from "react-icons/bi";
import { Input } from "@chakra-ui/react";

import { auth, db } from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

import {
  setDoc,
  doc,
  updateDoc,
  arrayUnion,
  serverTimestamp,
  getDoc,
} from "@firebase/firestore";

export default function CreateForm() {
  const [user] = useAuthState(auth);

  // storing user's metadata
  useEffect(() => {
    async function addUser() {
      await setDoc(
        doc(db, "users", user.uid),
        {
          name: user.displayName,
          pfp: user.photoURL,
          uid: user.uid,
        },
        { merge: true }
      );
    }

    addUser();
  }, [user]);

  let [val, setVal] = useState("");

  let [title, setTitle] = useState("");
  let [heading, setHeading] = useState("");
  let [desc, setDesc] = useState("");
  let [questions, setQuestions] = useState([]);

  let [data, setData] = useState<any>();

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
    toast.success("Question added");
  };

  const submitOnEnter = (e: any) => {
    if (e.key === "Enter") {
      add();
    }
  };

  const dlt = (id: any) => {
    const removeQues = questions.filter((todo) => {
      return todo.id !== id;
    });

    setQuestions(removeQues);
    toast.error("Question deleted");
  };

  const send = async () => {
    if (user) {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      docSnap ? setData(docSnap.data().forms) : setData(null);

      if (
        title === "" ||
        heading === "" ||
        desc === "" ||
        questions.length === 0
      ) {
        console.log("empty");
        toast.error("Please fill all the fields");
      } else {
        const form = {
          id: data ? data.length() + 1 : 1,
          title: title,
          heading: heading,
          desc: desc,
          questions: questions,
        };

        if (docSnap) {
          await updateDoc(doc(db, "users", user.uid), {
            forms: arrayUnion(form),
          });
        } else {
          await setDoc(doc(db, "users", user.uid), {
            forms: arrayUnion(form),
          });
        }
        setTitle("");
        setHeading("");
        setDesc("");
        setQuestions([]);

        toast.success("Form created successfully");

        console.log(`/form/${user.uid}/${form.id}`);
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
            onClick={send}
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
              onKeyDown={(e) => submitOnEnter(e)}
            />

            <div className="w-full flex justify-center ">
              <button
                className="my-2 mx-6 p-3 px-5 bg-purple-600 rounded font-poppins font-medium text-xl text-white focus:ring-4 ring-purple-400 cursor-pointer hover:bg-purple-500 transition-all duration-4"
                onClick={add}
              >
                Add
              </button>
            </div>
          </div>
          {questions.map((q) => (
            <Short short={q.text} key={q.id} dlt={() => dlt(q.id)} />
          ))}
        </div>
      </div>
    </>
  );
}
