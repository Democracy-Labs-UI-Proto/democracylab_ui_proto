import React, { Component } from 'react';
import MenuHamburger from './MenuHamburger';
import MenuItemCard from './MenuCard';
export default class MenuDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  menuClick = () => {
    this.setState(
      prevState => ({
        show: !prevState.show
      }),
      () => {
        document.getElementsByTagName('body')[0].classList.toggle('show');
      }
    );
  };

  render() {
    return (
      <header className={`${this.state.show ? `show` : ``}`}>
        <MenuHamburger menuClick={this.menuClick} show={this.state.show} />
        <nav className={`menu ${this.state.show ? `show` : ``}`}>
          <ul className={`menu-nav gradient-blue ${this.state.show ? `show` : ``}`}>
            {this.props.menu.map((ele, idx) => (
              <MenuItemCard
                key={idx}
                menuClick={this.menuClick}
                show={this.state.show}
                title={ele}
              />
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}
