import { BsArrowRightShort } from "react-icons/bs";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full p-2 bg-primary font-poppins">
        <div className="m-8 h-8 w-8 rounded-full bg-yellow"></div>
        <p className="m-4 sm:m-6 md:m-10 xl:m-16">
          <p className="text-6xl font-semibold text-white font-poppins">
            Formiee
          </p>

          <p className="text-white font-medium mt-4 text-3xl">
            Your go-to solution to make awesome forms!!
          </p>

          <Link href="/components/auth/Socials">
            <button className="flex flex-row justify-center items-center m-6 bg-white p-2 px-2 rounded-lg shadow font-poppins font-medium text-xl sm:p-3 sm:px-6 hover:shadow-xl">
              Sign Up <BsArrowRightShort size="30" />
            </button>
          </Link>

          <div className="mt-16 h-44 w-44 p-8 rounded-full circle"></div>
        </p>
      </div>
    </>
  );
}
