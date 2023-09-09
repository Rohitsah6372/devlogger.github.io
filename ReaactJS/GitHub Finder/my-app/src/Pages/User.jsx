import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FiMapPin, FiUser, FiUsers, FiTwitter, FiLink } from "react-icons/fi";
import Spinner from "../Components/layout/assets/Loading";
import GithubContext from "../Context/Github/Github";
import RepoList from "../Components/layout/Repos/RepoList";
import "./User.css"; // Import your CSS file for styling
import { getUser, getRepos } from "../Components/layout/Users/GitHubAction";

export default function User() {
  const { user, loading, repos, dispatch } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getUserData = async () => {
      const userData = await getUser(params.login);
      dispatch({ type: "GET_USER", payload: userData });

      const userRepoData = await getRepos(params.login);
      dispatch({ type: "GET_REPOS", payload: userRepoData });
    };

    getUserData();
  }, [dispatch, params.login]);

  if (loading) {
    return <Spinner />;
  } else {
    const {
      name,
      type,
      avatar_url,
      location,
      bio,
      blog,
      twitter_username,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = user;

    return (
      <div className="user-profile">
        <div className="user-info">
          <div className="avatar">
            <img src={avatar_url} alt={`${name}'s Avatar`} />
          </div>
          <div className="user-details">
            <h1>{name}</h1>
            <p className="user-type">{type}</p>
            <p className="location">
              <FiMapPin className="icon" /> {location}
            </p>
            <p className="bio">{bio}</p>
            {blog && (
              <p className="blog">
                <FiLink className="icon" /> {blog}
              </p>
            )}
            {hireable && <div className="hireable">Hireable</div>}
            {twitter_username && (
              <p className="twitter">
                <FiTwitter className="icon" /> @{twitter_username}
              </p>
            )}
            <p className="login">
              <FiUser className="icon" /> {params.login}
            </p>
            <div className="followers-following">
              <p>
                <FiUsers className="icon" /> Followers: {followers}
              </p>
              <p>
                <FiUsers className="icon" /> Following: {following}
              </p>
            </div>
          </div>
        </div>
        <div className="github-info">
          <a
            href={html_url}
            className="github-profile-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Github Profile
          </a>
          <div className="repos-gists">
            <span>Public Repos: {public_repos}</span>
            <span>Public Gists: {public_gists}</span>
          </div>
        </div>
        <RepoList repos={repos} />
      </div>
    );
  }
}
