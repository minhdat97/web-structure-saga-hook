import React from "react";
import { ButtonToolbar, Button } from "react-bootstrap";
import MyVerticallyCenteredModal from "../components/ChangePassword";

function ChangePasswordModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Change Password
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}

export default ChangePasswordModal;
