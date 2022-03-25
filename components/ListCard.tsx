import { Tag } from "./Tag";

interface ListCardProps {}

export function ListCard() {
  return (
    <div className="bg-white p-3 my-2 border-2 rounded-lg shadow-sm">
      <p>Task XXX</p>
      <div className="grid grid-cols-3 gap-1 mt-3">
        <Tag color="cyan">Design</Tag>
        {/* <Tag color="cyan">Dev</Tag> */}
        <Tag color="red">Urgent</Tag>
      </div>
    </div>
  );
}
