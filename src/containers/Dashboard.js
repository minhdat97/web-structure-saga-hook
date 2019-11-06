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
import { changePassword } from "../actions/Users";

class UsersList extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  onClick = () => {
    this.props.changePassword();
  };

  render() {
    console.log("user", this.props.users);
    return (
      <MainTemplate>
        <ListUsers users={this.props.users} onClick={this.onClick} />
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
    },
    changePassword() {
      dispatch(changePassword());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
