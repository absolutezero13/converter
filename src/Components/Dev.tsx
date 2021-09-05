import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Dev.css";

const Dev = () => {
  return (
    <a className="github-link" href="https://www.github.com/absolutezero13">
      <p style={{ marginRight: 10 }}> Developer </p>
      <GitHubIcon fontSize="small" />
    </a>
  );
};

export default Dev;
