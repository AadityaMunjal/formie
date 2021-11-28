import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import { auth } from "../../firebase.config";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  GithubAuthProvider,
} from "firebase/auth";

export default function Socials() {
  const signIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithRedirect(auth, provider);
  };

  const signInWithGithub = () => {
    const provider = new GithubAuthProvider();

    signInWithRedirect(auth, provider);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen font-poppins">
        <div className="px-4 py-10 rounded shadow-xl">
          <button
            className="flex flex-row items-center justify-center p-3 m-2 font-medium text-white bg-black rounded shadow hover:bg-white hover:text-black hover:shadow-xl"
            onClick={signIn}
          >
            <FcGoogle size="25" className="mx-2" /> Sign in with Google
          </button>

          <button
            className="flex flex-row items-center justify-center p-3 m-2 font-medium text-white bg-black rounded shadow hover:bg-white hover:text-black hover:shadow-xl"
            onClick={signInWithGithub}
          >
            <AiFillGithub size="25" className="mx-2" /> Sign in with GitHub
          </button>
        </div>
      </div>
    </>
  );
}
