import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App bg-blue-50 w-full h-screen overflow-hidden flex">
      <Sidebar />
      <Main />
    </div>
  )
}

export default App