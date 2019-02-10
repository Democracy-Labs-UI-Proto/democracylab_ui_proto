import React, { Component } from 'react';

export default class RoleCard extends Component {
  constructor(props) {
    super(props);
    this.readMore = this.readMore.bind(this);
  }

  readMore = e => {
    // show/hide expander
    let select = document.getElementById(`${e.target.id}`);
    select.getElementsByClassName('expander')[0].classList.toggle('show');

    // toggle "show more" / "show less" text
    let text = select.getElementsByTagName('a')[0];
    select.getElementsByClassName('expander')[0].classList.contains('show')
      ? (text.innerHTML = '&nbsp;Show Less')
      : (text.innerHTML = '&nbsp;Read More');
  };

  render() {
    return (
      <li id={this.props.id} className="role-item shadow">
        <div className="role-header">
          <h2>{this.props.title}</h2>
        </div>
        <p className="small-space">
          {this.props.content}.
          <a id={this.props.id} onClick={this.readMore} className="read-more">
            &nbsp;Read More
          </a>
        </p>

        <div className="expander">
          <h3>Key Responsibilites</h3>
          <ul>
            {this.props.list.map((ele, idx) => (
              <li key={idx}>{ele}</li>
            ))}
          </ul>
        </div>

        <button className="btn primary-button role-button">Apply</button>
      </li>
    );
  }
}
