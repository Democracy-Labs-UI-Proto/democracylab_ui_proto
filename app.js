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

function Home() {
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
  }, "See Jobs"))));
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

/***/ })

}]);
//# sourceMappingURL=app.js.map