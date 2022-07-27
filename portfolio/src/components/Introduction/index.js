import React from "react";
import './index.css'
const profileImg = require('../../Assets/DylanPhoto.png')

function Introduction() {
    return (
        <div className="main container-fluid">
            <div className="name-container">
                <h1 className="name">DYLAN JAMES KNIGHT</h1>
                <h3 className="title">FULL STACK WEB DEVELOPER</h3>
            </div>
            <div className="spinner">
                <img className="profile-img" src={profileImg}/>
                <div className="spinner-sector spinner-one"></div>
                <div className="spinner-sector spinner-two"></div>
                <div className="spinner-sector spinner-three"></div>
            </div>
            <div className="about-me-container">
                <h1 className="about-me">ABOUT ME</h1>
                <p className="description">I feel strongly about continuously improving my skill set, by utilizing personal goal setting techniques to further my education. On my journey to become a full stack developer, I proved to be a fast learner, a strong team player, all while consistently fine-tuning my problem solving skills.</p>
            </div>
        </div>
    );
}

export default Introduction;