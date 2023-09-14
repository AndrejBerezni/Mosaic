import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import UserPage from "./components/UserPage/UserPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<UserPage />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
