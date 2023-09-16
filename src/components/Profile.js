import React from "react";
import "./Profile.css";
import dp from "../assets/dp.jpg";

function Profile() {
  return (
    <prof>
      <div className="profile-card">
        <img src={dp} alt="dp" />
        <h1>Vaibhav Kumar Maurya</h1>
        <p>Registration Number: ABC12345</p>
        <a
          href="https://www.instagram.com/vaibhav_kumar_maurya/"
          className="instagram-button"
        >
          <i class="fa-brands fa-square-instagram"></i>Visit Instagram
        </a>
      </div>
    </prof>
  );
}

export default Profile;
