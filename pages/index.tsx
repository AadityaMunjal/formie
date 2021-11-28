import Home from "./Home";
import type { NextPage } from "next";

import { Meta } from "../components";
import { Toaster } from "react-hot-toast";

const App: NextPage = () => {
  return (
    <>
      <Meta />
      <Toaster position="top-center" />
      <Home />
    </>
  );
};

export default App;
