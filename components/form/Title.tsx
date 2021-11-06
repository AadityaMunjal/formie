import { Logo } from "..";
import { Input } from "@chakra-ui/react";

export default function Title({ setTitle, title }) {
  return (
    <>
      <div className="min-w-screen flex justify-center">
        <header className="px-6 py-5 w-10/12 m-8 bg-white rounded-full flex flex-row items-center">
          <p className="flex flex-row items-center">
            <Logo />

            <Input
              placeholder="Untitled Form"
              size="xl"
              variant="flushed"
              className="mx-4 text-2xl font-medium"
              value={title}
              onChange={setTitle}
            />
          </p>
        </header>
      </div>
    </>
  );
}
