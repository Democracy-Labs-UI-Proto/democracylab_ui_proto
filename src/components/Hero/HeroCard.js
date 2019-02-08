import React, { Fragment } from 'react';
import DemoLabPic from '../../assets/democracyLab.png';

export default function HeroCard(props) {
  return (
    <Fragment>
      {/* <img src={props.hero.projectimage} alt={props.hero.projectimagealt} /> */}
      <img src={DemoLabPic} alt={props.hero.projectimagealt} />
      <div className="hero-info container column big-space">
        <div className="hero-title container shadow-title">
          <h1>{props.hero.projectname}</h1>
        </div>
        <p>{props.hero.projectdescription}</p>
        <div className="btn-container">
          <button className="btn primary-button">Contact</button>
          <button className="btn secondary-button">See Roles</button>
        </div>
      </div>
    </Fragment>
  );
}
