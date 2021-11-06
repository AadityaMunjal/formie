import { Socials } from "../../components/auth";

import Account from "../../components/Account";
import Meta from "../../components/Meta";
import Header from "../../components/Header";

import { auth } from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Auth() {
  let [user] = useAuthState(auth);

  return (
    <>
      {user ? null : <Header />}
      <Meta title="Formie-Sign-In/Sign-Up" />
      {user ? <Account /> : <Socials />}
    </>
  );
}
