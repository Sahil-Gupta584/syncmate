"use client";
import { FaPlusCircle } from "react-icons/fa";

export default function ImportButton({ onPress }: { onPress: () => void }) {
  return (
    <button
      onClick={onPress}
      className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-3 py-1.5 rounded-full text-sm transition-all hover:shadow-md"
    >
      <FaPlusCircle size={16} />
      <span>Import Video</span>
    </button>
  );
}
