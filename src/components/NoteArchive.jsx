import React from "react";
import NoteItem from "./NoteItem";

const NoteArchive = ({ notes, showFormattedDate, onDelete, onArchive }) => {
  return (
    <div>
      <h2>Arsip</h2>

      <div className="notes-list">
        {notes.filter((note) => note.archived).length === 0 ? (
          <p>No data</p>
        ) : (
          notes
            .filter((note) => note.archived)
            .map((note) => (
              <NoteItem
                className="notes-item"
                key={note.id}
                {...note}
                showFormattedDate={showFormattedDate}
                onDelete={onDelete}
                onArchive={onArchive}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default NoteArchive;
