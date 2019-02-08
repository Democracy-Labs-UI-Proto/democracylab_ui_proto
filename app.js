(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/assets/democracyLab.png":
/*!*************************************!*\
  !*** ./src/assets/democracyLab.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/democracyLab-15720ba7.png";

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _MainDeck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainDeck */ "./src/components/MainDeck.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/store */ "./src/store/store.js");





const store = Object(_store_store__WEBPACK_IMPORTED_MODULE_4__["default"])();
class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
      store: store
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["HashRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/",
      component: _MainDeck__WEBPACK_IMPORTED_MODULE_3__["default"]
    }))));
  }

}

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footer container"
  }, "Copyright \xA9 2019 DemocracyLab");
}

/***/ }),

/***/ "./src/components/Hero/HeroCard.js":
/*!*****************************************!*\
  !*** ./src/components/Hero/HeroCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeroCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_democracyLab_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/democracyLab.png */ "./src/assets/democracyLab.png");
/* harmony import */ var _assets_democracyLab_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_democracyLab_png__WEBPACK_IMPORTED_MODULE_1__);


function HeroCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_democracyLab_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: props.hero.projectimagealt
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-info container column big-space"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-title container shadow-title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, props.hero.projectname)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.hero.projectdescription), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btn-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn primary-button"
  }, "Contact"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn secondary-button"
  }, "See Roles"))));
}

/***/ }),

/***/ "./src/components/Hero/HeroDeck.js":
/*!*****************************************!*\
  !*** ./src/components/Hero/HeroDeck.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeroDeck; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeroCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeroCard */ "./src/components/Hero/HeroCard.js");


function HeroDeck(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeroCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    hero: props.hero
  }));
}

/***/ }),

/***/ "./src/components/Info/InfoCard.js":
/*!*****************************************!*\
  !*** ./src/components/Info/InfoCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function InfoCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "info-item shadow"
  }, props.infoitem);
}

/***/ }),

/***/ "./src/components/Info/InfoDeck.js":
/*!*****************************************!*\
  !*** ./src/components/Info/InfoDeck.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoDeck; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InfoCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoCard */ "./src/components/Info/InfoCard.js");


function InfoDeck(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "title small-space"
  }, props.info.infotitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "info-list container big-space"
  }, props.info.infolist.map((ele, idx) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: idx,
    infoitem: ele
  }))));
}

/***/ }),

/***/ "./src/components/MainDeck.js":
/*!************************************!*\
  !*** ./src/components/MainDeck.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Roles_RolesDeck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Roles/RolesDeck */ "./src/components/Roles/RolesDeck.js");
/* harmony import */ var _Info_InfoDeck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Info/InfoDeck */ "./src/components/Info/InfoDeck.js");
/* harmony import */ var _Menu_MenuDeck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu/MenuDeck */ "./src/components/Menu/MenuDeck.js");
/* harmony import */ var _Hero_HeroDeck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hero/HeroDeck */ "./src/components/Hero/HeroDeck.js");
/* harmony import */ var _Team_TeamDeck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Team/TeamDeck */ "./src/components/Team/TeamDeck.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





 // import ContactDeck from './Contact/ContactDeck';




function MainDeck(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Menu_MenuDeck__WEBPACK_IMPORTED_MODULE_3__["default"], {
    menu: props.state.menus.home
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero_HeroDeck__WEBPACK_IMPORTED_MODULE_4__["default"], {
    hero: props.state.projecthero
  }), props.state.projectinfo.map((ele, idx) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Info_InfoDeck__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: idx,
    info: ele
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Roles_RolesDeck__WEBPACK_IMPORTED_MODULE_1__["default"], {
    roles: props.state.roles
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Team_TeamDeck__WEBPACK_IMPORTED_MODULE_5__["default"], {
    team: props.state.team
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null));
}

const mapStateToProps = state => ({
  state
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(MainDeck));

/***/ }),

/***/ "./src/components/Menu/MenuCard.js":
/*!*****************************************!*\
  !*** ./src/components/Menu/MenuCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuItemCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");


function MenuItemCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: '/',
    className: `menu-nav-items ${props.show ? `show` : ``}`,
    onClick: props.menuClick
  }, props.title);
}

/***/ }),

/***/ "./src/components/Menu/MenuDeck.js":
/*!*****************************************!*\
  !*** ./src/components/Menu/MenuDeck.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuDeck; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuHamburger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuHamburger */ "./src/components/Menu/MenuHamburger.js");
/* harmony import */ var _MenuCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuCard */ "./src/components/Menu/MenuCard.js");
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}




class MenuDeck extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "menuClick", () => {
      this.setState(prevState => ({
        show: !prevState.show
      }));
    });

    this.state = {
      show: false
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuHamburger__WEBPACK_IMPORTED_MODULE_1__["default"], {
      menuClick: this.menuClick,
      show: this.state.show
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      className: `menu ${this.state.show ? `show` : ``}`
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: `menu-nav gradient-blue ${this.state.show ? `show` : ``}`
    }, this.props.menu.map((ele, idx) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: idx,
      menuClick: this.menuClick,
      show: this.state.show,
      title: ele
    })))));
  }

}

/***/ }),

/***/ "./src/components/Menu/MenuHamburger.js":
/*!**********************************************!*\
  !*** ./src/components/Menu/MenuHamburger.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuHamburger; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function MenuHamburger(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: `menu-btn-container gradient ${props.show ? `close` : `shadow`}`
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: props.menuClick,
    className: `menu-btn ${props.show ? `close` : ``}`
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btn-line"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btn-line"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btn-line"
  })));
}

/***/ }),

/***/ "./src/components/Roles/RoleCard.js":
/*!******************************************!*\
  !*** ./src/components/Roles/RoleCard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoleCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function RoleCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "role-item shadow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "role-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn primary-button"
  }, "Apply")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.content, "...", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "read-more",
    href: "#"
  }, "Read More")));
}

/***/ }),

/***/ "./src/components/Roles/RolesDeck.js":
/*!*******************************************!*\
  !*** ./src/components/Roles/RolesDeck.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Roles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RoleCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoleCard */ "./src/components/Roles/RoleCard.js");


class Roles extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    // TODO change roles-container class to be just container (flex)
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "roles-container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "title small-space"
    }, "Available Roles"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "roles-list big-space"
    }, this.props.roles.map((role, idx) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RoleCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: idx,
      title: role.title,
      content: role.description
    }))));
  }

}

/***/ }),

/***/ "./src/components/Team/TeamCard.js":
/*!*****************************************!*\
  !*** ./src/components/Team/TeamCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function TeamCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "small-padding small-space shadow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, props.teamitem.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.teamitem.role));
}

/***/ }),

/***/ "./src/components/Team/TeamDeck.js":
/*!*****************************************!*\
  !*** ./src/components/Team/TeamDeck.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamDeck; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TeamCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeamCard */ "./src/components/Team/TeamCard.js");

 // TODO: have to create an array of images in the export for this to iterate over

function TeamDeck(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "title small-space"
  }, "Team"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "team-list container column big-space"
  }, props.team.map((ele, idx) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TeamCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: idx,
    teamitem: ele
  }))));
}

/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = {
  projecthero: {
    projectname: 'DemocracyLab',
    projectimage: 'https://picsum.photos/300/300',
    projectimagealt: 'project image',
    projectdescription: 'DemocracyLab is building online infrastructure to empower the civic technology movement. We are creating an online hub for civic innovation that uses marketplace dynamics to allocate effort, resources, and attention.'
  },
  projectinfo: [{
    infotitle: 'Skills We Need',
    infolist: ['UX Design', 'Front-End', 'Back-End', 'Project Managment', 'Fundraising', 'Marketing', 'Operations']
  }, {
    infotitle: 'Our Stack',
    infolist: ['JavaScript', 'React.js', 'Redux', 'Node.js', 'MongoDB', 'Express.js', 'Python', 'Django', 'PostgreSQL']
  }],
  roles: [{
    title: 'Frontend Developer',
    description: 'The Senior Front-End Web Developer volunteer position will partner with the UX lead and champion the front-end effort to create delightful user experiences'
  }, {
    title: 'Backend Developer',
    description: 'The Senior Back-End Developer volunteer position will lead the technical effort to build the functionality of the web platform'
  }, {
    title: 'UI/UX Designer',
    description: 'The UX Designer volunteer position will research and design experiences to help users meet their goals'
  }, {
    title: 'Director of Operations',
    description: 'The Director of Operations will lead DemocracyLab’s Operations team to provide infrastructure to support the work of the organization'
  }, {
    title: 'Director of Marketing',
    description: 'The Director of Marketing will lead DemocracyLab’s Marketing team to increase brand awareness and cultivate relationships with participating projects, nonprofits, governments and volunteers'
  }],
  menus: {
    home: ['Profile', 'My Projects', 'Find Projects', 'Create a Project']
  },
  team: [{
    name: 'Mark Frischmuth',
    role: 'Project Owner'
  }, {
    name: 'Marlon Keating',
    role: 'Technical Lead'
  }, {
    name: 'Adrian Pacheco',
    role: 'UX Designer'
  }, {
    name: 'Tracy Williams',
    role: 'Full Stack Developer'
  }, {
    name: 'Khoa Huynh',
    role: 'Front-End Developer'
  }, {
    name: 'Paloma De Murga',
    role: 'Creative Director'
  }]
};

/***/ }),

/***/ "./src/reducer/reducer.js":
/*!********************************!*\
  !*** ./src/reducer/reducer.js ***!
  \********************************/
/*! exports provided: populate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "populate", function() { return populate; });
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data */ "./src/data/data.js");
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} // const jsonData = require('../data/data.json');


 // Action Constants

const POPULATE = 'POPULATE'; // Action Creators

const populate = () => {
  return dispatch => {
    let payload = _data_data__WEBPACK_IMPORTED_MODULE_0__["data"];
    return dispatch({
      type: POPULATE,
      payload
    });
  };
}; // Initial State

let initialState = _data_data__WEBPACK_IMPORTED_MODULE_0__["data"]; // Reducer

/* harmony default export */ __webpack_exports__["default"] = (function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  let type = action.type,
      payload = action.payload;

  switch (type) {
    case 'POPULATE':
      return _objectSpread({}, payload);

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducer_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducer/reducer */ "./src/reducer/reducer.js");



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
/* harmony default export */ __webpack_exports__["default"] = (() => Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducer_reducer__WEBPACK_IMPORTED_MODULE_2__["default"], composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]))));

/***/ })

}]);
//# sourceMappingURL=app.js.map