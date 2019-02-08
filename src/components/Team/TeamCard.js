import React from 'react';
export default function TeamCard(props) {
  return (
    <li className="team-container small-padding small-space shadow-light container">
      <img className="team-image" src={props.img} alt={`Picture of ${props.teamitem.name}`} />
      <div className="team-text-container">
        <h3>{props.teamitem.name}</h3>
        <p>{props.teamitem.role}</p>
      </div>
    </li>
  );
}
