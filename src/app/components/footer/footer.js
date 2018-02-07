import React from "react";
import * as styles from "./footer.scss";

const Footer = () => {
  "use strict";
  return (
    <footer className={styles.footer}>
      <div className= "container" style={{display: "flex"}}>
        <div style={{flex: "3 1 0", alignSelf: "center", height: "60px", marginLeft: "1rem"}}>
          <p style={{textAlign:"left"}}>
            &copy;2018 XXX
          </p>
        </div>
        <div style={{flex: "5 1 0", alignSelf: "center", textAlign: "right", marginRight: "1rem"}}>
          <input style={{borderRadius: "12px", height: "2rem", marginRight: "0.5rem", width: "50%", verticalAlign: "middle"}}/>
          <button className = "btn btn-secondary btn-sm" style = {{borderRadius: "12px", border: "1px"}} >Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;