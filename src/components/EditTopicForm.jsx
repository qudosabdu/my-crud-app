"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


function EditTopicForm({ title, description, id}) {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (response.ok) {
        alert("Topic updated successfully");
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to update the topic");
      }
    } catch (error) {
      console.log("Error updating the topic", error);
    }
  }


  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Enter Topic"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Enter Description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded w-fit">
        Update Topic
      </button>
    </form>
  );
}

export default EditTopicForm;
