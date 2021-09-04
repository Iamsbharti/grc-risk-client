import React, { Fragment } from "react";
import axios from "axios";
import "../css/login.css";
import { baseUrl } from "../apis/apiUtils";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginId: "",
      password: "",
    };
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    console.log("hi");
    e.preventDefault();
    axios
      .post(
        `${baseUrl}/login?loginId=${this.state.loginId}&password=${this.state.password}`
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "200") {
          localStorage.setItem("user", JSON.stringify(response.data.data));
          this.props.history.push({
            pathname: `/risks`,
            state: { risksInfo: response.data.data },
          });
        }
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <Fragment>
        <div className="login__main">
          <div className="login-header">Welcome To Risk GRC Application</div>
          <div className="login-form">
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <div className="form-group login-block-alignment">
                <label>Login Id</label>
                <input
                  className="form-control login-input"
                  aria-describedby="emailHelp"
                  name="loginId"
                  placeholder="Enter loginid"
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control login-input"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div className="btn__div">
                <button type="submit" class="btn btn-primary login-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;
