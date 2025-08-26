import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Pricing from "./pages/Pricing";
import Purchase from "./pages/Purchase";
import Login from "./pages/Login";
import Setpw from "./pages/SetPW";
import Searchpw from "./pages/SearchPW";
import CustomerService from "./pages/CustomerService";
import Solution from "./pages/Solution";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setpw" element={<Setpw />} />
        <Route path="/searchpw" element={<Searchpw />} />
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/solution" element={<Solution />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
