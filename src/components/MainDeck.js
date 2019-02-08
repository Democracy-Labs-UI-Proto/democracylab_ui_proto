import React, { Fragment } from 'react';
import RolesDeck from './Roles/RolesDeck';
import InfoDeck from './Info/InfoDeck';
import MenuDeck from './Menu/MenuDeck';
import HeroDeck from './Hero/HeroDeck';
import TeamDeck from './Team/TeamDeck';
// import ContactDeck from './Contact/ContactDeck';
import Footer from './Footer/Footer';
import { connect } from 'react-redux';

function MainDeck(props) {
  return (
    <Fragment>
      <MenuDeck menu={props.state.menus.home} />
      <HeroDeck hero={props.state.projecthero} />
      {props.state.projectinfo.map((ele, idx) => (
        <InfoDeck key={idx} info={ele} />
      ))}
      <RolesDeck roles={props.state.roles} />
      <TeamDeck team={props.state.team} />
      {/* <ContactDeck /> */}
      <Footer />
    </Fragment>
  );
}

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(MainDeck);
