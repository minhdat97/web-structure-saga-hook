import React from "react";
import { Modal, Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  console.log("props", props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Change Password</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}

      <form onSubmit={() => {}}>
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
                onChange={props.onInputChange}
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
                onChange={props.onInputChange}
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
                onChange={props.onInputChange}
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
      </form>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
