import React from 'react';

export default function TeamCard(props) {
  return (
    <li className="small-padding small-space shadow-light">
      <h3>{props.teamitem.name}</h3>
      <p>{props.teamitem.role}</p>
    </li>
  );
}
