import { Button } from "./Button";
import { ListCard } from "./ListCard";

export function BoardList() {
  return (
    <div className="w-72 p-3 mx-3 ">
      <header className="flex justify-between">
        <h3 className="text-lg font-semibold">Todo</h3>

        <Button>Add task</Button>
      </header>
      <ul className="mt-4">
        <ListCard></ListCard>
        <ListCard></ListCard>
        <ListCard></ListCard>
      </ul>
    </div>
  );
}
