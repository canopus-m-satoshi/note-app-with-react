const Sidebar = () => {
  return (
    <div className="border-r  h-full w-44 py-2">
      <div className="flex items-center justify-between p-2">
        <h1>Note</h1>
        <button className="btn btn-active">Add</button>
      </div>
      <div className="h-[calc(100vw+78px)] overflow-y-scroll mt-2 pl-2">
        <div className="hover:opacity-40 duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <strong>Title</strong>
            <button className="btn btn-active btn-ghost">Delete</button>
          </div>
          <p className="my-2">Contents</p>
          <small className="text-gray-500">Last update: xx/xx</small>
        </div>
      </div>
    </div>
  )
}
export default Sidebar
