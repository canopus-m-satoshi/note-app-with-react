import { useState } from 'react'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

type Notes = {
  id: number
  title: string
  content: string
  modDate: number
}

function App() {
  const [notes, setNotes] = useState([])

  const onAddNote = () => {
    const newNote: Notes = {
      id: 1,
      title: 'test',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, quam pariatur? Ullam maiores quisquam consequatur sunt dolorem dignissimos sint. Vero saepe cupiditate eius autem repellat sunt quam eaque officiis itaque.',
      modDate: Date.now(),
    }

    setNotes([...notes, newNote])
  }

  return (
    <div className="App bg-blue-50 w-full h-screen overflow-hidden flex">
      <Sidebar onAddNote={onAddNote} />
      <Main />
    </div>
  )
}

export default App
