// import React from "react";
// import "./index.css";

// const DashboardComponent = () => {
//   return <h1>Information</h1>;
// };

// export default DashboardComponent;

import React from "react";
import "./index.css";
import _ from "lodash";
import ChangePassword from "../../containers/ChangePassword";

const ListUsers = ({ users, onClick }) => {
  return (
    <main role="main">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2>Profile for {users.fullname}</h2>

        <ChangePassword />
      </div>

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
