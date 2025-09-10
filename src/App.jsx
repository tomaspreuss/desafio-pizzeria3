import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Home from "./components/Home";
import Cart from "./components/Cart";
// import LoginPage from "./components/LoginPage";
// import RegisterPage from "./components/RegisterPage";

export default function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Cart />
      <Footer />
    </div>
  );
}