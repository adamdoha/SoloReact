import React, { Component } from "react";
import WithRouterSample from "./WithRouterSample";
import { withRouter } from "react-router-dom";

const data = {
  dolphago: {
    name: "김도하",
    description: "리액트를 공부중입니다"
  },
  ssafy: {
    name: "김싸피",
    description: "싸피갓.."
  }
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};
export default withRouter(Profile);
