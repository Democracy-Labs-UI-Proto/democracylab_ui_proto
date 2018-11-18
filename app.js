(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

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
/* harmony import */ var _Menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu.js */ "./src/components/Menu.js");
/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home.js */ "./src/components/Home.js");


 // import Footer from "./Footer.js";


function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["HashRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Menu_js__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _Home_js__WEBPACK_IMPORTED_MODULE_3__["default"]
  })));
}

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Technologies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Technologies.js */ "./src/components/Technologies.js");
/* harmony import */ var _Skills_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Skills.js */ "./src/components/Skills.js");
/* harmony import */ var _Roles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Roles.js */ "./src/components/Roles.js");




class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "main-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "https://picsum.photos/300/300",
      alt: "picture"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "project-info"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "project-title"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Project Name")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Et ut et sunt labore distinctio qui. Sint occaecati doloremque consectetur architecto debitis. Nobis consequatur laudantium neque neque 135 characters"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "btn-container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn primary-button"
    }, "Contact"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn secondary-button"
    }, "See Jobs"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Skills_js__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Technologies_js__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Roles_js__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  }

}

/***/ }),

/***/ "./src/components/Menu.js":
/*!********************************!*\
  !*** ./src/components/Menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
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



class Menu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "menuItemClick", () => {
      this.setState({
        current: "",
        show: false
      });
    });

    _defineProperty(this, "hamburgerClick", () => {
      this.setState(prevState => ({
        show: !prevState.show
      }));
    });

    this.state = {
      show: false,
      current: "home"
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `menu-btn-container ${this.state.show ? `close` : ``}`
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.hamburgerClick,
      className: `menu-btn ${this.state.show ? `close` : ``}`
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "btn-line"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "btn-line"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "btn-line"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      className: `menu ${this.state.show ? `show` : ``}`
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: `menu-nav ${this.state.show ? `show` : ``}`
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/",
      className: `menu-nav-items ${this.state.show ? `show` : ``}`,
      onClick: this.menuItemClick
    }, "Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/",
      className: `menu-nav-items ${this.state.show ? `show` : ``}`,
      onClick: this.menuItemClick
    }, "Settings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/",
      className: `menu-nav-items ${this.state.show ? `show` : ``}`,
      onClick: this.menuItemClick
    }, "Sign Out"))));
  }

}

/***/ }),

/***/ "./src/components/Roles.js":
/*!*********************************!*\
  !*** ./src/components/Roles.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Roles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

class Roles extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      roles: [1, 2, 3, 4, 5]
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section roles-container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "section-header"
    }, "Roles"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "roles-list"
    }, this.state.roles.map(role => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: role,
      className: "role-item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "role-header"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "UX-Designer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn primary-button"
    }, "Apply")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Et ut et sunt labore distinctio qui. Sint occaecati doloremque consectetur architecto debitis. Nobis consequatur laudantium neque neque 135 characters...", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "read-more",
      href: "#"
    }, "Read More"))))));
  }

}

/***/ }),

/***/ "./src/components/Skills.js":
/*!**********************************!*\
  !*** ./src/components/Skills.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Skills; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Skills() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "skills-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Skills"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "skills-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "skill-item"
  }, "UX-Designer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "skill-item"
  }, "Front-End Developer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "skill-item"
  }, "UI-Designer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "skill-item"
  }, "BackEnd-Developer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "skill-item"
  }, "DBA"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "skill-item"
  }, "Project Manager")));
}

/***/ }),

/***/ "./src/components/Technologies.js":
/*!****************************************!*\
  !*** ./src/components/Technologies.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tech; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Tech() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tech-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Technologies"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "skills-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "skill-item"
  }, "JavaScript"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "skill-item"
  }, "React.js"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "skill-item"
  }, "Redux"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "skill-item"
  }, "Node.js"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "skill-item"
  }, "MongoDB"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "skill-item"
  }, "Express.js")));
}

/***/ })

}]);
//# sourceMappingURL=app.js.map