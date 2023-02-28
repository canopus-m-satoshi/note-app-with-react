import { useState } from 'react'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import { Notes } from './types'

import { v4 as uuidv4 } from 'uuid'

function App() {
  const [notes, setNotes] = useState<Array<Notes>>([])
  const [activeNote, setActiveNote] = useState<boolean | string>(false)

  const onAddNote = () => {
    const newNote: Notes = {
      id: uuidv4(),
      title: 'test',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      modDate: Date.now(),
    }

    setNotes([...notes, newNote])
  }

  const onDeleteNote = (id: string) => {
    const filterNote = notes.filter((note) => {
      return note.id !== id
    })

    setNotes(filterNote)
  }

  return (
    <div className="App bg-blue-50 w-full h-screen overflow-hidden flex">
      <Sidebar
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        notes={notes}
      />
      <Main />
    </div>
  )
}

export default App
