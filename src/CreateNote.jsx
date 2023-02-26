import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import NoteCard from "./NoteCard";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [expand, setExpand] = useState(false);

  const addTitle = (event) => {
    setTitle(event.target.value);
  };

  const addNote = (event) => {
    setNote(event.target.value);
  };

  const addNotes = () => {
    setNotes((oldValue) => {
      const val = [title, note];
      return [val, ...oldValue];
    });
    setTitle("");
    setNote("");
  };

  const deleteNote = (id) => {
    setNotes((oldVal) => {
      return oldVal.filter((currElem, index) => {
        return index !== id;
      });
    });
  };

  const showForm = () => {
    setExpand(true);
  };
  const btoNormal = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="main_note" onDoubleClick={btoNormal}>
        <form onClick={showForm}>
          {expand ? (
            <input
              type="text"
              placeholder="Title"
              autoComplete="false"
              value={title}
              onChange={addTitle}
            />
          ) : null}
          <textarea
            rows=""
            column=""
            placeholder="Write a Note.."
            value={note}
            onChange={addNote}
          />
          {expand ? (
            <Button className="btn" onClick={addNotes}>
              <AddIcon className="plus_sign" />
            </Button>
          ) : null}
        </form>
      </div>

      <ol>
        {notes.map((val, id) => {
          return (
            <NoteCard
              key={id}
              id={id}
              title={val[0]}
              note={val[1]}
              onSelect={deleteNote}
            />
          );
        })}
      </ol>
    </>
  );
};

export default CreateNote;
