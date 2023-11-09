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
      <input
        className="note-input__body"
        type="text"
        placeholder="Tulis catatanmu"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={() => {addNote(title, body); console.log(title); console.log(body);}}>Buat</button>
    </div>
  );
};

export default NoteInput;
