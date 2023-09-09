import React, { createContext, useReducer } from "react";
import githubReducer from "../GithubReducer";

const GithubContext = createContext();

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
    repos: [],
    user: {},
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // const searchUsers = async (text) => {
  //   setLoading(); // Move setLoading here

  //   const params = new URLSearchParams({
  //     q: text,
  //   });

  //   const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   const { items } = await response.json();
  //   dispatch({
  //     type: "GET_USERS",
  //     payload: items,
  //   });
  // };

  // const clearUsers = () => {
  //   dispatch({
  //     type: "CLEAR_USERS", // Correct action type here
  //   });
  // };

  // const setLoading = () => {
  //   dispatch({ type: "SET_LOADING" });
  // };

  // const getUser = async (login) => {
  //   setLoading(); // Move setLoading here

  //   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   if (response.status === 404) {
  //     window.location = "/notfound";
  //   } else {
  //     const data = await response.json(); // Remove unnecessary destructuring
  //     dispatch({
  //       type: "GET_USER",
  //       payload: data, // Use 'data' directly
  //     });
  //   }
  // };

  // //Get repos
  // const getRepos = async (login) => {
  //   setLoading(); // Move setLoading here

  //   const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   const data = await response.json();
  //   dispatch({
  //     type: "GET_REPOS",
  //     payload: data,
  //   });
  // };

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
