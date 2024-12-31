import React from "react";
import "./Home.css";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { BiLogoDiscord } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import img from "../assets/myimages.png";

export default function Home() {
  return (
    <div className="first_row">
      <div className="text_effect">
        <h1 aria-label="Hi! I'm a developer">
          Hi!&nbsp; I'm &nbsp; &nbsp;&nbsp;
          <br />
          <span className="typewriter"></span>
        </h1>
      </div>

      <div className="image_my">
        <div className="card">
          
          <div className="grid-container">
          <figure>
  <img
    src={img}
    width="190"
    height="200"
    alt="Profile_pic"
    className="image"
    
  />
</figure>

          </div>
          <ul className="social-icons">
            <li>
              <a href="https://www.linkedin.com/in/sakshi-kumari-9b4800290">
                <IoLogoLinkedin />
              </a>
            </li>
            <li>
              <a href="#">
                <FaSquareGithub />
              </a>
            </li>
            <li>
              <a href="#">
                <BiLogoDiscord />
              </a>
            </li>
            <li>
              <a  href="mailto:sakshis@example.com">
                <MdEmail />
              </a>
            </li>
          </ul>
          <button className="btn draw-border" onClick={() => window.location.href = 'https://drive.google.com/file/d/1HCt9q10-CUARP1KeeZuFk12N5nbYye02/view?usp=sharing'} >View CV</button>
          <button className="btn draw-border">Contact me</button>
        </div>
      </div>
    </div>
  );
}
