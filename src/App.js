import { useEffect,  } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
// import { UserContext } from "./Context/UserContext";
import MyRoute from "./Router/MyRoute";



function App() {
  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <Header />
      <MyRoute />
      <Footer />
    </div>
  ); 
}

export default App;
