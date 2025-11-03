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
    role: "PhD Student · Stony Brook University",
    location: "New York, USA",
    bio: "I am a PhD student working on automatic medical coding, focusing on bridging the gap between AI-driven and manual methods through a human-in-the-loop framework. I am also open to research collaborations and internship opportunities.",
    email: "mfatemi[at]cs[dot]stonybrook[dot]edu",
    links: {
      github: "https://github.com/shahrarfatemi/",
      linkedin: "https://www.linkedin.com/in/md-shahrar-fatemi-9b7977141/",
      website: "https://shahrarfatemi.github.io/",
      cv: "https://drive.google.com/file/d/1N90k3ZwUnaOUcUUJInsAaxxiEfp5s1hp/view?usp=sharing", // link to a hosted PDF resume/CV
    },
    interests: [
      "Medical AI",
      "NLP",
      "Machine Learning",
      "RAG",
      "Knowledge Graphs"
    ],
  };

  const RESEARCH_PROJECTS = [
    {
      title: "Concept-Enhanced ICD Coding with Large Language Models",
      description:
        "Developed a novel framework for automatic ICD coding by integrating concept-level predictions with hierarchical ICD code structures. Leveraged Large Language Models (LLMs) to generate and utilize medical concept sets for enhanced interpretability and accuracy.",
      tags: ["Retrieval", "Concept Bottleneck Models", "LLMs", "Longformer", "In Context Learning"],
      link: "#",
    },
    {
      title: "Causal Discovery from unified Knowledge Graphs",
      description:
        "A framework that integrates multiple knowledge graphs into a unified representation and applies causal inference techniques to uncover cause–effect relationships among entities.",
      tags: ["Prompt Engineering", "LLM Agents", "Causal Discovery"],
      link: "#",
    },
    
  ];

  const SOFTWARE_PROJECTS = [
    {
      title: "Concept-Enhanced ICD Coding with Large Language Models",
      description:
        "Developed a novel framework for automatic ICD coding by integrating concept-level predictions with hierarchical ICD code structures. Leveraged Large Language Models (LLMs) to generate and utilize medical concept sets for enhanced interpretability and accuracy.",
      tags: ["Retrieval", "Concept Bottleneck Models", "LLMs", "Longformer", "In Context Learning"],
      link: "#",
    },
    {
      title: "LiftSafe: Wearable-based Failure Detection",
      description:
        "Real-time IMU-based coaching system predicting rep failure and providing actionable feedback.",
      tags: ["IMU", "Forecasting", "React", "Python"],
      link: "#",
    },
    
  ];

  const PUBLICATIONS = [
    
    {
      title:
        "Shonglap: A Large Bengali Open-Domain Dialogue Corpus",
      venue: "LREC - 2022",
      authors: "Syed Mostofa Monsur, Sakib Chowdhury, Md Shahrar Fatemi, Shafayat Ahmed",
      link: "https://aclanthology.org/2022.lrec-1.623.pdf",
    },
    {
      title:
        "Practical Analysis of Macromolecule Identity from Cryo-ET Images Using Deep Learning",
      venue: "Applied Imagery Pattern Recognition Workshop · 2021",
      authors: "Mostofa Rafid Uddin, Ajmain Yasar Ahmed, Kafi Khan, Md Shahrar Fatemi, Xiangrui Zeng, Min Xu",
      link: "https://ieeexplore.ieee.org/document/9762209",
    },
  ];

  const EXPERIENCE = [
    {
      org: "Stony Brook University",
      role: "PhD Researcher",
      period: "January, 2024 — Present",
      bullets: [
        "My primary research focuses on Automatic Medical Coding. Although this task remains highly challenging, significant opportunities exist to reduce the gap between AI-driven systems and traditional manual coding practices. Our work emphasizes the development of a human-in-the-loop framework designed to alleviate the workload and improve the efficiency of professional medical coders.",
      ],
    },
    {
      org: "BRAC University, Dhaka, Bangladesh",
      role: "Lecturer (on Study Leave)",
      period: "June, 2022 — July, 2023",
      bullets: [
        "Algorithms, Discrete Mathematics",
      ],
    },
    {
      org: "Bangladesh University of Engineering & Technology (BUET), Dhaka, Bangladesh",
      role: "Adjunct Lecturer",
      period: "November, 2022 — April, 2023",
      bullets: [
        "Data Communication, Structured Programming Language (Sessional), Data Structures & Algorithms (Sessional)",
      ],
    },
    {
      org: "Xulab at CMU",
      role: "Remote Research Intern (Voluntary)",
      period: "June, 2021 — December, 2022",
      bullets: [
        "Particle picking in Cryo-ET images using supervised and semi-supervised methods.",
      ],
    },
    {
      org: "Celloscope BD, Dhaka, Bangladesh",
      role: "Research Engineer",
      period: "December, 2021 — May, 2022",
      bullets: [
        "Speech diarization and speaker identiﬁcation models.",
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
                <FileText className="mr-1 inline h-4 w-4" /> Resume
              </a>
            )}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-5xl px-4 py-14">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <motion.img
            src="https://drive.google.com/file/d/1DhehkL_g07xJUXW_6CZ-PeJoOZ7xEZyz/view?usp=sharing"
            alt="Md Shahrar Fatemi headshot"
            initial={{ opacity: 0, scale: 0.98, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 h-28 w-28 rounded-full object-cover ring-2 ring-black/5 shadow-sm dark:ring-white/10 sm:h-32 sm:w-32"
          />

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
            <b> Areas of Interest </b>
            {PROFILE.interests.map((s) => (<Chip key={s}>{s}</Chip>))}
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-5xl px-4 py-8">
        <SectionTitle icon={Briefcase} title="Research Projects" subtitle="Selected work" />
        <div className="grid gap-5 sm:grid-cols-2">
          {RESEARCH_PROJECTS.map((p) => (
            <Card key={p.title}>
              <h3 className="text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (<Chip key={t}>{t}</Chip>))}
              </div>
              {/* <a href={p.link} className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:underline">
                View project <ArrowRight className="ml-1 h-4 w-4"/>
              </a> */}
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
            <h3 className="text-base font-semibold"><a href="https://www.computer.org/volunteering/awards/scholarships/upe-student-award/upe-winners" target="new">Upsilon Pi Epsilon Award 2021</a></h3>
            <p className="mt-2 text-sm text-muted-foreground">Global Honor</p>
          </Card>
          <Card>
            <h3 className="text-base font-semibold">Huawei BCC ICT Competition</h3>
            <p className="mt-2 text-sm text-muted-foreground">Certification for passing RS12-221 'HCIA Routing and Switching' Examination online. - 2021</p>
          </Card>
          <Card>
            <h3 className="text-base font-semibold">Dean's List Award, <a href="https://www.buet.ac.bd/web/" target="new">BUET, Dhaka</a></h3>
            <p className="mt-2 text-sm text-muted-foreground">Award and Technical scholarships in each of the academic semesters.</p>
          </Card>
          <Card>
            <h3 className="text-base font-semibold">University Merit List, <a href="https://www.buet.ac.bd/web/" target="new">BUET, Dhaka</a></h3>
            <p className="mt-2 text-sm text-muted-foreground">Ranked among the top 10% in each of the academic semesters.</p>
          </Card>
        </div>
      </section>
      
      {/* SW Projects */}
      {/* <section id="projects" className="mx-auto max-w-5xl px-4 py-8">
        <SectionTitle icon={Briefcase} title="Software Projects" subtitle="Selected work" />
        <div className="grid gap-5 sm:grid-cols-2">
          {SOFTWARE_PROJECTS.map((p) => (
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
      </section> */}


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

