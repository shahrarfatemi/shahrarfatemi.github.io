import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, Globe, Briefcase, GraduationCap, Code2, Award, ArrowRight } from "lucide-react";

// === HOW TO USE ===
// 1) Replace the placeholder text (NAME, ROLE, BIO, links, etc.).
// 2) Add your real projects/publications.
// 3) This single file is a complete, modern portfolio page.
//    It uses Tailwind utility classes. In most setups Tailwind is preloaded.
//    If not, you can still keep the structure and add your own CSS.

const SectionTitle = ({ icon: Icon, title, subtitle }) => (
  <div className="mb-6 flex items-center gap-3">
    <div className="rounded-2xl p-2 shadow-sm ring-1 ring-black/5 dark:ring-white/10">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      )}
    </div>
  </div>
);

const Chip = ({ children }) => (
  <span className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
    {children}
  </span>
);

const Card = ({ children }) => (
  <div className="rounded-2xl border bg-white/60 p-5 shadow-sm backdrop-blur dark:bg-zinc-900/60">
    {children}
  </div>
);

function PortfolioSite() {
  // Editable profile info
  const PROFILE = {
    name: "Md Shahrar Fatemi",
    role: "PhD Student · Medical NLP, Causal Learning with AI",
    location: "New York, USA",
    bio: "Short bio: what you do, your research/industry focus, and what you're looking for.",
    email: "shahrar007@gmail.com",
    links: {
      github: "https://github.com/shahrarfatemi/",
      linkedin: "https://www.linkedin.com/in/md-shahrar-fatemi-9b7977141/",
      website: "https://shahrarfatemi.github.io/",
      cv: "https://drive.google.com/file/d/1v6gq4NWZl-scfCHZpw_FikVEMSif7z4Q/view", // link to a hosted PDF resume/CV
    },
    skills: [
      "Machine Learning",
      "Time Series",
      "NLP",
      "PyTorch",
      "React",
      "Statistics",
      "Signal Processing",
    ],
  };

  const PROJECTS = [
    {
      title: "LiftSafe: Wearable-based Failure Detection",
      description:
        "Real-time IMU-based coaching system predicting rep failure and providing actionable feedback.",
      tags: ["IMU", "Forecasting", "React", "Python"],
      link: "#",
    },
    {
      title: "Clinical Coding Assistant",
      description:
        "Dual-encoder + cross-encoder hybrid for large ontology retrieval (ICD).",
      tags: ["Retrieval", "Contrastive Learning", "Longformer"],
      link: "#",
    },
  ];

  const PUBLICATIONS = [
    {
      title:
        "Utilizing a Single Wearable Sensor for Indicating Muscle Failure during Strength Training",
      venue: "Journal / Conference · 2025",
      authors: "Your Name*, Coauthor, Advisor",
      link: "#",
    },
    {
      title:
        "Gene Tree Parsimony in the Presence of Gene Duplication, Loss, and ILS",
      venue: "Venue · 2024",
      authors: "Your Name, Coauthor, Advisor",
      link: "#",
    },
  ];

  const EXPERIENCE = [
    {
      org: "Stony Brook University",
      role: "PhD Researcher",
      period: "2024 — Present",
      bullets: [
        "Researching wearable-based strength training analytics (IMU, forecasting, anomaly detection).",
        "Built real-time web app for rep detection & prediction using a foundation time-series model.",
      ],
    },
    {
      org: "Company / Lab",
      role: "Position",
      period: "2022 — 2024",
      bullets: [
        "Brief highlights of impactful work (metrics, users, publications).",
      ],
    },
  ];

  const CONTACT_ITEMS = [
    {
      label: "Email",
      icon: Mail,
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
    },
    {
      label: "GitHub",
      icon: Github,
      value: PROFILE.links.github.replace("https://", ""),
      href: PROFILE.links.github,
    },
    {
      label: "LinkedIn",
      icon: Linkedin,
      value: PROFILE.links.linkedin.replace("https://", ""),
      href: PROFILE.links.linkedin,
    },
    {
      label: "Website",
      icon: Globe,
      value: PROFILE.links.website.replace("https://", ""),
      href: PROFILE.links.website,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 text-zinc-900 dark:from-zinc-950 dark:to-zinc-900 dark:text-zinc-50">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur dark:bg-zinc-950/60">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <a href="#home" className="text-sm font-semibold tracking-tight">
            {PROFILE.name}
          </a>
          <nav className="flex items-center gap-3 text-sm">
            <a className="hover:underline" href="#projects">Projects</a>
            <a className="hover:underline" href="#publications">Publications</a>
            <a className="hover:underline" href="#experience">Experience</a>
            <a className="hover:underline" href="#contact">Contact</a>
            {PROFILE.links.cv !== "#" && (
              <a
                className="rounded-full border px-3 py-1 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                href={PROFILE.links.cv}
                target="_blank" rel="noreferrer"
              >
                <FileText className="mr-1 inline h-4 w-4" /> CV
              </a>
            )}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-5xl px-4 py-14">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-6 text-sm text-muted-foreground">{PROFILE.location}</div>
          <h1 className="mb-2 text-3xl font-semibold tracking-tight sm:text-4xl">{PROFILE.name}</h1>
          <p className="mb-4 text-lg text-muted-foreground">{PROFILE.role}</p>
          <p className="max-w-2xl text-balance leading-relaxed text-zinc-700 dark:text-zinc-300">
            {PROFILE.bio}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <a href={PROFILE.links.github} className="rounded-full border px-3 py-1 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800"><Github className="mr-2 inline h-4 w-4"/>GitHub</a>
            <a href={PROFILE.links.linkedin} className="rounded-full border px-3 py-1 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800"><Linkedin className="mr-2 inline h-4 w-4"/>LinkedIn</a>
            {PROFILE.links.website && (
              <a href={PROFILE.links.website} className="rounded-full border px-3 py-1 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800"><Globe className="mr-2 inline h-4 w-4"/>Website</a>
            )}
            <a href={`mailto:${PROFILE.email}`} className="rounded-full border px-3 py-1 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800"><Mail className="mr-2 inline h-4 w-4"/>Contact</a>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {PROFILE.skills.map((s) => (<Chip key={s}>{s}</Chip>))}
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-5xl px-4 py-8">
        <SectionTitle icon={Briefcase} title="Projects" subtitle="Selected work" />
        <div className="grid gap-5 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <Card key={p.title}>
              <h3 className="text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (<Chip key={t}>{t}</Chip>))}
              </div>
              <a href={p.link} className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:underline">
                View project <ArrowRight className="ml-1 h-4 w-4"/>
              </a>
            </Card>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="mx-auto max-w-5xl px-4 py-8">
        <SectionTitle icon={GraduationCap} title="Publications" subtitle="Peer-reviewed & preprints" />
        <div className="grid gap-5">
          {PUBLICATIONS.map((pub) => (
            <Card key={pub.title}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold">{pub.title}</h3>
                  <p className="text-sm text-muted-foreground">{pub.authors}</p>
                  <p className="text-sm text-muted-foreground">{pub.venue}</p>
                </div>
                <a href={pub.link} className="mt-2 inline-flex items-center text-sm font-medium text-blue-600 hover:underline sm:mt-0">
                  PDF / Link <ArrowRight className="ml-1 h-4 w-4"/>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-5xl px-4 py-8">
        <SectionTitle icon={Code2} title="Experience" subtitle="Industry & research" />
        <div className="grid gap-5">
          {EXPERIENCE.map((exp) => (
            <Card key={exp.org + exp.period}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold">{exp.role} · {exp.org}</h3>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                {exp.bullets.map((b, i) => 
                  (<li key={i}>{b}</li>))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Highlights / Awards (optional) */}
      <section className="mx-auto max-w-5xl px-4 py-8">
        <SectionTitle icon={Award} title="Highlights" subtitle="Awards · Media · Teaching" />
        <div className="grid gap-5 sm:grid-cols-2">
          <Card>
            <h3 className="text-base font-semibold">Best Paper Award</h3>
            <p className="mt-2 text-sm text-muted-foreground">Conference 2024</p>
          </Card>
          <Card>
            <h3 className="text-base font-semibold">Teaching Assistant</h3>
            <p className="mt-2 text-sm text-muted-foreground">CSE 5xx · NLP · 2025</p>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-4 py-8">
        <SectionTitle icon={Mail} title="Get in touch" subtitle="I’m open to collaborations and opportunities" />
        <Card>
          <div className="grid gap-4 sm:grid-cols-2">
            {CONTACT_ITEMS.map((c) => {
              const Icon = c.icon; // <-- capitalize
              return (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-3 rounded-xl border p-3 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                >
                  <Icon className="h-5 w-5" />
                  <div>
                    <div className="text-sm font-medium">{c.label}</div>
                    <div className="text-sm text-muted-foreground">{c.value}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </Card>
      </section>


      {/* Footer */}
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <div className="mx-auto max-w-5xl px-4">
          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default function App() { return <PortfolioSite /> }

