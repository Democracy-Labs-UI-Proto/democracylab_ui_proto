import React, { Component } from 'react';
import RoleCard from './RoleCard';

export default class Roles extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="roles-container">
        <h2 id="roles" className="title small-space">
          Available Roles
        </h2>
        <ul className="roles-list container column big-space">
          {this.props.roles.map((role, idx) => (
            <RoleCard
              key={idx}
              id={idx}
              title={role.title}
              content={role.description}
              list={role.list}
            />
          ))}
        </ul>
      </div>
    );
  }
}
