import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import NoteForm from "./components/NoteForm/NoteForm";
import AppContext from "./context";

const App = () => {

	const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];

	const [showNoteForm, toggleNoteForm] = useState(false);
	const [notes, setNotes] = useState(storedNotes);
	const [latestCords, setCords] = useState([0, 0]);

	// Load data to page
	// useEffect(() => {
	// 	const getTasks = async () => {
	// 	const serverNotes = await fetchTasks();
	// 	setNotes(serverNotes);
	// 	};

	// 	getTasks();
	// }, []);

	// // Return an array of notes from json-server
	// const fetchTasks = async () => {
	// 	const res = await fetch("http://localhost:2137/notes");
	// 	const data = await res.json();

	// 	return data;
	// };

	// Toggle form on
	const openNoteForm = (e) => {
		toggleNoteForm(true);
		setCords([e.clientX, e.clientY]);
	};

	// Toggle note off
	const closeNoteForm = () => {
		toggleNoteForm(false);
	};

	//Add a new note to the page
	const addNote = (e, note) => {
		e.preventDefault();

		note = {
		...note,
		bgColor: randHex(),
		};

		localStorage.setItem(
			"notes", 
			JSON.stringify([...storedNotes, note])
		);

		setNotes([...notes, note]);
		toggleNoteForm(false);
	};

	// usuwanie, nie działa, naprawić
	const removeNote = (e) => {
		e.preventDefault();
		localStorage.clear();
		setNotes([]);
		//const n = storedNotes.filter(x => x === sr);
		//console.log(n);


	}

	// Returns a random hex color
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
		removeNote: removeNote,
		openNoteForm: openNoteForm,
		randHex: randHex,
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
