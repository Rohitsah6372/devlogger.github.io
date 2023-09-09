import React, { useContext } from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";
import GithubContext from "../../../Context/Github/Github";

export default function RepoList() {
  const { repos } = useContext(GithubContext);

  return (
    <div>
      <div className="card-body">
        <h2>Repositories</h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};
