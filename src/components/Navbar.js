import { React, Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav  >
       
         <NavLink
          to={"/inscrit1"}
          className={({ isActive }) => (isActive ? "jj active " : "jj  items ")}
          
        >
          تسجيل الدخول
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "jj active " : " jj items ")}
        >
          الصفحة الرئيسية
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "jj active" : "jj items ")}
          to={"/page1"}
          
        >
          مقالات
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "jj active" : "jj items ")}
          to={"/page2"}
         
        >
          الخدمات
        </NavLink>
        
        <NavLink
          className={({ isActive }) => (isActive ? "jj active" : "jj items ")}
          to={"/page3"}
          
        >
          اللغة
        </NavLink>
        
      </nav>
    );
  }
}
