import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import AuthProvider from "./components/context/AuthProvider";

import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import Login from "./components/logein/Login";
import Nomatch from "./components/noMatch/Nomatch";
import PrivateRoute from "./components/privateroute/PrivateRoute";
import Services from "./components/services/Services";
import Signup from "./components/Signup/Signup";
import SingleService from "./components/singleService/SingleService";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/home" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<Signup />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/about" element={<About />} />

            <Route path="/services" element={<Services />} />

            <Route path="*" element={<Nomatch></Nomatch>} />

            <Route
              path="/singleService/:userId"
              element={
                <PrivateRoute>
                  <SingleService></SingleService>
                </PrivateRoute>
              }
            />
          </Routes>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
