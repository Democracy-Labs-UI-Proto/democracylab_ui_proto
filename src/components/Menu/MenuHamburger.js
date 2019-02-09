import React from 'react';

export default function MenuHamburger(props) {
  return (
    <div className={`menu-btn-container gradient ${props.show ? `close` : `shadow`}`}>
      <div onClick={props.menuClick} className={`menu-btn ${props.show ? `close` : ``}`}>
        <div className="btn-line" />
        <div className="btn-line" />
        <div className="btn-line" />
      </div>
    </div>
  );
}
