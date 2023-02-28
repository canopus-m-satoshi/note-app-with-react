import { Notes } from '../types'

type Props = {
  onAddNote: () => void
  onDeleteNote: (id: string) => void
  activeNote: boolean | string
  setActiveNote: (el: boolean | string) => void
  notes: Array<Notes>
}

const Sidebar: React.FC<Props> = ({
  onAddNote,
  onDeleteNote,
  notes,
  activeNote,
  setActiveNote,
}) => {
  return (
    <div className="border-r  h-full w-44 py-2">
      <div className="flex items-center justify-between p-2">
        <h1>Note</h1>
        <button className="btn btn-active" onClick={onAddNote}>
          Add
        </button>
      </div>

      <div className="h-[calc(100vw+78px)] overflow-y-scroll mt-2 pl-2">
        {notes.map((note) => (
          <div
            key={note.id}
            className={`hover:opacity-40 duration-300 cursor-pointer ${
              note.id === activeNote && 'bg-gray-500'
            }`}
            onClick={() => setActiveNote(note.id)}>
            <div className="flex items-center justify-between">
              <strong>{note.title}</strong>
              <button
                className="btn btn-active btn-ghost"
                onClick={() => onDeleteNote(note.id)}>
                Delete
              </button>
            </div>
            <p className="my-2">{note.content}</p>
            <small className="text-gray-500">
              Last update:
              {new Date(note.modDate).toLocaleDateString('ja-JP', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Sidebar
