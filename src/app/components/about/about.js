import React, {Component} from "react";
import classNames from "classnames";
import Link from "pawjs/src/components/link";
import {renderSubRoutes} from "pawjs/src/utils/renderer";
import Transition from "pawjs/src/components/transition";
import * as styles from "./about.scss";

export default class About extends Component {
  render() {
    return (
      <div className="row mt-3">
        {/* <div className="col-sm-3 blog-sidebar">
          <div className={classNames("sidebar-module", styles["sidebar-module-inset"])}>
            <h4>About</h4>
            <p>
              <em>Atyantik technologies Pvt. Ltd.</em> is a software company based in
              gujarat servicing the needs of all businesses ranging
              from midsize to large ones
            </p>
          </div>
          <div className={styles["sidebar-module"]}>
            <h4>Left sidebar</h4>
            <ol className="list-unstyled">
              <li><Link to="/about/about-us" animateSection="about-section" >About Us</Link></li>
              <li><Link to="/about/we-execute-your-dreams" animateSection="about-section">What do we do?</Link></li>
            </ol>
          </div>
        </div> */}
        {/* <div className="pl-4 col-sm-6 container">
          <Transition
            sectionName="about-section"
            className={styles["animator"]}
            onEnterClassName={styles["fade-in"]}
            onExitClassName={styles["fade-out"]}
          >
            {renderSubRoutes(this)}
          </Transition>
        </div> */}
        <div style={{paddingLeft: "2rem", paddingRight: "2rem", textAlign: "justify"}}>
          <h3 className="h6">The Ultimate Technology Maniacs</h3>
          <p>We are a group of technology maniacs, extremely passionate about coding which means we do all the IT related tasks, so our clients do not have to. We bring passion to bear on client’s project and work hard to achieve the desired results. Our main aim is to provide our clients with cost effective, up to date and relevant software solutions. We love to constantly upgrade our technologies and keep our clients informed about new developments.</p>
        </div>
      </div>
    );
  }
}

