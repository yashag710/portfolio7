"use client";

import React, { useState, useEffect } from "react";
import {
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Github,
} from "lucide-react";
import { cn } from "../lib/utils";
import { toast } from "react-hot-toast";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });
    // Assuming your API returns { success: true }
    const data = await response.json();
    setSuccess(data.success);
  };

  useEffect(() => {
    if (success) {
      toast.success("Email sent successfully!", { position: "top-center" });
      setSuccess(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  }, [success]);

  return (
  <section id="contact">
    <footer className="relative overflow-hidden border-t border-neutral-800">
      <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:gap-16 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8">
            <div>              
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-200">
                Let&apos;s Connect
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed text-neutral-400">
                Ready to collaborate or have a project in mind? I&apos;m always open to new opportunities and interesting conversations.
              </p>
            </div>
              <div className="flex items-center space-x-4 sm:space-x-6">
              <a
                href="https://github.com/yashag710"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-full bg-neutral-900 p-2 sm:p-3 transition-all hover:bg-neutral-800"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-400 transition-colors group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/yash-agarwalcr710"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-full bg-neutral-900 p-3 transition-all hover:bg-neutral-800"
              >
                <Linkedin className="h-5 w-5 text-neutral-400 transition-colors group-hover:text-white" />
              </a>
              <a
                href="https://x.com/yashag710"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-full bg-neutral-900 p-3 transition-all hover:bg-neutral-800"
              >
                <Twitter className="h-5 w-5 text-neutral-400 transition-colors group-hover:text-white" />
              </a>
              <a
                href="https://www.instagram.com/yashagarwal710/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-full bg-neutral-900 p-3 transition-all hover:bg-neutral-800"
              >
                <Instagram className="h-5 w-5 text-neutral-400 transition-colors group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}         
          <div className="relative rounded-2xl border border-neutral-800 bg-neutral-900/50 p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/20 to-neutral-950/20 opacity-50" />
            <div className="relative">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-200">
                Send a Message
              </h3>              
              <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-neutral-400" htmlFor="name">
                    Name
                  </label>                  
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={cn(
                      "mt-1.5 sm:mt-2 block w-full rounded-md border border-neutral-800",
                      "bg-neutral-900/50 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base text-neutral-200",
                      "placeholder:text-neutral-500",
                      "focus:border-neutral-700 focus:outline-none focus:ring-1 focus:ring-neutral-700"
                    )}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-400" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={cn(
                      "mt-2 block w-full rounded-md border border-neutral-800",
                      "bg-neutral-900/50 px-4 py-2 text-neutral-200",
                      "placeholder:text-neutral-500",
                      "focus:border-neutral-700 focus:outline-none focus:ring-1 focus:ring-neutral-700"
                    )}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-400" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={cn(
                      "mt-2 block w-full rounded-md border border-neutral-800",
                      "bg-neutral-900/50 px-4 py-2 text-neutral-200",
                      "placeholder:text-neutral-500",
                      "focus:border-neutral-700 focus:outline-none focus:ring-1 focus:ring-neutral-700"
                    )}
                  />
                </div>                
                <button
                  type="submit"
                  className={cn(
                    "inline-flex items-center justify-center w-full sm:w-auto rounded-md",
                    "px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base",
                    "bg-neutral-200 text-neutral-900 hover:bg-neutral-300",
                    "font-medium transition-colors duration-200"
                  )}
                >
                  <Mail className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>
  );
}
