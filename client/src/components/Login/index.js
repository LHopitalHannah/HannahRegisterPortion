// Include React
import React, { Component } from 'react';
import { Spinner, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
// import axios from 'axios';
// import Nav from './children/Nav'

require('./login.css');

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false,
      loading: false
    };
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  }

  // loginUser = submitObject => {

  //   axios.post('/api/users/login', submitObject)
  //     .then(function (data) {
  //       console.log(data.data);
  //       if (data.data.success) {
  //         this.props.authenticate();
  //         this.setState({
  //           redirectToReferrer: true
  //         });
  //       } else {
  //         alert(data.data.message);
  //       }
  //     }.bind(this)).catch(function (err) {
  //       console.log(err);
  //     });

  //   this.setState({
  //     username: "",
  //     password: ""
  //   });
  // }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      loading: true
    });

    const usernameInput = this.state.username;
    const passwordInput = this.state.password;

    const objSubmit = {
      username: usernameInput,
      password: passwordInput
    }

    if (!objSubmit.username || !objSubmit.password) {
      return;
    }
    // If we have an email and password we run the loginUser function and clear the form
    // this.loginUser(objSubmit);
    console.log(objSubmit)
  }

  render() {




    return (<>
      {
        !this.state.loading ? (<div>
          {/* <Nav
          authenticated={this.props.authenticated}
          authenticate={this.props.authenticate}
          deAuthenticate={this.props.deAuthenticate}
          logout={this.props.logout}
        /> */}
          <div className="loginmodal-container">
            <h1 className="">Log In to Your Account</h1><br />
            <form className="login" onSubmit={this.handleSubmit.bind(this)}>
              <input id="username-input" ref="user" type="text" name="user" placeholder="Username" onChange={this.handleUsernameChange} value={this.state.username} />
              <input id="password-input" ref="password" type="password" name="pass" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password} />

              {/* <Link to='/perppage' ><input type="submit" name="login" className="login loginmodal-submit" value="Login" /></Link> */}
              <Link to='/perppage' ><Button>Login</Button></Link>
            </form>
            <div className="login-help">

            </div>
          </div>
        </div>) : <section style={{ height: '500px', postition: 'relative', border: '3px', backgroundColor: 'gray' }}>
          {/* <Spinner style={{ postition: 'absolute', top:'50%' }} animation="border" role="status"> */}
          <span style={{ postition: 'absolute', top: '50%', color: 'red' }}  >Loading...</span>
          {/* </Spinner> */}
        </section>
      }
    </>
    );
  }
}