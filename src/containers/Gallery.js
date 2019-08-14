import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Gallery extends React.Component {
  componentDidMount() {}

  render() {
    const projects = this.props.userProjects.map((item, i) => (
      <li key={i}>
        <Link to={`/project/${item.id}`}>{item.name}</Link>
      </li>
    ));

    return (
      <div className="">
        <h3>This is the Gallery Component</h3>
        <ul>{projects}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userProjects: state.userData.userProjects
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
