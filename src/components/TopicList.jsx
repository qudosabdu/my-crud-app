import Link from "next/link";
import EditBtn from "./EditBtn";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { HiTrash } from "react-icons/hi";

function TopicList() {
  return (
    <>
      <div className=" p-4 border border-slate-300 my-3 flex justify-between gap-5">
        <div className="">
          <h2 className="text-2xl font-bold">Topics Title</h2>
          <div> Topic Description</div>
        </div>
        <div className="flex gap-2 items-start">
          <RemoveBtn />
          {/* <EditBtn /> */}
          <Link href="/editTopic/123">
            <HiPencilAlt size={24} />
          </Link>
          {/* <Link href="/deleteTopic">
            <HiTrash size={24} />
          </Link> */}
        </div>
      </div>
    </>
  );
}

export default TopicList;
