import React, { useState, useEffect } from "react";
import "./Adminprofile.css";
import Sidenav from "./Sidenav";

const Adminprofile = () => {
  const [image, setImage] = useState(null);
  const [showSave, setShowSave] = useState(false);
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  // Load image from local storage on component mount
  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setShowSave(true); // Show save button after uploading
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a PNG or JPG image.");
    }
  };

  const handleSave = () => {
    localStorage.setItem("profileImage", image); // Save image to local storage
    setShowSave(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="admin-profile">
      <Sidenav /> {/* Sidebar */}
      <div className="profile-card">
        <h1>Admin Profile Card</h1>
        {/* Profile Image Upload and Save */}
        <div className="profile-image-container">
          <div className="profile-image-circle">
            {image ? (
              <img src={image} alt="Profile" className="profile-image" />
            ) : (
              <span className="placeholder-text">Upload</span>
            )}
          </div>
          <label htmlFor="profile-upload" className="edit-icon">
            <i className="fas fa-pencil-alt"></i>
          </label>
          <input
            id="profile-upload"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>
        {showSave && (
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
        )}
      
          <h2>Name : admin</h2>
          <p>Email : admin@gmail.com</p>
        </div>
      </div>
   
  );
};
export default Adminprofile