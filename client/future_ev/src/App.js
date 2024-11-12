import Dashboard from "./redux/admin pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./redux/login/Login";
import Register from "./redux/login/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Home/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App;
