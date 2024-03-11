import React from "react";
import Header from "./component/Header";
import MainContent from "./component/MainContent";
import Footer from "./component/Footer";
import "./component/styles.css";

function App() {
  return (
    <div id="main">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
export default App;
