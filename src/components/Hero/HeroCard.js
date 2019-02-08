import React, { Fragment } from 'react';
import DemoLabPic from '../../assets/democracyLab.png';

export default function HeroCard(props) {
  return (
    <Fragment>
      {/* <img src={props.hero.projectimage} alt={props.hero.projectimagealt} /> */}
      <div className="hero-img-container container">
        <img className="hero-img" src={DemoLabPic} alt={props.hero.projectimagealt} />
      </div>
      <div className="hero-info container column big-space">
        <div className="hero-title container">
          <h1>{props.hero.projectname}</h1>
        </div>
        <p>{props.hero.projectdescription}</p>
        <div className="btn-container">
          <a href="#roles" className="btn primary-button container">
            See Roles
          </a>
          <a href="#contact" className="btn secondary-button container">
            Contact
          </a>
        </div>
      </div>
    </Fragment>
  );
}
