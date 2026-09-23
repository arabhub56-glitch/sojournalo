"use client";

import { useState, type FormEvent } from "react";
import { Mail, Send, Twitter, ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "./ui/Reveal";

const CONTACT_EMAIL = "sojournalo@gmail.com";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: Send,
    label: "Telegram",
    value: "@Sojournalo",
    href: "https://t.me/Sojournalo",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    value: "@SoJournalo",
    href: "https://x.com/SoJournalo",
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [project, setProject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New inquiry from ${name}${project ? ` (${project})` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nProject: ${project}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 md:py-32 bg-paper overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[400px] rounded-full bg-teal/6 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo/6 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-teal-deep block mb-4">
                Get In Touch
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight mb-5">
                Let&apos;s Build Your{" "}
                <span className="italic text-brand-gradient">Arabic Community.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-ink/65 text-base leading-relaxed mb-10 max-w-md">
                Tell us about your project and where you&apos;re headed. We&apos;ll
                reply within one business day with next steps — or reach us directly
                below.
              </p>
            </Reveal>

            <div className="space-y-3">
              {channels.map((channel, i) => {
                const Icon = channel.icon;
                return (
                  <Reveal key={channel.label} delay={0.25 + i * 0.08}>
                    <a
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-xl p-4 glass hover:border-teal/30 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-teal/10 group-hover:bg-teal/20 flex items-center justify-center flex-shrink-0 transition-colors">
                        <Icon size={17} className="text-teal-deep" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-ink/50 text-xs">{channel.label}</div>
                        <div className="text-ink text-sm font-medium truncate">
                          {channel.value}
                        </div>
                      </div>
                      <ArrowRight
                        size={16}
                        className="ml-auto text-ink/30 group-hover:text-teal-deep group-hover:translate-x-1 transition-all flex-shrink-0"
                      />
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={0.15} direction="right" className="lg:col-span-7">
            <div className="rounded-2xl bg-paper-card border border-ink/8 p-7 sm:p-10">
              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-14 h-14 rounded-full bg-teal/15 flex items-center justify-center mb-5">
                    <CheckCircle2 size={26} className="text-teal-deep" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-2">
                    Your email client just opened
                  </h3>
                  <p className="text-ink/60 text-sm max-w-sm">
                    Send the pre-filled message and we&apos;ll get back to you within
                    one business day. Didn&apos;t open?{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-teal-deep hover:text-teal underline underline-offset-2"
                    >
                      Email us directly
                    </a>
                    .
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm text-ink/50 hover:text-ink transition-colors"
                  >
                    ← Edit and resend
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-ink/70 text-xs font-medium tracking-wide uppercase mb-2"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full rounded-xl bg-paper border border-ink/12 px-4 py-3 text-ink text-sm placeholder:text-ink/35 focus:border-teal/50 transition-colors outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="project"
                        className="block text-ink/70 text-xs font-medium tracking-wide uppercase mb-2"
                      >
                        Project
                      </label>
                      <input
                        id="project"
                        type="text"
                        value={project}
                        onChange={(e) => setProject(e.target.value)}
                        placeholder="Your project name"
                        className="w-full rounded-xl bg-paper border border-ink/12 px-4 py-3 text-ink text-sm placeholder:text-ink/35 focus:border-teal/50 transition-colors outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-ink/70 text-xs font-medium tracking-wide uppercase mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@project.com"
                      className="w-full rounded-xl bg-paper border border-ink/12 px-4 py-3 text-ink text-sm placeholder:text-ink/35 focus:border-teal/50 transition-colors outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-ink/70 text-xs font-medium tracking-wide uppercase mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your project and goals in MENA..."
                      className="w-full rounded-xl bg-paper border border-ink/12 px-4 py-3 text-ink text-sm placeholder:text-ink/35 focus:border-teal/50 transition-colors outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-ink text-paper font-bold text-sm hover:bg-teal-deep transition-colors duration-300"
                  >
                    Send Message
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-ink/40 text-xs">
                    This opens your email client with the message pre-filled — nothing
                    is sent from this page.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
