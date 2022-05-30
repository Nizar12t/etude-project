import React, { useState } from "react";

import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "./Addlivre.css";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth, db, storage } from "../../firebase";
import { Link, NavLink } from "react-router-dom";
import oui from "../../image/fff.png";
import livre from "../../image/koutob.png";

export default function Addlivre() {
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    createdAt: Timestamp.now().toDate(),
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!formData.image) {
      alert("Please fill all the fields");
      return;
    }

    const storageRef = ref(
      storage,
      `/images-livre/${Date.now()}${formData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          image: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "Livres");
          addDoc(articleRef, {
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
            createdBy: user.displayName,
            userId: user.uid,
          });
        });
      }
    );
  };

  return (
    <div>
      {!user ? (
        <>
          <h2>
            <Link to="/">Login to create article</Link>
          </h2>
          Don't have an account? <Link to="/inscrit1">Signup</Link>
        </>
      ) : (
        <>
          <div className="form-g">
            <img src={livre} className="imageon" alt="ffffff" />
            <div className="form-g1">
              <h2 className="nouv-chapitre">Add book</h2>
              <div className="form-group">
              <div htmlFor="" className="form-title">Title</div>
            <input
              type="text"
              name="title"
              className="form-input"
              value={formData.title}
              onChange={(e) => handleChange(e)}
            />
          </div>

          {/* description */}
          <div htmlFor=""  className="form-description">Description</div>
          <textarea
            name="description"
            className="form-texte"
            value={formData.description}
            onChange={(e) => handleChange(e)}
          />

          {/* image */}
          <div htmlFor=""  className="form-image">Image</div>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="form-input2"
            onChange={(e) => handleImageChange(e)}
          />

          {progress === 0 ? null : (
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped mt-2"
                style={{ width: `${progress}% ` }}
              >
                {`uploading image ${progress}%`}
              </div>
            </div>
          )}

              <NavLink to="/fiche2">
                <button className="form-boutton" onClick={handlePublish}>
                  Publish
                </button>
              </NavLink>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
