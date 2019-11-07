import React from "react";
import { Alert } from "reactstrap";
import { LogIn } from "react-feather";
import "./index.css";

const Login = ({
  onInputChange,
  data,
  onSubmit,
  isError,
  errorCode,
  detailError
}) => {
  let controlMessageError = null;
  if (isError === true && errorCode !== 1000) {
    controlMessageError = <Alert color="danger">{detailError}</Alert>;
  }
  return (
    <div className="text-center">
      {controlMessageError}
      <form className="form-signin" onSubmit={onSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Xin Đăng nhập</h1>
        <label htmlFor="inputPhone" className="sr-only">
          Account
        </label>
        <input
          type="phone"
          id="inputPhone"
          className="form-control"
          name="account"
          onChange={onInputChange}
          value={data.account}
          placeholder="Account"
          required
          autoFocus
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          name="password"
          onChange={onInputChange}
          value={data.password}
          placeholder="Password"
          required
        />
        <button
          className="btn btn-lg btn-outline-primary btn-block"
          type="submit"
        >
          Đăng nhập <LogIn />
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
      </form>
    </div>
  );
};

export default Login;
