import logo from "./logo.svg";
import "./App.css";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import MyAccount from "./components/MyAccount";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/myaccount" element={<MyAccount />}></Route>
      </Routes>
    </div>
  );
}

export default App;
