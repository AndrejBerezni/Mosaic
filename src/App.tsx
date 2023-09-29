import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import UserPage from "./components/UserPage/UserPage";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./reducers/combineReducers";
import { signInAction, signOutAction } from "./actions/signInActions";
import { auth } from "./firebase-config";

function App() {
  const isSignedIn = useSelector((state: RootState) => state.signedIn.signedIn);
  const dispatch = useDispatch();

  //Handle keeping user signed in on page refresh
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(signInAction(user.uid));
      } else {
        dispatch(signOutAction());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);
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
