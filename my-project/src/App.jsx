import Login from "./login/Login"
import Register from "./register/Register"
import Homepage from "./homepage/Homepage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStore } from "zustand";
import Store from "./common/Store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { accessToken, theme } = useStore(Store)
    return (

      <div className={`h-full min-h-screen w-full ${theme === "light" ? "bg-white" : "bg-zinc-500"} transition duration-300 ease-in-out`}>
        <BrowserRouter>
          <Routes>
            {accessToken && <Route path="/" >
              <Route index element={<Homepage />} />
            </Route>}
  
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
  
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    )
}

export default App