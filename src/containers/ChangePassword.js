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
import { changePassword } from "../actions/ChangePassword";
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

  onInputChangeCurPass = e => {
    this.setState({
      currentpass: e.target.value
    });
  };

  onInputChangeNewPass = e => {
    this.setState({
      newpass: e.target.value
    });
  };

  onInputChangeRePass = e => {
    this.setState({
      repass: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.currentpass, this.state.newpass, this.state.repass);
    // const error = this.validate(this.state);
    // console.log(error);
    // this.props.login(this.state);
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
          onInputChangeCurPass={this.onInputChangeCurPass}
          onInputChangeNewPass={this.onInputChangeNewPass}
          onInputChangeRePass={this.onInputChangeRePass}
          onSubmit={this.onSubmit}
          data={this.state}
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
        />
      </ButtonToolbar>
    );
  }
}

const mapStateToProps = state => {
    const isError = state.changePasswordReducer.error || false;
    const errorCode = state.changePasswordReducer.errorCode || null;
    const detailError = state.changePasswordReducer.errorDetailLogin || null;
    return {
      changePassword: state.changePasswordReducer,
      isError,
      errorCode,
      detailError
    };
};

const mapDispatchToProps = dispatch => {
  return {
    changePassword(credentials) {
      dispatch(changePassword(credentials));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePassword);
