import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { Navigate } from 'react-router-dom';
import {  Routes, Route } from "react-router-dom";
import { Profile } from "./pages/Profile";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />

      </Routes>
    </div>
  );
}
export default App;