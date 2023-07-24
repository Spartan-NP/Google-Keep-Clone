import React from "react";
import Footer from "./components/Footer";
import Header from "./Header";
import Body from "./components/Body";
import "./app.css";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
