import React from "react";
import "./UserItem.css";
import { Link } from "react-router-dom";

export default function UserItem({ user }) {
  return (
    <div className="container">
      <div>
        <Link to={`/user/${user.login}`}>
          <img src={user.avatar_url} alt="Profile" />
        </Link>
      </div>

      <div className="userLogin">{user.login}</div>
      <div className="link">
        <Link to={`/users/${user.login}`}>Visit Profile</Link>
      </div>
    </div>
  );
}
