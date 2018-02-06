import React from "react";
import Link from "pawjs/src/components/link";
import * as styles from "./contact.scss";

export default class Contact extends React.Component {

  render() {
    return (
      <div className="container text-left" style={{marginLeft: "1rem", marginTop: "1rem"}}>
        <p>Like what I do?  Hit me up at <a href="mailto:noneggetarian@gmail.com">noneggetarian@gmail.com</a></p>
      </div>
    );
  }
}