import logo from "./logo.svg";
import "./App.css";
import "./globals.css";
import Login from "./pages/login/login";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/" element={<Login />} />
      </Routes>
      {/* <Login /> */}
      <Toaster />
    </div>
  );
}

export default App;
