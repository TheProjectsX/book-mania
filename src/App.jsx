import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-work-sans max-w-[1150px] mx-auto px-5">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
