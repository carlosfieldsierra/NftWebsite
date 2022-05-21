import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Callback from "./pages/Callback";
import Error from "./pages/Error";
// import Qualified from "./components/Qualified";
import Reward from './components/components/design/design.component';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
       
            <Route path="callback" element={<Callback />} />
    
          
          <Route path="error" element={<Error/>} />
          {/* <Route path="qualified" elements={<Qualified />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
