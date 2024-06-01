"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { root } from "postcss";

function page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) return alert("Please fill all fields");
    try {
      const response = await fetch("api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        alert("Topic added successfully");
        router.push("/");
      } else {
        throw new Error("Failed to add topic");
      }

      setTitle("");
      setDescription("");
    } catch (error) {
      console.log("Error adding topic", error);
    }
  };
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Enter Topic"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded w-fit"
      >
        Add Topic
      </button>
    </form>
  );
}

export default page;
