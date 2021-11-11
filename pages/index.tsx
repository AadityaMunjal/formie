import Home from "./Home";

import { Meta, Header } from "../components";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Meta />
      <Header />
      <Toaster position="top-center" />
      <Home />
    </>
  );
}
