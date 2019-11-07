import React from "react";
import { Modal, Button } from "react-bootstrap";

const MyVerticallyCenteredModal = props => {
  console.log("props", props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Thay đổi mật khẩu
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="modal-changepass" onSubmit={props.onSubmit}>
          <div className="row">
            <div className="form-group col-md-4">
              <label>Mật khẩu hiện tại:</label>
              <input
                type="password"
                className="form-control"
                onChange={props.onInputChangeCurPass}
                value={props.data.currentpass}
                placeholder="Xin nhập..."
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label>Mật khẩu mới:</label>
              <input
                type="password"
                className="form-control"
                onChange={props.onInputChangeNewPass}
                value={props.data.newpass}
                placeholder="Xin nhập..."
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label>Nhập lại mật khẩu mới:</label>
              <input
                type="password"
                className="form-control"
                onChange={props.onInputChangeRePass}
                value={props.data.repass}
                placeholder="Xin nhập..."
              />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <input
          type="submit"
          value="Submit"
          color="primary"
          className="btn btn-primary"
        />
        <Button variant="outline-primary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>

      {/* <form onSubmit={props.onSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Change Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="form-group col-md-4">
              <label>Current password:</label>
              <input
                type="text"
                id="currenPass"
                name="curentpass"
                className="form-control"
                onChange={props.onInputChangeCurPass}
                value={props.data.currentpass}
                placeholder="Current Password"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label>New Password:</label>
              <input
                type="text"
                id="newPass"
                name="newpass"
                className="form-control"
                onChange={props.onInputChangeNewPass}
                value={props.data.newpass}
                placeholder="New Password"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label>Re-enter Password:</label>
              <input
                type="text"
                id="rePass"
                name="repass"
                className="form-control"
                onChange={props.onInputChangeRePass}
                value={props.data.repass}
                placeholder="Re-enter Password"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <input
            type="submit"
            value="Submit"
            color="primary"
            className="btn btn-primary"
          />
          <Button variant="outline-primary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </form> */}
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
