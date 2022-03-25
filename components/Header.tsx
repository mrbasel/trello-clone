export function Header() {
  return (
    <header className="flex justify-between p-3 border-b-2 bg-white">
      <div className="flex justify-between items-center w-full">
        {/* <h2 className="text-3xl headingColor text-cyan-900">My workspace</h2> */}
        <input type="text" placeholder="Search" className="p-3 bg-gray-100 rounded w-72" />
        <div className="font-bold text-white bg-cyan-900 p-2 rounded-full flex items-center justify-center">
          404
        </div>
      </div>
    </header>
  );
}
