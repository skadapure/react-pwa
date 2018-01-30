import React from "react";
import * as styles from "./footer.scss";

const Footer = () => {
  "use strict";
  return (
    <footer className={styles.footer} >
      <div className="container">
        <p style={{textAlign:"left"}}>
          &copy;2018 XXX
        </p>
      </div>
    </footer>
  );
};

export default Footer;