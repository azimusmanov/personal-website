import Image from "next/image";

const jobs = [
  {
    id: 1,
    company: "BriteCo",
    role: "Software Engineer Intern",
    period: "Jan 2026 – Mar 2026",
    location: "Evanston, IL · Hybrid",
    logo: "/briteco-icon.png",
    logoAlt: "BriteCo logo",
    tags: ["Python", "Docker", "GitHub Actions", "CI/CD"],
    description: "Migrated 10+ internal services from legacy APIs to a scalable backend architecture, analyzing dependencies across 100+ repositories to support migration planning. Modified repositories to enable GitHub Actions with runtime secret injection into Docker images for CI workflows.",
  },
  {
    id: 2,
    company: "ComEd",
    role: "Software Engineer Intern",
    period: "Jun 2025 – Aug 2025",
    location: "Joliet, IL · Hybrid",
    logo: "/comedlogo.png",
    logoAlt: "ComEd logo",
    tags: ["VBA", "Microsoft Excel", "SCADA"],
    description: "Automated an Excel–Access data transfer pipeline via VBA, cutting processing time by 45%, and migrated 500+ pages of switch number records into a standardized sheet, reducing lookup time by 53%. Updated customer counts in SCADA for 20+ substations using OMS data.",
  },
  {
    id: 3,
    company: "Sensify Recycling",
    role: "Software Engineer Intern",
    period: "Nov 2024 – Jun 2025",
    location: "Evanston, IL · On-site",
    logo: "/sensifylogo.png",
    logoAlt: "Sensify logo",
    tags: ["Python", "Raspberry Pi", "Amazon S3", "Computer Vision"],
    description: "Built a Raspberry Pi data capture pipeline in Python to capture images and upload them to Amazon S3, and engineered an object detection pipeline with bounding box visualization. Developed a benchmarking script to compare classification accuracy and response time across LLMs via API calls.",
  },
  {
    id: 4,
    company: "Outlier AI",
    role: "LLM QA Analyst",
    period: "Jun 2024 – Sep 2024",
    location: "Remote",
    logo: "/outleirlogo.svg",
    logoAlt: "Outlier logo",
    tags: ["Python", "RLHF", "Prompt Engineering"],
    description: "Completed 70+ RLHF evaluations on AI-generated responses across single and multi-turn conversations, improving API tool choice accuracy. Wrote and refined prompts to train LLMs across code, math, and conversational tasks.",
  },
  {
    id: 5,
    company: "Kumon",
    role: "Teaching Assistant",
    period: "Sep 2022 – May 2023",
    location: "Ossining, NY",
    logo: "/kumonlogo.png",
    logoAlt: "Kumon logo",
    tags: ["Teaching", "Mathematics"],
    description: "Assisted students with math and reading worksheets, grading work and tracking individual progress. Provided one-on-one guidance to reinforce foundational skills and independent problem-solving habits.",
  },
];

export default function Work() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-24">
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
              <p className="text-[#a3a3a3] text-sm leading-relaxed">{job.description}</p>
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
