export function Sidebar() {
  return (
    <div className="w-52 h-screen px-6 lightBg bg-white p-2 border-r-2">
      <h1 className="text-4xl text-cyan-900 font-bold mt-3">Trello</h1>
      {/* <div className="border-t-2 mt-4"></div> */}
      <ul className="flex flex-col p-2 mt-4">
        <li className="list-none text-xl p-2 font-medium hover:text-blue-900 ">
          <a href="">Home</a>
        </li>
        <li className="list-none text-xl p-2 font-medium hover:text-blue-900 ">
          <a href="">Projects</a>
        </li>
      </ul>
    </div>
  );
}
