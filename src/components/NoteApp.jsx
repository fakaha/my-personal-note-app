import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index";
import Header from "./Header";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import NoteArchive from "./NoteArchive";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }
  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    this.setState((prevState) => {
      const updatedNotes = prevState.notes.map((note) => {
        if (note.id === id) {
          // Mengganti nilai archived menjadi true jika semula false, dan sebaliknya
          return { ...note, archived: !note.archived };
        }
        return note;
      });
      return { notes: updatedNotes };
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title: title,
            body: body,
            createdAt: Date(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="note-app">
        <Header />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <NoteList
            notes={this.state.notes}
            showFormattedDate={showFormattedDate}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
          <NoteArchive
            notes={this.state.notes}
            showFormattedDate={showFormattedDate}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </div>
      </div>
    );
  }
}

export default NoteApp;
