import { Component, React } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inscrit from "./components/Inscrit";
import Inscrit1 from "./components/Inscrit1";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Home from "./components/Home";
import Page1 from "./pages/fiche1-page/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Fiche1 from "./components/Fiche1";
import Fiche2 from "./components/Fiche2";
import Fiche3 from "./components/Fiche3";
import { ChakraProvider } from "@chakra-ui/react";
import Kousousiyat from "./components/Kousousiyat";
import Question from "./components/Question";

class App extends Component {
  render() {
    return (
      <ChakraProvider>
        <BrowserRouter>
          <Navbar />
          
          
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Page1" element={<Page1/>} />
            <Route exact path="/page2" element={<Page2 />} />
            <Route exact path="/page3" element={<Page3 />} />
            <Route exact path="/inscrit" element={<Inscrit />} />
            <Route exact path="/fiche1" element={<Fiche1 />} />
            <Route exact path="/fiche2" element={<Fiche2 />} />
            <Route exact path="/fiche3" element={<Fiche3 />} />
            <Route exact path="/inscrit1" element={<Inscrit1 />} />
            <Route exact path="/kousousiyat" element={<Kousousiyat />} />
            <Route exact path="/Question" element={<Question/>} />


          </Routes>
          <Navbar2/>
        </BrowserRouter>
       
      </ChakraProvider>
    );
  }
}
export default App;
