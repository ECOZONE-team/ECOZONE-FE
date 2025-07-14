import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Pricing from "./pages/Pricing";
import Purchase from "./pages/Purchase";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/purchase" element={<Purchase />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
