import React from "react";
import { HashLoader } from "react-spinners";
import { LoaderWrapper } from "./styles"; // Import the LoaderWrapper

const Loader = () => {
  return (
    <LoaderWrapper id="loader">
      <HashLoader color="#2e86c1" loading size={60} />
    </LoaderWrapper>
  );
};

export default Loader;
