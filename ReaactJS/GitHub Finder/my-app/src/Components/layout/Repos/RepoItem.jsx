import React from "react";
import "./RepoItem.css"; // Import your CSS file for styling
import { FiStar, FiEye, FiGitBranch, FiAlertCircle } from "react-icons/fi";
import PropTypes from "prop-types";

export default function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div className="repo-item">
      <div className="repo-header">
        <h2 className="repo-name">
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </h2>
        <p className="repo-description">{description}</p>
      </div>
      <div className="repo-stats">
        <div className="stat">
          <FiStar className="icon" />
          <span className="count">{stargazers_count}</span> Stars
        </div>
        <div className="stat">
          <FiEye className="icon" />
          <span className="count">{watchers_count}</span> Watchers
        </div>
        <div className="stat">
          <FiGitBranch className="icon" />
          <span className="count">{forks}</span> Forks
        </div>
        <div className="stat">
          <FiAlertCircle className="icon" />
          <span className="count">{open_issues}</span> Open Issues
        </div>
      </div>
    </div>
  );
}
RepoItem.propTpes = {
  repo: PropTypes.object.isRequired,
};
