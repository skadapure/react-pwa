import React, {Component} from "react";
import * as styles from "./footer.scss";
import validator from "email-validator";
import $ from "jquery";
import axios from "axios";

class Footer extends Component {
  render() {
    console.log(process.env);
    return (
      <footer className={styles.footer}>
        <div className= "container" style={{display: "flex", overflow: "auto"}}>
          <div style={{flex: "3 1 0", alignSelf: "center", height: "60px", marginLeft: "1rem"}}>
            <p style={{textAlign:"left"}}>
              &copy;2018 XXX
            </p>
          </div>
          <div style={{flex: "5 1 0", alignSelf: "center", textAlign: "right", marginRight: "1rem"}}>
            <input style={{borderRadius: "12px", height: "2rem", marginRight: "0.5rem", width: "50%", verticalAlign: "middle"}} ref="email" onChange={this.handleChange.bind(this)}/>
            <button className = "btn btn-secondary btn-sm" style = {{borderRadius: "12px", border: "1px"}} onClick={this.click.bind(this)} ref="subscribe">Subscribe</button>
          </div>
        </div>
      </footer>
    );
  }
  handleChange() {
    var y = $(this.refs.email);
    // console.log(y[0].value);
    let value = y[0].value;
    var x = $(this.refs.subscribe) 
    if(validator.validate(value)){
      x[0].disabled = false;
    }
    else{
      x[0].disabled = true;
    }
  }
  click() {
    var y = $(this.refs.email);
    // console.log(y[0].value);
    let value = y[0].value;
    //console.log($(this.refs.subscribe));
    var x = $(this.refs.subscribe);
    return axios({
			url: 'https://6tdxaipp5a.execute-api.us-east-1.amazonaws.com/prod/dummy',
			timeout: 20000,
      method: 'post',
      data: {
        'emailid': value},
      headers: {
        'accept': 'application/json',
        'accept-language': 'en_US',
        'content-type': 'application/x-www-form-urlencoded'
      }
		})
		.then(function(response) {
			x[0].textContent="SUCCESS";
		})
		.catch(function(response){
      //x[0].textContent="FAILURE";
		})
  }
}

export default Footer;