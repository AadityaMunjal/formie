import Home from "./Home";

import { Meta } from "../components";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Meta />
      <Toaster position="top-center" />
      <Home />
    </>
  );
}
