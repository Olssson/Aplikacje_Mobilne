import React from "react";
import { render } from "react-dom";
import App from "./App"; // Import komponentu App
import CustomHeader from "./header";
import Upload from "./upload";
render(
  <App />, // Użycie komponentu App w elemencie renderującym
  <CustomHeader />,
  <Upload />
);
