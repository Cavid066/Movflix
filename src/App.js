import { useEffect, useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { UserContext } from "./Context/UserContext";
import Home from "./page/Home";



function App() {
  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
