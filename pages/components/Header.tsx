import { auth } from "../../firebase.config"
import { useAuthState } from "react-firebase-hooks/auth"

import { Stack, Switch } from "@chakra-ui/react"

import SignOut from "./auth/Sign-Out"

export default function Header() {
  const [user] = useAuthState(auth)

  console.log(user)
  const Li = props => {
    return (
      <a href={props.url} className="cursor-pointer m-2 ">
        <li>{props.text}</li>
      </a>
    )
  }

  return (
    <header className="w-screen bg-white flex flex-row justify-between items-center p-1 rounded shadow">
      <ul className="text-gray-900 font-medium flex flex-row items-center text-xl">
        <Li text="Home" url="/" />

        <Li text="Account" url="/components/Account" />
      </ul>
      <p className="flex flex-row items-center">
        {user ? (
          <a href="/components/Account">
            <img
              src={user.photoURL}
              className="w-14 h-14 rounded-full cursor-pointer hover:shadow-xl"
            />{" "}
          </a>
        ) : null}

        {user ? <SignOut /> : null}

        <Stack align="center" direction="row">
          <Switch size="lg" className="mx-4" colorScheme="blackAlpha" />
        </Stack>
      </p>
    </header>
  )
}
