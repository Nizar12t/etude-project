import { React, Component } from "react";

import "./Navbar.css";

import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { signOut } from "firebase/auth";

// const Navbar = () => {
//   const [user] = useAuthState(auth);
//   let location = useLocation();
//   console.log(location.pathname)
//   return location.pathname !== "etape1" ?
// };

function Navbar() {
  const [user] = useAuthState(auth);
  let location = useLocation();

  return location.pathname !== "/etape1" ? (
    <div>
      <nav>
        {user && <Button onClick={() => signOut(auth)}>Logout</Button>}

        {!user && (
          <NavLink
            to={"/inscrit1"}
            className={({ isActive }) =>
              isActive ? "jj active " : "jj  items "
            }
          >
            تسجيل الدخول
          </NavLink>
        )}
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "jj active " : " jj items ")}
        >
          الصفحة الرئيسية
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "jj active" : "jj items ")}
          to={"/page3"}
        >
          مقالات
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "jj active" : "jj items ")}
          to={"/page2"}
        >
          الخدمات
        </NavLink>

        {/* <NavLink
          className={({ isActive }) => (isActive ? "jj active" : "jj items ")}
          to={"/page1"}
        >
          اللغة
        </NavLink> */}
      </nav>
    </div>
  ) : null;
}

export default Navbar;
