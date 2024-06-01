"use client";
import { HiTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

function RemoveBtn({ id }) {
  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure you want to delete this topic?");
    if (confirmed) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/topics/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          alert("Topic deleted successfully");
          router.refresh();
        } else {
          throw new Error("Failed to delete the topic");
        }

        // Refresh the page
        router.refresh();
      } catch (error) {
        console.log("Error deleting the topic", error);
      }
    }
  };
  return (
    <div>
      <button onClick={removeTopic} className="text-red-400">
        <HiTrash size={24} />
      </button>
    </div>
  );
}

export default RemoveBtn;
