// import React from "react";
// import { ButtonToolbar, Button } from "react-bootstrap";
// import MyVerticallyCenteredModal from "../components/ChangePassword";

// function ChangePasswordModal() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <ButtonToolbar>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Change Password
//       </Button>

//       <MyVerticallyCenteredModal
//         onInputChange={this.onInputChange}
//         data={this.state}
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </ButtonToolbar>
//   );
// }

// export default ChangePasswordModal;

import React, { Component } from "react";
import { connect } from "react-redux";
import { ButtonToolbar, Button } from "react-bootstrap";
import MyVerticallyCenteredModal from "../components/ChangePassword";
// import Validator from "validator";

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentpass: "",
      newpass: "",
      repass: "",
      modalShow: false
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
    // const { isError, errorCode, detailError } = this.props;
    return (
      <ButtonToolbar>
        <Button
          variant="primary"
          onClick={() => this.setState({ modalShow: true })}
        >
          Change Password
        </Button>

        <MyVerticallyCenteredModal
          onInputChange={this.onInputChange}
          data={this.state}
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
        />
      </ButtonToolbar>
    );
  }
}

const mapStateToProps = state => {
  //   const isError = state.authLoginReducer.error || false;
  //   const errorCode = state.authLoginReducer.errorCode || null;
  //   const detailError = state.authLoginReducer.errorDetailLogin || null;
  //   return {
  //     login: state.authLoginReducer,
  //     isError,
  //     errorCode,
  //     detailError
  //   };
};

const mapDispatchToProps = dispatch => {
  return {
    // login(credentials) {
    //   dispatch(login(credentials));
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePassword);
