import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    console.log("追加");

    const newNote = {
      id: uuid(),
      title: "新しいノート",
      content: "これは新しいノートです.",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote} notes={notes} />
      <Main />
    </div>
  );
}

export default App;
