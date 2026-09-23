"use client";

import { useState, type FormEvent } from "react";
import { Mail, Send, Twitter, ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "./ui/Reveal";

const CONTACT_EMAIL = "contact@sosjournal.com";

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
    value: "@sosjournal",
    href: "https://t.me/sosjournal",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    value: "@sosjournal",
    href: "https://twitter.com/sosjournal",
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
    <section id="contact" className="relative py-28 md:py-32 bg-[#0A0A0C] overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[400px] rounded-full bg-[#C9A84C]/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#7C3AED]/6 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: pitch + direct channels */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold block mb-4">
                Get In Touch
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                Let&apos;s Build Your{" "}
                <span className="text-gold-gradient">Arabic Community.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/65 text-base leading-relaxed mb-10 max-w-md">
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
                      className="group flex items-center gap-4 rounded-xl p-4 glass hover:border-[#C9A84C]/30 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 group-hover:bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0 transition-colors">
                        <Icon size={17} className="text-[#C9A84C]" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-white/50 text-xs">{channel.label}</div>
                        <div className="text-white text-sm font-medium truncate">
                          {channel.value}
                        </div>
                      </div>
                      <ArrowRight
                        size={16}
                        className="ml-auto text-white/30 group-hover:text-[#C9A84C] group-hover:translate-x-1 transition-all flex-shrink-0"
                      />
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Right: form */}
          <Reveal delay={0.15} direction="right" className="lg:col-span-7">
            <div className="rounded-2xl bg-[#141416] border border-white/5 p-7 sm:p-10">
              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-14 h-14 rounded-full bg-[#C9A84C]/15 flex items-center justify-center mb-5">
                    <CheckCircle2 size={26} className="text-[#C9A84C]" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    Your email client just opened
                  </h3>
                  <p className="text-white/60 text-sm max-w-sm">
                    Send the pre-filled message and we&apos;ll get back to you within
                    one business day. Didn&apos;t open?{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-[#C9A84C] hover:text-[#E2C97E] underline underline-offset-2"
                    >
                      Email us directly
                    </a>
                    .
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm text-white/50 hover:text-white transition-colors"
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
                        className="block text-white/70 text-xs font-medium tracking-wide uppercase mb-2"
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
                        className="w-full rounded-xl bg-[#0B0B0D] border border-white/10 px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-[#C9A84C]/50 transition-colors outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="project"
                        className="block text-white/70 text-xs font-medium tracking-wide uppercase mb-2"
                      >
                        Project
                      </label>
                      <input
                        id="project"
                        type="text"
                        value={project}
                        onChange={(e) => setProject(e.target.value)}
                        placeholder="Your project name"
                        className="w-full rounded-xl bg-[#0B0B0D] border border-white/10 px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-[#C9A84C]/50 transition-colors outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white/70 text-xs font-medium tracking-wide uppercase mb-2"
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
                      className="w-full rounded-xl bg-[#0B0B0D] border border-white/10 px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-[#C9A84C]/50 transition-colors outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white/70 text-xs font-medium tracking-wide uppercase mb-2"
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
                      className="w-full rounded-xl bg-[#0B0B0D] border border-white/10 px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-[#C9A84C]/50 transition-colors outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C9A84C] to-[#E2C97E] text-black font-bold text-sm shadow-[0_0_25px_rgba(201,168,76,0.25)] hover:shadow-[0_0_35px_rgba(201,168,76,0.4)] transition-all duration-300"
                  >
                    Send Message
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-white/35 text-xs">
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
