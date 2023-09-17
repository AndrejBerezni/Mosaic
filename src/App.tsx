import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import UserPage from "./components/UserPage/UserPage";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./reducers/combineReducers";

function App() {
  const isSignedIn = useSelector((state: RootState) => state.signedIn.signedIn);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {isSignedIn ? (
          <Route path="/portfolio" element={<UserPage />} />
        ) : (
          <Route path="/portfolio" element={<Home />} />
        )}

        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
