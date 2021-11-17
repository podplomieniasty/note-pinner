import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import NoteForm from "./components/NoteForm/NoteForm";
import sampleNotes from "./data/sampleNotes.json";
import AppContext from "./context";

const App = () => {
  const [showNoteForm, toggleNoteForm] = useState(false);
  const [notes, setNotes] = useState([]);
  const [latestCords, setCords] = useState([0, 0]);

  
  const openNoteForm = (e) => {
    toggleNoteForm(true);
    setCords([e.clientX, e.clientY]);
  };


  const closeNoteForm = () => {
    toggleNoteForm(false);
  };


  const addNote = (e, note) => {
    e.preventDefault();
    note = {
		...note,
		bgColor: randHex(),
	}
	setNotes([...notes, note]);
	toggleNoteForm(false);
	console.log(note);
  };


  const randHex = () => {
    let hex = "#";
    for (let i = 0; i < 3; i++) {
      let num = Math.floor(Math.random() * 127) + 128;
      num = num.toString(16);
      hex += num.length === 1 ? "0" + num : num;
    }
    return hex;
  };


  const ctxElement = {
	  addNote: addNote,
	  openNoteForm: openNoteForm,

	  
  };

  return (
    <AppContext.Provider value={ctxElement}>
      {showNoteForm && (
        <NoteForm
          onClose={() => {
            closeNoteForm();
          }}
          cords={latestCords}
        />
      )}
      <Header />
      <Wrapper notes={notes} />
    </AppContext.Provider>
  );
};

export default App;
