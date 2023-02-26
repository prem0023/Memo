import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

const NoteCard = (props) => {
  return (
    <>
      <div className="note my_notes">
        <h1>{props.title}</h1>
        <br />
        <p>{props.note}</p>
        <div className="div_del">
          <Button className="deleteButton">
            <DeleteIcon
              className="deleteIcon"
              onClick={() => {
                props.onSelect(props.id);
              }}
            />
          </Button>
        </div>
      </div>
    </>
  );
};

export default NoteCard;
