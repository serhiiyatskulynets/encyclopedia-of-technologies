import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Technologies from "./pages/Technologies/Technologies";
import Notes from "./pages/Notes/Notes";
import Login from "./pages/Login/Login";
import TechDetails from "./pages/TechnologiesDetails/TechDetails";

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/technologiesdetailes/:slug" element={<TechDetails />} /> 
        </Routes>
      </BrowserRouter>
    );
}

export default App;