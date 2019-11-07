import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../components/Login";
import { sha256 } from "js-sha256";
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

  convertSHA256 = item => {
    return sha256(item);
  };

  onSubmit = e => {
    e.preventDefault();

    // const error = this.validate(this.state);
    // console.log(error);
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.password = sha256(this.state.password);
    // const password = this.convertSHA256(this.state.password);
    // this.setState({ password: sha256([...this.state.password]) });

    this.props.login(this.state);
  };

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
