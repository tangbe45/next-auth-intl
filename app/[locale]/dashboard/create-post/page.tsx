"use client";
import { useState } from "react";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, content }),
    });
  }

  return (
    <form onSubmit={submit} className="p-6 space-y-4 max-w-lg mx-auto">
      <input
        className="border p-2 w-full"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border p-2 w-full"
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="bg-green-600 text-white px-4 py-2">Create</button>
    </form>
  );
}
