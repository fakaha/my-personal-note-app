import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, showFormattedDate, onDelete, onArchive }) => {
  return (
    <div>
      <h2>Catatan Aktif</h2>

      <div className="notes-list">
        {notes
          .filter((note) => !note.archived)
          .map((note) => (
            <NoteItem
              className="notes-item"
              key={note.id}
              {...note}
              showFormattedDate={showFormattedDate}
              onDelete={onDelete}
              onArchive={onArchive}
            />
          ))}
      </div>
    </div>
  );
};

export default NoteList;
