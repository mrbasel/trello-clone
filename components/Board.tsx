import { BoardList } from "./BoardList";

export function Board() {
  return (
    <div className="p-6">
        <h2 className="text-2xl font-semibold2">My project</h2>
      <div className="flex p-6">
        <BoardList />
        <BoardList />
        <BoardList />
        <BoardList />
      </div>
    </div>
  );
}
