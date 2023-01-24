import { Link,NavLink } from "react-router-dom";
import logo from "./Logo.png";
import "../App.css";

export const Header = () => {
  return (
    <div className="header">
      <NavLink style={{textDecoration:"none", fontSize:"25px"}} to="/">
         Movies
      </NavLink>
      <img className="logo" src={logo} alt="0" />
      <NavLink style={{textDecoration:"none", fontSize:"25px"}} to="/add">
        Add
      </NavLink>
    </div>
  );
};
