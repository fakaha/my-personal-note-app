import React, { useState } from "react";

const NoteInput = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <input
        className="note-input__title"
        type="text"
        placeholder="Masukkan judul"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="note-input__body"
        type="text"
        placeholder="Tulis catatanmu"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button
        onClick={() => {
          if (title && body) {
            addNote({ title, body });
            setTitle("");
            setBody("");
          } else {
            if (!title && body) {
              alert("Title tidak boleh kosong!");
            } else if (!body && title) {
              alert("Body tidak boleh kosong!");
            } else {
              alert("Title dan body tidak boleh kosong!");
            }
          }
        }}
      >
        Buat
      </button>
    </div>
  );
};

export default NoteInput;
