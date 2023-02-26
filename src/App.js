import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { style } from "@mui/system";

const App = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <CreateNote />
        <Footer className="footer" />
      </div>
    </>
  );
};

export default App;
