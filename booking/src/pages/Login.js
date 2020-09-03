import React from "react";

class Login extends React.Component {
  render() {
    return <p>Login</p>;
  }
}

const mapStateToProps = (state) => {
  return {
    rentals: state.rentals,
  };
};

export default Login;
