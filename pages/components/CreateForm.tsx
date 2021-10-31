import Header from "./Header";

import {
  Stack,
  Checkbox,
  Input,
  FormControl,
  FormLabel,
  Select,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { MdOutlineImage } from "react-icons/md";

import { auth } from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

export default function CreateForm() {
  const [user] = useAuthState(auth);

  return (
    <div className="min-h-screen min-w-screen bg-grey font-poppins font-medium">
      <Header />
      <div className="min-w-screen flex justify-center">
        <header className="px-6 py-5 w-10/12 m-8 bg-white rounded-full flex flex-row items-center">
          <p className="flex flex-row items-center">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3.26765" cy="2.30769" r="2.30769" fill="#4642FC" />
              <circle cx="10.96" cy="2.30769" r="2.30769" fill="#4642FC" />
              <circle cx="18.6523" cy="2.30769" r="2.30769" fill="#4642FC" />
              <circle cx="18.6523" cy="10" r="2.30769" fill="#4642FC" />
              <circle cx="10.96" cy="10" r="2.30769" fill="#4642FC" />
              <circle cx="3.26765" cy="10" r="2.30769" fill="#4642FC" />
              <circle cx="3.26765" cy="17.6923" r="2.30769" fill="#4642FC" />
              <circle cx="10.96" cy="17.6923" r="2.30769" fill="#4642FC" />
              <circle cx="18.6523" cy="17.6923" r="2.30769" fill="#4642FC" />
            </svg>

            <span className="mx-4 text-2xl font-poppins text-gray-900">
              {" "}
              Untitled Form
            </span>
          </p>
        </header>
      </div>
      <p className="m-4 font-medium text-3xl text-center text-gray-900">
        {" "}
        What will ya create today, {user ? user.displayName : null}?{" "}
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
            <Select placeholder="Short Answer">
              <option value="option1">Mutiple Choice</option>
              <option value="option2">Checkbox</option>
              <option value="option3">Date</option>
            </Select>

            <button className="h-10 w-12 flex justify-center items-center rounded p-1 mx-4 bg-purple-600 focus:ring-2">
              <MdOutlineImage className="text-white text-2xl" />
            </button>
          </div>

          <FormControl isRequired>
            <Input
              placeholder="Question goes brr..."
              className="font-poppins font-medium m-2"
              size="lg"
              variant="flushed"
            />
          </FormControl>

          <RadioGroup className="flex flex-col my-4 text-xl">
            <FormLabel> Who is ur fav Uwu? </FormLabel>
            <Radio value="1">Harry Potter</Radio>
            <Radio value="2">Ronald</Radio>
            <Radio value="3">Nope</Radio>
          </RadioGroup>

          <div className="flex flex-col my-4 text-xl">
            <FormLabel> Select all that apply </FormLabel>
            <Checkbox>Checkbox</Checkbox>
            <Checkbox>Checkbox</Checkbox>
          </div>
        </div>
      </div>
    </div>
  );
}
