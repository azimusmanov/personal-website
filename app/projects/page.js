const projects = [
  {
    id: 1,
    title: "IMN Law Firm Website",
    subtitle: "Professional Marketing Site for IMN Law",
    description:
      "Designed and developed a professional marketing website for a law firm, focusing on clean presentation and user experience. Built with Next.js and deployed on Vercel.",
    tags: ["Next.js", "React", "Vercel"],
    link: "http://imnlawfirm.com",
  },
  {
    id: 2,
    title: "SteadyStep",
    subtitle: "Gait Analysis Healthtech Wearable · IEEE Best Impact Award",
    description:
      "Built with a team of 5 for IEEE, SteadyStep is a wearable device that analyzes how you walk and detects irregularities in real time, winning the Best Impact Award. It streams motion data from a custom-designed lightweight shoe attachment to a web dashboard that gives instant feedback and disease risks on your gait.",
    tags: ["C", "ESP32", "Python", "FastAPI", "WebSockets", "React"],
    link: "https://steadystep.azimusmanov.com",
  },
  {
    id: 3,
    title: "WildCatch",
    subtitle: "Pokémon GO-Inspired Study Game",
    description:
      "Worked in a team of four to develop a Pokémon GO-inspired study web app, utilizing the user's GPS location to spawn and capture quiz characters across Northwestern's campus, reinforcing learning via the method of loci. Built and deployed a Node.js/Express REST API on Railway, integrating Supabase across 4 relational tables.",
    tags: ["JavaScript", "Supabase", "Railway", "Node.js"],
    link: "https://github.com/rohvvn/wildhacks2026",
  },
  {
    id: 4,
    title: "Gesture-Controlled Robotic Arm",
    subtitle: "Computer Engineering Capstone Project",
    description:
      "Designed firmware for the HiWonder LeArm (6-DOF robotic arm) controlled via hand gestures using an MPU-6050 IMU accelerometer and flex sensor for real-time finger and wrist tracking.",
    tags: ["ESP32", "C++", "Arduino", "Robotics"],
    link: "https://www.youtube.com/watch?v=E3Fcq4fxuDs",
  },
  {
    id: 5,
    title: "YogaPal",
    subtitle: "Real-Time Yoga Pose Classification System",
    description:
      "Real-time yoga pose classification and correction system using MediaPipe Pose and a Random Forest model. Designed a Flask UI backed by FastAPI to track reps, stream JSON feedback, and generate session summaries. Reduced jitter and misclassifications via EMA + debounce filtering, along with visibility gating for ground poses.",
    tags: ["Python", "MediaPipe", "OpenCV", "Flask"],
    link: "https://github.com/azimusmanov/yoga_pal",
  },
  {
    id: 6,
    title: "Iron Man Gauntlet",
    subtitle: "Comp E. 346 Final Project",
    description:
      "Wearable Iron Man-inspired gauntlet designed to bring fictional tech to life. Uses sensors to detect arm and finger movements — raising the hand lights up a repulsor LED and plays a sound, raising the middle finger triggers Back in Black by AC/DC, and snapping causes six infinity stone LEDs to light up with a matching sound effect.",
    tags: ["Microbit V2", "C", "Circuit Design"],
    link: "https://youtube.com/shorts/XP0y9XYDE2Q",
  },
  {
    id: 7,
    title: "MizaAI",
    subtitle: "Wildhacks 2025",
    description:
      "Inspired by Wildhacks 2025's theme \"Choose Your Own Adventure,\" built Miza to help students take control of their time and break free from distractions. Users describe study goals via voice input; Miza uses Google Gemini to generate a personalized dashboard with a timer and checklist. Tracks browser activity via a Chrome extension and uses eye tracking to assess attention levels, labeling visited sites as productive or unproductive.",
    tags: ["Python", "Gemini API", "OpenCV"],
    link: "https://devpost.com/software/lockedin-with-gemini",
  },
];

export default function Projects() {
  return (
    <div className="py-24">
      <div className="max-w-5xl mx-auto px-8 mb-16">
        <p className="font-mono text-xs tracking-widest text-[#7c5cbf] uppercase mb-4">03</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">Projects</h1>
        <p className="text-[#a3a3a3] text-lg">Things I&apos;ve built.</p>
      </div>

      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => {
            const Wrapper = project.link ? "a" : "div";
            const wrapperProps = project.link
              ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
              : {};
            const isRightCol = index % 2 === 1;

            return (
              <Wrapper
                key={project.id}
                {...wrapperProps}
                className={`group bg-[#09060e] pt-8 pb-8 flex flex-col gap-4 transition-all duration-200 hover:bg-[#110d1a] cursor-pointer border-b border-[#1e1830] ${isRightCol ? "pl-8 border-l border-[#1e1830]" : "pr-8"}`}
              >
                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex flex-col gap-0.5">
                      <h2 className="font-semibold text-white text-base leading-snug group-hover:text-white/90 transition-colors">
                        {project.title}
                      </h2>
                      {project.subtitle && (
                        <p className="font-mono text-xs text-[#7c5cbf]">{project.subtitle}</p>
                      )}
                    </div>
                    {project.link && (
                      <span className="font-mono text-xs text-[#525252] group-hover:text-[#7c5cbf] transition-colors shrink-0 mt-0.5">
                        ↗
                      </span>
                    )}
                  </div>
                  <p className="text-[#a3a3a3] text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap pt-3 border-t border-[#262626]">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs text-[#7c5cbf]">
                      {tag} ·
                    </span>
                  ))}
                </div>
              </Wrapper>
            );
          })}
          {projects.length % 2 !== 0 && (
            <div className="bg-[#09060e] border-l border-b border-[#1e1830]" />
          )}
        </div>
      </div>
    </div>
  );
}
