import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import Coins from "./components/Coins";
import Coinsdetail from "./components/Coinsdetail";
import Exchange from "./components/Exchange";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/coins" element={<Coins/>}/>
          <Route path="/coin/:id" element={<Coinsdetail/>}/>
          <Route path="/exchange" element={<Exchange/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
