import React, { Component } from "react";

export default class Roles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: [1, 2, 3, 4, 5]
    };
  }
  render() {
    return (
      <div className="section roles-container">
        <h1 className="section-header">Roles</h1>
        <ul className="roles-list">
          {this.state.roles.map(role => (
            <li key={role} className="role-item">
              <div className="role-header">
                <h2>UX-Designer</h2>
                <button className="btn primary-button">Apply</button>
              </div>
              <p>
                Et ut et sunt labore distinctio qui. Sint occaecati doloremque
                consectetur architecto debitis. Nobis consequatur laudantium
                neque neque 135 characters...
                <a className="read-more" href="#">
                  Read More
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
