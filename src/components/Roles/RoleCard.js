import React from 'react';

export default function RoleCard(props) {
  return (
    <li className="role-item shadow">
      <div className="role-header">
        <h2>{props.title}</h2>
        {/* <button className="btn primary-button">Apply</button> */}
      </div>
      <p className="small-space">
        {props.content}...
        <a className="read-more" href="#">
          Read More
        </a>
      </p>
      <button className="btn primary-button role-button">Apply</button>
    </li>
  );
}
