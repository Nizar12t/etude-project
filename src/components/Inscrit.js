import "./inscrit.css";
import F from "../image/f.png";
import FF from "../image/ff.png";
import FFF from "../image/fff.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

export default function Inscrit1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  let navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, { displayName: name });
      navigate("/");
    } catch (error) {
      toast(error.code, { type: "error" });
    }
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
          <p className="a">إنشاء</p>
          <p className="a">حساب جديد</p>
          <p className="a">في دراسة</p>

          {/* <img src={Livre} alt="livre" />
          <img src={Examan} alt="examan" /> */}

          <div className="paa">
            <input
              value={name}
              type="texte"
              style={{ marginTop: "20px" }}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder=" name"
            />
            <br />
            <input
              value={email}
              type="texte"
              style={{ marginTop: "20px" }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="mail@"
            />
            <br />
            <input
              value={password}
              type="texte"
              style={{ marginTop: "20px" }}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="mdp"
            />
            <br />
            <button 
            onClick={handleSignup}> 
              تسجيل الدخول
              </button>
            {/*         
        <button onClick={this.inscrit} style={{ marginTop: "20px" }}>
          inscrit
        </button> */}
          </div>
        </div>
      </div>
      <img src={FF} className=" ii" alt="ff" />
      <img src={FFF} className="iii" alt="fff" />
    </div>
  );
}
