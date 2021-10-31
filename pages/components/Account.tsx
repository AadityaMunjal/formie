import { auth } from "../../firebase.config"
import { useAuthState } from "react-firebase-hooks/auth"

import Header from "./Header"
import Forms from "./Forms"
import Link from "next/link"

export default function Account() {
  const [user] = useAuthState(auth)

  return (
    <>
      <Header />

      <div>
        <div className="flex flex-row w-screen justify-center items-center">
          {user ? (
            <p className="text-center m-1 text-3xl text-secondary font-semibold">
              {" "}
              Hoi, {user.displayName}{" "}
            </p>
          ) : null}

          <Link href="/components/CreateForm">
            <button className="mx-6 rounded-lg m-4 p-3 px-5 font-medium text-white text-xl focus:ring-4 duration-200 bg-indigo-500">
              Create Form
            </button>
          </Link>
        </div>

        <Forms />
      </div>
    </>
  )
}
