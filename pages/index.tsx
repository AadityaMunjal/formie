import Home from "./Home";

import { Meta, Header } from "../components";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.config";

export default function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      <Meta />
      <Header />
      <Home />
    </>
  );
}
