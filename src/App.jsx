import { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard, PageNotFound } from "./screens";
import Registrations from "./Pages/Registrations";
import Login from "./Pages/Login";
import LogoSpener from "./Pages/LogoSpener";
import Statistics from "./Pages/Statistics";
import Payment from "./Pages/Payment";
import Transactions from "./Pages/Transactions";
import Customer from "./Pages/Customer";
import Messages from "./Pages/Messages";
import Settings from "./Pages/Settings";
import Logout from "./Pages/Logout";
import ProductsComponents from "./components/Products/ProductsComponents";

 function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // ========== adding dark-mode class if the dark mode is set on to the body tag ========= //
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<BaseLayout />}>
          <Route index element ={<Registrations/>}/>
          <Route path="/Login" element={<Login/>} />
          <Route path="/LogoSpener" element={<LogoSpener/>} />
          <Route path="/Statistics" element={<Statistics/>} />
          <Route path="/Payment" element={<Payment/>} />
          <Route path="/Transactions" element={<Transactions/>} />
          <Route path="/Products" element={<ProductsComponents/>} />
          <Route path="/Customer" element={<Customer/>} />
          <Route path="/Messages" element={<Messages/>} />
          <Route path="/Settings" element={<Settings/>} />
          <Route path="/Logout" element={<Logout/>} />
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>

        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button>
      </Router>
    </>
  );
 }

 export default App;
