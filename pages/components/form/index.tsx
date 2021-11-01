import Header from "../Header";
import Text from "./Text";
import Multiple from "./Multiple";

import Image from "next/image";
import Logo from "../Logo";

import { useState } from "react";

import { Input, Select } from "@chakra-ui/react";
import { MdOutlineImage } from "react-icons/md";

import { auth } from "../../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

export default function CreateForm() {
  const [user] = useAuthState(auth);
  const [val, setVal] = useState('');

  return (
    <div className="min-h-screen min-w-screen bg-grey font-poppins font-medium">
      <Header />
      <div className="min-w-screen flex justify-center">
        <header className="px-6 py-5 w-10/12 m-8 bg-white rounded-full flex flex-row items-center">
          <p className="flex flex-row items-center">
            <Logo />

            <span className="mx-4 text-2xl font-poppins text-gray-900">
              {" "}
              Untitled Form
            </span>
          </p>
        </header>
      </div>
      <p className="m-4 font-medium text-3xl text-center text-gray-900">
        What will ya create today, {user ? user.displayName : null}?
      </p>

      <div className="w-full grid justify-items-center">
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

        <div className="m-6 w-6/12 px-8 py-6 bg-white rounded">
          <div className="flex flex-row items-center">
            <Select onChange={(e) => setVal(e.target.value)}>
              <option value="short" isDefault>
                {" "}
                Short Answer{" "}
              </option>
              <option value="mcq">Mutiple Choice</option>
            </Select>

            <button className="h-10 w-12 flex justify-center items-center rounded p-1 mx-4 bg-purple-600 focus:ring-2">
              <MdOutlineImage className="text-white text-2xl" />
            </button>
          </div>

          {val == "mcq" ? <Multiple /> : <Text />}
        </div>
      </div>
    </div>
  );
}
