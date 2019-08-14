import React from "react";

import { connect } from "react-redux";

class Info extends React.Component {
  componentDidMount() {}

  render() {
    const user = this.props.userData.userProfile;
    console.log(user);

    const links = user.links ? (
      user.links.map((item, i) => (
        <li key={i}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))
    ) : (
      <p>No links</p>
    );

    const socialLinks = user.social_links ? (
      user.social_links.map((item, i) => (
        <span
          key={i}
          href={item.url}
          className="uk-icon-button"
          uk-icon={item.service_name.toLowerCase()}
        />
      ))
    ) : (
      <p>No links</p>
    );

    return (
      <div className="">
        <h3>This is the Info Component</h3>
        <p>{user.display_name}</p>
        <p>{user.location}</p>
        <p>{user.occupation}</p>
        <ul>{links}</ul>
        {socialLinks}
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
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info);
