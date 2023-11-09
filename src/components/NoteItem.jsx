import React from "react";

const NoteItem = ({ id, title, body, createdAt, showFormattedDate, onDelete}) => {
  const formattedDate = showFormattedDate(createdAt);
  return (
    <div className="note-item">
      <div className="note-item__content">
        <div className="note-item__title">{title}</div>
        <div className="note-item__date">{formattedDate}</div>
        <div className="note-item__body">{body}</div>
      </div>
      <div className="note-item__action">
        <button onClick={() => onDelete(id)} className="note-item__delete-button">Delete</button>
        <button className="note-item__archive-button">Arsipkan</button>
      </div>
    </div>
  );
};

export default NoteItem;
