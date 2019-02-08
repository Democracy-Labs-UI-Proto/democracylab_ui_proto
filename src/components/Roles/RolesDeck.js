import React, { Component } from 'react';
import RoleCard from './RoleCard';

export default class Roles extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // TODO change roles-container class to be just container (flex)
    return (
      <div className="roles-container">
        <h2 id="roles" className="title small-space">
          Available Roles
        </h2>
        <ul className="roles-list big-space">
          {this.props.roles.map((role, idx) => (
            <RoleCard key={idx} title={role.title} content={role.description} />
          ))}
        </ul>
      </div>
    );
  }
}
