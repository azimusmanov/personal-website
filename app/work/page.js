import Image from "next/image";

const jobs = [
  {
    id: 1,
    company: "BriteCo",
    role: "Software Engineer Intern",
    period: "Jan 2026 – Mar 2026",
    location: "Evanston, IL · Hybrid",
    logo: null,
    logoAlt: "BriteCo",
    tags: ["Python", "Git"],
    description:
      "Developed backend systems and APIs, strengthening backend development skills. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    company: "ComEd",
    role: "Software Engineer Intern",
    period: "Jun 2025 – Aug 2025",
    location: "Joliet, IL · Hybrid",
    logo: "/comedlogo.png",
    logoAlt: "ComEd logo",
    tags: ["VBA", "Microsoft Excel"],
    description:
      "Developed VBA scripts to automate data migration across internal systems, reducing manual effort and improving data accuracy.",
  },
  {
    id: 3,
    company: "Sensify",
    role: "Software Engineer Intern",
    period: "Nov 2024 – Aug 2025",
    location: "Evanston, IL · On-site",
    logo: "/sensifylogo.png",
    logoAlt: "Sensify logo",
    tags: ["Python", "Embedded Systems"],
    description:
      "Northwestern Startup (The Garage). Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    id: 4,
    company: "Outlier",
    role: "LLM QA Analyst",
    period: "Jun 2024 – Sep 2024",
    location: "Remote",
    logo: "/outleirlogo.svg",
    logoAlt: "Outlier logo",
    tags: ["Python", "RLHF"],
    description:
      "Reinforcement learning from human feedback (RLHF). Evaluated and ranked model outputs to improve LLM quality and alignment.",
  },
  {
    id: 5,
    company: "Kumon",
    role: "Teaching Assistant",
    period: "Sep 2022 – May 2023",
    location: "Lorem City, IL",
    logo: "/kumonlogo.png",
    logoAlt: "Kumon logo",
    tags: ["Teaching", "Mathematics"],
    description:
      "Assisted students with Kumon math and reading worksheets, grading completed work and tracking individual progress. Provided one-on-one guidance to help students work through problems independently, reinforcing foundational skills and building study habits.",
  },
];

export default function Work() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-24">
      <div className="mb-16">
        <p className="font-mono text-xs tracking-widest text-[#7c5cbf] uppercase mb-4">02</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">Work</h1>
        <p className="text-[#a3a3a3] text-lg">Experience, most recent first.</p>
      </div>

      <div className="flex flex-col divide-y divide-[#1e1830]">
        {jobs.map((job) => (
          <article key={job.id} className="py-12 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
            {/* Logo + meta */}
            <div className="flex flex-col gap-4">
              <div className="w-16 h-16 bg-white border border-[#1e1830] flex items-center justify-center overflow-hidden p-2">
                {job.logo ? (
                  <Image
                    src={job.logo}
                    alt={job.logoAlt}
                    width={48}
                    height={48}
                    className="object-contain w-full h-full"
                  />
                ) : (
                  <span className="font-mono text-[10px] font-bold text-[#09060e] text-center leading-tight">
                    {job.company}
                  </span>
                )}
              </div>
              <div>
                <p className="font-mono text-xs text-[#525252] leading-relaxed">{job.period}</p>
                <p className="font-mono text-xs text-[#525252]">{job.location}</p>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-xl font-semibold text-white">{job.company}</h2>
                <p className="text-[#a3a3a3] font-mono text-sm">{job.role}</p>
              </div>
              <p className="text-[#a3a3a3] leading-relaxed text-sm">{job.description}</p>
              <div className="flex gap-2 flex-wrap">
                {job.tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs text-[#7c5cbf] border border-[#1e1830] px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
