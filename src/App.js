import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TopNav from "./components/TopNav/TopNav";
import SideNav from "./components/SideNav/SideNav";
import ProductDetails from "./components/Products/Products";
import MainComponent from "./components/MainComponent/MainComponent";

// const CartPage = () => {
//   return <div>Your cart page</div>;
// };

// const HomePage = () => {
//   return <div>Home page</div>;
// };

const App = () => {
  // const userName = ""; // or fetched user name
  // const cartItemCount = 3; // example cart item count

  return (
    // <Router>
    //   <TopNav userName={userName} cartItemCount={cartItemCount} />
    //   <Routes>
    //     <Route path="/cart" element={<TopNav />} />
    //     <Route path="/cart" element={<HomePage />} />
    //     <Route path="/cart" element={<TopNav />} />
    //     <Route path="/cart" element={<TopNav />} />
    //     {/* <Route path="/" element={<HomePage />} /> */}
    //   </Routes>
    // </Router>
    <>
      <TopNav />
      <MainComponent />
    </>
  );
};

export default App;
