import React, {Component} from "react";
import {connect} from "react-redux";
import classNames from "classnames";
import styles from "./header.scss"
import Link from "pawjs/src/components/link";
import $ from "jquery";

import header from "src/resources/images/header.jpeg";

class Header extends Component {
  render() {
    let props = this.props;
    return (
    <div data-auto="header"  className={styles["image"]} style={{backgroundImage: "url(" + header + ")", backgroundSize: "100% 100%"}} >
        <div style={{display: "flex"}} className = "container">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1" style={{flex: "6 1 auto"}}>
            <div data-auto="header-name">
              <div>
                <h3 style={{display: "inline-block"}}>Non-Eggetarian</h3>
              </div>
            </div>
          </div>
          <div style={{flex: "1 1 auto", textAlign: "right", alignSelf: "center"}} className={styles["header"]} ref="menu">
            <ul className="nav d-inline-flex">
            <li className="nav-item">
              <Link
                className={classNames("nav-link", {active: props.url === "/"})}
                to="/"
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={classNames("nav-link", {active: props.url === "/about"})}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={classNames("nav-link", {active: props.url === "/blog"})}
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={classNames("nav-link", {active: props.url === "/contact"})}
                to="/contact"
              >
                Contact
              </Link>
            </li>
            </ul>
          </div>
          <div style={{textAlign: "right", maxWidth: "100px"}}>
            <button style={{textAlign: "right", fontSize: "22px"}} className={styles["hide"]} onClick={this.onClick.bind(this)} ref="button">&#9776;
              <div>
                <ul className="nav d-inline-flex">
                  <li className="nav-item">
                    <Link
                      className={classNames({active: props.url === "/"})}
                      to="/"
                    >
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={classNames({active: props.url === "/about"})}
                      to="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={classNames({active: props.url === "/blog"})}
                      to="/blog"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={classNames({active: props.url === "/contact"})}
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </button>
          </div>
      </div>
  </div>
);
  }
  onClick() {
    var y = $(this.refs.button);
    // console.log(y[0].className);
    if (y[0].className.endsWith('unhide')) {
      let a = y[0].className.replace('unhide', 'hide');
      y[0].className = a;
      // console.log('y - ', y[0].className);
    }
    else {
      let b = y[0].className.replace('hide', 'unhide');
      y[0].className = b;
      // console.log('y - ', y[0].className);
  }
  }
}
  export default connect(state => { return {url: state.router.location.pathname}; })(Header);
  

