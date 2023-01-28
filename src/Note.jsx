import React from "react";

function Note(props) {
  let date = new Date(props.date);
  date =
    date.toLocaleDateString("en-IN") +
    ", " +
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  return (
    <div className="note">
      <h1>{props.name}</h1>
      <p className="noteContent">{props.content}</p>
      <p style={{ fontSize: "0.8rem", color: "grey", mb: "0px" }}>{date}</p>
    </div>
  );
}

export default Note;
