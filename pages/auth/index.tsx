import React, { useEffect } from "react";
import { Meta } from "../../components";

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import { useRouter } from "next/router";
import { auth, db } from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  GithubAuthProvider,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function Auth() {
  let [user] = useAuthState(auth);

  const router = useRouter();

  const signIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithRedirect(auth, provider)
  };

  const signInWithGithub = () => {
    const provider = new GithubAuthProvider();

    signInWithRedirect(auth, provider)
  };

  const storeUser = async () => {
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

  useEffect(() => {
    if (user) {
      storeUser().then(() => {
        router.push("/dashboard")
      })
    }
  }, [user])

  return (
    <>
      <Meta title="Formie-Sign-In/Sign-Up" />
      {user ? (
        "Loading..."
      ) :
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
      }
    </>
  );
}
