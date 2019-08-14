import React from "react";

export const User = props => {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <h1>The User Page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <p>First Name: {props.username}</p>
          <p>Last Name: {props.lastName}</p>
        </div>
      </div>
    </div>
  );
};
