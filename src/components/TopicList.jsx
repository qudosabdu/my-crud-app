import Link from "next/link";
import EditBtn from "./EditBtn";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { HiTrash } from "react-icons/hi";

const getTopics = async () => {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/topics`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch topics");
    }

    return response.json();
  } catch (error) {
    console.log("Error loading topics", error);
    return [];
  }
};


async function TopicList() {
  const topics = await getTopics();
  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <EditBtn  size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default TopicList;
