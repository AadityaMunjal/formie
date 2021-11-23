import { auth, db } from "../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

import { Header, Meta } from ".";
import Link from "next/link";
import { Socials } from "./auth";

import { useEffect, useState } from "react";
import { getDoc, doc } from "@firebase/firestore";

export default function Dashboard() {
  let [data, setData] = useState<any>();
  console.log(data);

  const [user] = useAuthState(auth);

  // useEffect(() => {
  //   async function fetchData() {
  //     if (user) {
  //       const docRef = doc(db, "users", user.uid);
  //       const docSnap = await getDoc(docRef);

  //       docSnap ? setData(docSnap.data().forms) : setData(null);
  //     }
  //   }

  //   fetchData();
  // }, [user]);
  return (
    <>
      <Meta title="Formie-Account" />
      {user ? <Header /> : null}

      {user ? (
        <div>
          <div className="flex flex-row w-screen justify-center items-center">
            {user ? (
              <p className="text-center m-1 text-3xl text-secondary font-semibold">
                {" "}
                Hoi, {user.displayName}{" "}
              </p>
            ) : null}

            <Link href="/form" passHref>
              <button className="mx-6 rounded-lg m-4 p-3 px-5 font-medium text-white text-xl focus:ring-4 duration-200 bg-indigo-500">
                Create Form
              </button>
            </Link>
          </div>

          <div className="h-screen w-screen flex flex-row">
            <button className="mx-6 w-48 h-44 rounded-lg m-4 p-3 px-5 font-medium bg-green-500 text-white text-xl focus:ring-8 duration-200 flex justify-center items-center focus:ring-purple-300">
              Form 1
            </button>

            <button className="mx-6 w-48 h-44 rounded-lg m-4 p-3 px-5 font-medium bg-green-500 text-white text-xl focus:ring-8 duration-200 flex justify-center items-center focus:ring-purple-300">
              Form 2
            </button>
          </div>

          <div className="flex flex-row w-screen justify-center items-center">
            {/* {
             data.map(form=>(
               <p key={form.title}>{form.title}</p>
             ))
           } */}
          </div>
        </div>
      ) : (
        <Socials />
      )}
    </>
  );
}
