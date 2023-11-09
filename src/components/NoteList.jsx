import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, showFormattedDate, onDelete }) => {
  return (
    <div>
      <h2>Catatan Aktif</h2>

      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem className="notes-item" key={note.id} {...note} showFormattedDate={showFormattedDate} onDelete={onDelete}/>
        ))}
      </div>
    </div>
  );
};

export default NoteList;
