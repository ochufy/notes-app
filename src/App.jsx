import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Note from "./Note";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    name: "",
    content: "",
  });

  const [isAdded, setIsAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = async () => {
    setNote({
      name: "",
      content: "",
    });
    setIsLoading(true);
    setExpanded(false);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = note;
    await axios
      .post(
        "https://notz.pockethost.io/api/collections/notes/records",
        data,
        config
      )
      .then((response) => {
        setIsAdded(!isAdded);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const viewNotes = async () => {
    setIsLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios
      .get("https://notz.pockethost.io/api/collections/notes/records", config)
      .then((response) => {
        console.log(response.data.items);
        let data = response.data.items;
        data = data.reverse();
        setNotes(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    viewNotes();
  }, [isAdded]);

  return (
    <div>
      <Header />
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
            onClick={() => {
              setExpanded(true);
            }}
            onChange={handleChange}
            value={note.content}
            placeholder="add your note"
            rows={isExpanded ? 3 : 1}
          />
          <Zoom in={isExpanded}>
            <Fab
              onClick={submitNote}
              disabled={
                note.content.length === 0 || note.name.length === 0
                  ? true
                  : false
              }
              sx={{
                "&.Mui-disabled": { backgroundColor: "rgb(148, 163, 142)" },
              }}
            >
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
      </div>
      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", p: "1%" }}>
          <CircularProgress color="success" />
        </Box>
      ) : (
        <Box sx={{ px: "2%" }}>
          {notes.map((noteItem, index) => {
            console.log(noteItem);
            return (
              <Note
                key={index}
                id={index}
                name={noteItem.name}
                content={noteItem.content}
              />
            );
          })}
        </Box>
      )}
      <Footer />
    </div>
  );
}

export default App;
