// import React, { Component } from "react";
// import DashboardComponent from "../components/Dashboard";
// import MainTemplate from "../containers/MainTemplate";

// class Dashboard extends Component {
//   render() {
//     return (
//       <MainTemplate>
//         <DashboardComponent />
//       </MainTemplate>
//     );
//   }
// }

// export default Dashboard;

import React, { Component } from "react";
import { connect } from "react-redux";
import ListUsers from "../components/Dashboard/index";
import MainTemplate from "./MainTemplate";
import { loadUsers } from "../actions/Users";
// import { changePassword } from "../actions/ChangePassword";

class UsersList extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    console.log("user", this.props.users);
    return (
      <MainTemplate>
        <ListUsers users={this.props.users} />
      </MainTemplate>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUsers() {
      dispatch(loadUsers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
