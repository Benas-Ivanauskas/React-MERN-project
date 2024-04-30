import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Houses from "./pages/Houses";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Details from "./pages/Details";
import Create from "./pages/Create";
import { useAuthContext } from "./hooks/useAuthContext";
import Error from "./pages/Error";
import Orders from "./pages/Orders";
import About from "./pages/About";
import Reservations from './pages/Reservations'





function App() {
  const {user} = useAuthContext()
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="home-houses/details/:id" element={user ? <Details />: ""} />
          <Route path="/rezervacijos" element={<Reservations />} />
          <Route path="create-form" element={user && user.isAdmin ? <Create/> : ""}/>
          <Route path="home-houses" element={user ? <Houses />: <Login/>} />
          <Route path="orders" element={user && user.isAdmin ? <Orders/> : ""}/>
          <Route path="about" element={<About/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
