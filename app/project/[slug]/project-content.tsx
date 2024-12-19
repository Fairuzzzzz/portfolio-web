"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Sun, Moon, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";

export default function ProjectContent() {
  const [darkMode, setDarkMode] = useState(true);
  const [readme, setReadme] = useState("");
  const params = useParams();
  const router = useRouter();

  const projects = [
    {
      title: "Perpustakaan API",
      description:
        "Perpustakaan API is a simple RESTful API that provides functionality to manage library data, such as books, members, and borrowing transactions.",
      slug: "project-1",
      repo: "Fairuzzzzz/perpustakaan-api",
    },
    {
      title: "Pokedex API",
      description:
        "A RESTful API service for managing pokemon teams using data from PokeAPI.",
      slug: "project-2",
      repo: "Fairuzzzzz/pokedex-api",
    },
    {
      title: "Ally AI Chat App",
      description:
        "Ally AI is a Flutter-based mobile application that provides an interactive chat interface powered by the Groq AI model.",
      slug: "project-3",
      repo: "Fairuzzzzz/ai-chat-app",
    },
  ];

  const project = projects.find((p) => p.slug === params.slug);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    if (project) {
      fetch(`https://raw.githubusercontent.com/${project.repo}/main/README.md`)
        .then((response) => response.text())
        .then((text) => setReadme(text))
        .catch((error) => console.error("Error fetching README:", error));
    }
  }, [project]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-mono transition-colors duration-300">
      <main className="max-w-4xl mx-auto p-6 md:p-12 space-y-8">
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            size="icon"
            onClick={() => router.push("/")}
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to Home</span>
          </Button>
          <Button variant="outline" size="icon" onClick={toggleDarkMode}>
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle dark mode</span>
          </Button>
        </div>
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-lg text-black/80 dark:text-white/80">
          {project.description}
        </p>
        <div className="prose dark:prose-invert">
          <ReactMarkdown>{readme}</ReactMarkdown>
        </div>
      </main>
    </div>
  );
}
