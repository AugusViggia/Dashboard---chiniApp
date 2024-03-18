import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./views/Home/Home";
import Sales from "./views/Sales/Sales";
import Clients from "./views/Clients/Clients";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="flex">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/clients" element={<Clients />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
