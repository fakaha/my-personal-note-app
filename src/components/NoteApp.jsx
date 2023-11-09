import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index";
import Header from "./Header";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }
  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title: this.title,
            body: this.body,
            createdAt: Date(),
            archived: false,
          },
        ],
      };
    });
  }

  // render() {
  //   return (
  //     <div className="contact-app">
  //       <h2>Tambah Kontak</h2>
  //       <ContactInput addContact={this.onAddContactHandler} />
  //       <h2>Daftar Kontak</h2>
  //       <ContactList
  //         contacts={this.state.contacts}
  //         onDelete={this.onDeleteHandler}
  //       />
  //     </div>
  //   );
  // }
  render() {
    return (
      <div className="note-app">
        <Header />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler}/>
          <NoteList notes={this.state.notes} showFormattedDate={showFormattedDate} onDelete={this.onDeleteHandler} />
        </div>
      </div>
    );
  }
}

export default NoteApp;
