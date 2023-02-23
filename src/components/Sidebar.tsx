import { Notes } from '../types'

type Props = {
  onAddNote: () => void
  notes: Array<Notes>
}

const Sidebar: React.FC<Props> = ({ onAddNote, notes }) => {
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
            className="hover:opacity-40 duration-300 cursor-pointer">
            <div className="flex items-center justify-between">
              <strong>{note.title}</strong>
              <button className="btn btn-active btn-ghost">Delete</button>
            </div>
            <p className="my-2">{note.content}</p>
            <small className="text-gray-500">
              Last update:{' '}
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
