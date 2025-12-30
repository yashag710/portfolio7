"use client";
import React from "react";
import { FiExternalLink } from "react-icons/fi"; // icon

interface Props {
  id: string | null;
}

const data: Record<string, { desc: string; url: string }> = {
  "Vbloc": {
    desc: "A YouTube video summarizer powered by FastAPI, Transformers, and RAG — designed to help students learn faster by converting long lectures into clear summaries.",
    url: "https://vbloc-frontend.vercel.app/",
  },
  "Fraud Detection System": {
    desc: "Kafka-stream powered real-time fraud detection using ML and FastAPI.",
    url: "https://tap-ins.vercel.app/",
  },
  "BagVati Store": {
    desc: "An eCommerce platform built using Express, MongoDB, and EJS.",
    url: "https://bagvati.onrender.com/",
  },
};

export default function ProjectHoverCard({ id }: Props) {
  if (!id) return null;

  const project = data[id];

  return (
    <div
      onClick={() => window.open(project.url, "_blank")}
      className="
        absolute inset-0 z-20 flex flex-col items-center justify-center
        bg-black/40 backdrop-blur-md cursor-pointer
        rounded-2xl border border-white/20 p-6 text-center text-white
        animate-fadeIn transition hover:bg-black/50
      "
    >
      <div className="absolute top-3 right-4 text-white/70 hover:text-white transition">
        <FiExternalLink size={22} />
      </div>

      {/* Text */}
      <p className="text-lg sm:text-xl font-medium max-w-[85%]">
        {project.desc}
      </p>
    </div>
  );
}
