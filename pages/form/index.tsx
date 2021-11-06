import { Header, Logo, Meta } from "../../components";
import Short from "../../components/form/Short";

import Image from "next/image";

import { useState } from "react";

import { Input } from "@chakra-ui/react";
import { MdOutlineImage } from "react-icons/md";
import { BiPaperPlane } from "react-icons/bi";

import { auth } from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

export default function CreateForm() {
  const [user] = useAuthState(auth);

  let [short, setShort] = useState("");

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
          <div className="m-6 w-6/12 px-8 py-6 bg-white rounded">
            <Input
              placeholder="Heading goes brr..."
              size="xl"
              className="m-2 font-poppins font-medium text-3xl"
              variant="flushed"
            />

            <Input
              placeholder="Description goes brr..."
              className="m-2 font-poppins font-medium"
              variant="flushed"
              size="lg"
            />
          </div>

          <button className="font-medium cursor-pointer px-4 py-2 h-full bg-white rounded mx-2 shadow hover:bg-white-700 focus:ring-4">
            Add Question
          </button>

          <div className="m-6 w-6/12 px-8 py-6 bg-white rounded">
            <div className="w-full flex justify-center">
              <button className="my-2 mb-4 px-6 py-2 rounded font-mdeium text-white bg-red-600 focus:ring-2 ring-red-300">
                Delete
              </button>
            </div>

            <div className="flex flex-row items-center">
              <button className="h-10 w-12 flex justify-center items-center rounded p-1 mx-4 bg-purple-600 focus:ring-2">
                <MdOutlineImage className="text-white text-2xl" />
              </button>
            </div>

            <Short onChange={(e: any) => setShort(e.target.value)} />
          </div>
        </div>
      </div>
    </>
  );
}
