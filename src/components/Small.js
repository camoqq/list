import React from "react";
import "./Small.css";

const Small = (props) => {
  return (
    <div className="note">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <button onClick={() => props.onDelete(props.id)}>DELETE</button>
    </div>
  );
};

export default Small;
