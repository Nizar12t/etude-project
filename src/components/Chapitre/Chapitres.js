import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { Link } from "react-router-dom";
import { auth, db } from "../../firebase";
export default function Chapitres() {
  const [articles, setArticles] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const articleRef = collection(db, "Chapitres");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    });
  }, []);
  return (
    <div>
      {articles.length === 0 ? (
        <p>No chapitre found!</p>
      ) : (
        articles.map(
          ({
            id,
            title,
            description,
            imageUrl,
            createdAt,
            createdBy,
            userId,
            likes,
            comments,
          }) => (
            <div className="border mt-3 p-3 bg-light" key={id}>
              <div className="row">
                <div className="col-3">
                  <Link to={`/Chapitres/${id}`}>
                    <img
                      src={imageUrl}
                      alt="title"
                      style={{ height: 180, width: 180 }}
                    />
                  </Link>
                </div>
                <div className="col-9 ps-3">
                  <h3>{title}</h3>
                  <p>{createdAt.toDate().toDateString()}</p>
                  <h5>{description}</h5>
                </div>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
}
