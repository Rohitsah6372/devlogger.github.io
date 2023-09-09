import React, { useContext, useState } from "react";
import GithubContext from "../../../Context/Github/Github";
import AlertConetxt from "../../../Context/AlertContext";
import { searchUsers } from "./GitHubAction";

export default function UserSearch() {
  const style = {
    cursor: "pointer",
  };
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubContext);

  const { setAlert } = useContext(AlertConetxt);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please Enter something", "error");
    } else {
      dispatch({ type: "SET_LOADING" });
      //todo = search users
      const users = await searchUsers(text);
      dispatch({
        type: "GET_USERS",
        payload: users,
      });

      setText("");
    }
  };

  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Search"
            value={text}
            onChange={handleChange}
          />
        </div>
        <button className="goButton" type="submit">
          Go
        </button>
      </form>
      {users.length > 0 && (
        <div>
          <button
            style={style}
            onClick={() => dispatch({ type: "CLEAR_USER" })}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
