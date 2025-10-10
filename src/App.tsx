import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import ScrollToTop from "./components/ScrollToTop";
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
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Signup from "./pages/Signup";
import Fail from "./pages/Fail";
import Success from "./pages/Success";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
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
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/fail" element={<Fail />} />
          <Route path="/success" element={<Success />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
