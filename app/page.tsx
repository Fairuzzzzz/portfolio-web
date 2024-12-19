"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { title } from "process";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [darkMode, mounted]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Data Configuration
  const projects = [
    {
      title: "Perpustakaan API",
      description:
        "A RESTful API for managing library data. Features include book management, member management, and borrowing system.",
      repo: "Fairuzzzzz/perpustakaan-api",
      tags: ["Go", "PostgreSQL", "REST API", "JWT"],
    },
    {
      title: "Pokedex API",
      description:
        "Pokemon team management API built with Go and PostgreSQL, integrating with PokeAPI.",
      repo: "Fairuzzzzz/pokedex-api",
      tags: ["Go", "PostgreSQL", "REST API", "Third-party Integration"],
    },
    {
      title: "Ally AI Chat App",
      description:
        "Ally AI is a Flutter-based mobile application that provides an interactive chat interface powered by the Groq AI model.",
      repo: "Fairuzzzzz/ai-chat-app",
      tags: ["Flutter", "Dart", "Supabase", "Groq"],
    },
    {
      title: "Donut DocVQA",
      description:
        "Document Visual Question Answering implementation using the Donut Model.",
      repo: "Fairuzzzzz/Donut-Docvqa",
      tags: ["Python", "PyTorch", "Computer Vision", "NLP"],
    },
  ];

  const techStack = [
    "Go",
    "Python",
    "PostgreSQL",
    "MySQL",
    "PyTorch",
    "Figma",
    "REST API",
    "Git",
    "Docker",
    "Flutter",
    "Dart",
  ];

  const userInfo = {
    name: "Fairuz Afnan",
    title: "Software Developer & UI/UX Designer",
    location: "Yogyakarta, Indonesia",
    education: "Sekolah Vokasi, University of Gadjah Mada",
    bio: {
      intro: "An active student with expertise in both design and development.",
      specializations: [
        "Backend Development using Go",
        "UI/UX Design with proficiency in Figma",
        "Mobile Apps Development using Flutter",
        "Database Management (PostgreSQL, MySQL)",
      ],
      currentFocus: ["Mobile Apps Development", "Microservices Architecture"],
      outro:
        "Committed to continuous learning and professional growth in technology.",
    },
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-mono transition-colors duration-300">
      <main className="max-w-4xl mx-auto p-6 md:p-12 space-y-16">
        {/* About Section */}
        <section className="space-y-8">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">{userInfo.name}</h1>
              <p className="text-xl text-black/70 dark:text-white/70">
                {userInfo.title}
              </p>
              <p className="text-sm text-black/60 dark:text-white/60">
                {userInfo.location}
              </p>
              <p className="text-sm text-black/60 dark:text-white/60">
                {userInfo.education}
              </p>
            </div>
            <Button variant="outline" size="icon" onClick={toggleDarkMode}>
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-black/80 dark:text-white/80">
              {userInfo.bio.intro}
            </p>

            <div className="space-y-4">
              <h3 className="font-semibold">Specializing in:</h3>
              <ul className="space-y-2 pl-4">
                {userInfo.bio.specializations.map((item, index) => (
                  <li
                    key={index}
                    className="text-black/80 dark:text-white/80 before:content-['•'] before:mr-2 before:text-black/60 dark:before:text-white/60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Currently focused on:</h3>
              <ul className="space-y-2 pl-4">
                {userInfo.bio.currentFocus.map((item, index) => (
                  <li
                    key={index}
                    className="text-black/80 dark:text-white/80 before:content-['•'] before:mr-2 before:text-black/60 dark:before:text-white/60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-black/80 dark:text-white/80 italic">
              {userInfo.bio.outro}
            </p>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold"># Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-black/10 dark:bg-white/10 rounded-md text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold"># Projects</h2>
          <div className="grid gap-6">
            {projects.map((project) => (
              <a
                key={project.title}
                href={`https://github.com/${project.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-black/5 dark:bg-white/5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-black/70 dark:text-white/70 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-black/10 dark:bg-white/10 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Social Links Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold"># Connect</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/Fairuzzzzz" target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/fairuzafnan/"
                target="_blank"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:fairuz.afnan@gmail.com">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 dark:border-white/10 p-6 text-center text-black/60 dark:text-white/60">
        <p>© 2024 Fairuz Afnan. All rights reserved.</p>
      </footer>
    </div>
  );
}
