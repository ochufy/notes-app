import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import axios from "axios";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    name: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  const submitNote = async (event) => {
    props.onAdd(note);
    setNote({
      name: "",
      content: "",
    });
    setExpanded(false);
    event.preventDefault();
  };

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <>
            {" "}
            <input
              name="name"
              onChange={handleChange}
              value={note.name}
              placeholder="name"
            />
            <hr style={{ borderTop: "1px solid #254202" }} />
          </>
        )}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="add your note"
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab
            onClick={submitNote}
            disabled={
              note.content.length === 0 || note.name.length === 0 ? true : false
            }
            sx={{ "&.Mui-disabled": { backgroundColor: "rgb(148, 163, 142)" } }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
