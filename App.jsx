import { useState } from "react";

function App() {

  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  function addNote() {

    if (note.trim() === "") return;

    setNotes([...notes, note]);

    setNote("");
  }

  function deleteNote(index) {

    const newNotes = notes.filter((item, i) => i !== index);

    setNotes(newNotes);
  }

  return (

    <div className="min-h-screen bg-gray-900 text-white flex">

      {/* Sidebar */}

      <div className="w-64 bg-gray-800 p-6 hidden md:block">

        <h2 className="text-3xl font-bold mb-10">
          Notes App
        </h2>

        <ul className="space-y-6 text-lg">

          <li className="hover:text-blue-400 cursor-pointer transition">
            All Notes
          </li>

          <li className="hover:text-blue-400 cursor-pointer transition">
            Favorites
          </li>

          <li className="hover:text-blue-400 cursor-pointer transition">
            Settings
          </li>

        </ul>

      </div>

      {/* Main Content */}

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-8">
          All Notes
        </h1>

        {/* Top Section */}

        <div className="flex flex-col md:flex-row gap-4 mb-8">

          <input
            type="text"
            placeholder="Write a note..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="flex-1 p-4 rounded-2xl bg-gray-800 outline-none"
          />

          <button
            onClick={addNote}
            className="bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-2xl font-semibold"
          >
            Add Note
          </button>

          <input
            type="text"
            placeholder="Search notes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-4 rounded-2xl bg-gray-800 outline-none"
          />

        </div>

        {/* Notes Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {notes
            .filter((item) =>
              item.toLowerCase().includes(search.toLowerCase())
            )
            .map((item, index) => (

              <div
                key={index}
                className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
              >

                <p className="text-xl mb-6 break-words">
                  {item}
                </p>

                <button
                  onClick={() => deleteNote(index)}
                  className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-xl"
                >
                  Delete
                </button>

              </div>

            ))}

        </div>

      </div>

    </div>

  );
}
  
export default App;
