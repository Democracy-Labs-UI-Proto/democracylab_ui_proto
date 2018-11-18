import React, { Component } from "react";
import Tech from "./Technologies.js";
import Skills from "./Skills.js";
import Roles from "./Roles.js";
export default class Home extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <img src="https://picsum.photos/300/300" alt="picture" />
        <div className="project-info">
          <div className="project-title">
            <h1>Project Name</h1>
          </div>
          <p>
            Et ut et sunt labore distinctio qui. Sint occaecati doloremque
            consectetur architecto debitis. Nobis consequatur laudantium neque
            neque 135 characters
          </p>
          <div className="btn-container">
            <button className="btn primary-button">Contact</button>
            <button className="btn secondary-button">See Jobs</button>
          </div>
        </div>
        <Skills />
        <Tech />
        <Roles />
      </div>
    );
  }
}
