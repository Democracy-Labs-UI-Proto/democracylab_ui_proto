import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuItemCard(props) {
  return (
    <Link
      to={'/'}
      className={`menu-nav-items ${props.show ? `show` : ``}`}
      onClick={props.menuClick}
    >
      {props.title}
    </Link>
  );
}
