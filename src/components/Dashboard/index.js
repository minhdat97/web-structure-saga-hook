// import React from "react";
// import "./index.css";

// const DashboardComponent = () => {
//   return <h1>Information</h1>;
// };

// export default DashboardComponent;

import React from "react";
// import { Edit, Trash } from "react-feather";
// import { Button } from "reactstrap";
// import { Link } from "react-router-dom";
import "./index.css";
import _ from "lodash";
// import { Button } from "reactstrap";
import ChangePassword from "../../containers/ChangePassword";

const ListUsers = ({ users, onClick }) => {
  return (
    <main role="main">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2>Profile for {users.fullname}</h2>
        {/* <Button onClick={onClick} outline>
          Change Password
        </Button> */}
        <ChangePassword />
        {/* <Link to="/users/create">
          <Button color="success" outline title="Add new user">
            Add <UserPlus />
          </Button>
        </Link> */}
      </div>
      {/* <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Account Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{users.accountID}</td>
              <td>{users.fullname}</td>
              <td>{users.email}</td>
              <td>
                <Button
                  color="warning"
                  outline
                  title="Edit"
                  className="Button-size"
                >
                  <Edit className="Icon-size" />
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button
                  color="danger"
                  outline
                  title="Remove"
                  className="Button-size"
                >
                  <Trash className="Icon-size" />
                </Button>
              </td>
            </tr>
            )}
          </tbody>
        </table>
      </div> */}

      <div>
        <ul>
          <li>Gender: {_.capitalize(users.gender)}</li>
          <li>Email address: {users.email ? users.email : "N/A"}</li>
          <li>Phone: +{users.phone}</li>
        </ul>
      </div>
    </main>
  );
};

export default ListUsers;
