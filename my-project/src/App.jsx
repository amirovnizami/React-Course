import Login from "./login/Login"
import Register from "./register/Register"
import Homepage from "./homepage/Homepage"
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App