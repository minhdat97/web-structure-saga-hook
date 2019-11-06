import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../components/Login";
import { login } from "../actions/AuthLogin";
// import Validator from "validator";

class AuthLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      password: ""
    };
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // const error = this.validate(this.state);
    // console.log(error);
    this.props.login(this.state);
  };

  //   validate = data => {
  //     const errors = {};
  //     if (!Validator.isMobilePhone(data.account))
  //       errors.account = "Invalid phone";
  //     if (!data.password) errors.password = "Can't be blank";
  //     return errors;
  //   };

  render() {
    const { isError, errorCode, detailError } = this.props;
    return (
      <Login
        onInputChange={this.onInputChange}
        data={this.state}
        onSubmit={this.onSubmit}
        isError={isError}
        errorCode={errorCode}
        detailError={detailError}
      />
    );
  }
}

const mapStateToProps = state => {
  const isError = state.authLoginReducer.error || false;
  const errorCode = state.authLoginReducer.errorCode || null;
  const detailError = state.authLoginReducer.errorDetailLogin || null;
  return {
    login: state.authLoginReducer,
    isError,
    errorCode,
    detailError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login(credentials) {
      dispatch(login(credentials));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLogin);
