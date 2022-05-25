import React, { useState } from "react";
import "./inscrit.css";
import F from "../image/f.png";
import FF from "../image/ff.png";
import FFF from "../image/fff.png";
import { useNavigate } from "react-router";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Inscrit1() {
  // ======== FIREBASE ======== //
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        navigate("/");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
      className="insc "
    >
      <div className="position">
        <img src={F} className="photo" alt="fh" />
        <div className="pa ">
          <p className="av"> تسجيل الدخول في دراسة</p>

          <br />
          <form onSubmit={handleSubmit}>
            <input
              value={email}
              style={{ marginTop: "20px" }}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="mail@"
              className="input4"
            />
            <br />
            <input
              value={password}
              style={{ marginTop: "20px", marginRight: "10px" }}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="mdp"
              className="input5"
            />
            <br />
            <button className="buttonins"> الدخول</button>
          </form>
        </div>
      </div>
      <img src={FF} className=" ii" alt="ff" />
      <img src={FFF} className="iii" alt="fff" />
    </div>
  );
}
