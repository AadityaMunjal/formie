import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import Account from "../Account";

import { auth } from "../../../firebase.config";
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";

import Header from "../Header";

export default function Socials() {
  const [user] = useAuthState(auth);

  const signIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider);
  };

  const signInWithGithub = () => {
    const provider = new GithubAuthProvider();

    signInWithPopup(auth, provider);
  };

  return (
    <>
      {user ? null : <Header />}
      {user ? (
        <Account />
      ) : (
        <div className="font-poppins h-screen w-screen flex flex-col justify-center items-center">
          <div className="py-10 px-4 shadow-xl rounded">
            <button
              className="m-2 p-3 rounded shadow flex flex-row bg-black text-white font-medium items-center justify-center hover:bg-white hover:text-black hover:shadow-xl"
              onClick={signIn}
            >
              <FcGoogle size="25" className="mx-2" /> Sign in with Google
            </button>

            <button
              className="m-2 p-3 rounded shadow flex flex-row bg-black text-white font-medium items-center justify-center hover:bg-white hover:text-black hover:shadow-xl"
              onClick={signInWithGithub}
            >
              <AiFillGithub size="25" className="mx-2" /> Sign in with GitHub
            </button>
          </div>
        </div>
      )}
    </>
  );
}
