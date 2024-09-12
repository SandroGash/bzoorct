import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <div>Container principale</div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
