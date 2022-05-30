import { Avatar, ListItemAvatar } from "@mui/material";
import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";

export default function Imageprofile() {
  const { user, setAlert, setLoading } = UserAuth();
    const [name, setName] = useState(user?.displayName);
    const [file, setFile] = useState(null);
    const [photoURL, setPhotoURL] = useState(user?.photoURL);

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFile(file);
            setPhotoURL(URL.createObjectURL(file));
        }
    };
  return (
    <div>
      <label htmlFor="profilePhoto">
        <input
          accept="image/*"
          id="profilePhoto"
          type="file"
          style={{ display: "none" }}
          onChange={handleChange}
        />
        <Avatar
          style={{ marginLeft: "37%" }}
          src={photoURL}
          sx={{ width: 140, height: 140, cursor: "pointer" }}
        />
      </label>
    </div>
  );
}
