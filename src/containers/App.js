import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

// import Navbar from "../components/Navbar.js";
import Landing from "./LandingPage.js";
import Gallery from "./Gallery.js";
import Info from "./Info.js";
import Project from "../components/Project.js";
import Navbar from "../components/Navbar.js";

import { getUserProfile } from "../actions/userActions";
import { getUserProjects } from "../actions/userActions";

class App extends React.Component {
  componentDidMount() {
    this.props.getUserProfile();
    this.props.getUserProjects();
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <Navbar />
            <div>
              <Route path="/landing" component={Landing} />
              <Route path="/info" component={Info} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/project/:id" component={Project} />
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserProfile: () => {
      dispatch(getUserProfile());
    },
    getUserProjects: () => {
      dispatch(getUserProjects());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
