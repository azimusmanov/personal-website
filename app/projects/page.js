const projects = [
  {
    id: 1,
    title: "IMN Law Firm Website",
    subtitle: null,
    description:
      "Developed a marketing website for a law firm. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Lorem", "Ipsum", "Web"],
    link: null,
  },
  {
    id: 2,
    title: "WildCatch",
    subtitle: "Pokémon GO-Inspired Study Game",
    description:
      "Worked in a team of four to develop a Pokémon GO-inspired study web app, utilizing the user's GPS location to spawn and capture quiz characters across Northwestern's campus, reinforcing learning via the method of loci. Built and deployed a Node.js/Express REST API on Railway, integrating Supabase across 4 relational tables.",
    tags: ["JavaScript", "Supabase", "Railway", "Node.js"],
    link: null,
  },
  {
    id: 3,
    title: "Gesture-Controlled Robotic Arm",
    subtitle: null,
    description:
      "Designed firmware for the HiWonder LeArm (6-DOF robotic arm) controlled via hand gestures using an MPU-6050 IMU accelerometer and flex sensor for real-time finger and wrist tracking.",
    tags: ["ESP32", "C++", "Arduino"],
    link: null,
  },
  {
    id: 4,
    title: "YogaPal",
    subtitle: "Real-Time Yoga Pose Classification System",
    description:
      "Real-time yoga pose classification and correction system using MediaPipe Pose and a Random Forest model. Designed a Flask UI backed by FastAPI to track reps, stream JSON feedback, and generate session summaries. Reduced jitter and misclassifications via EMA + debounce filtering, along with visibility gating for ground poses.",
    tags: ["Python", "MediaPipe", "OpenCV", "Flask"],
    link: null,
  },
  {
    id: 5,
    title: "Iron Man Gauntlet",
    subtitle: "Comp E. 346 Final Project",
    description:
      "Wearable Iron Man-inspired gauntlet designed to bring fictional tech to life. Uses sensors to detect arm and finger movements — raising the hand lights up a repulsor LED and plays a sound, raising the middle finger triggers Back in Black by AC/DC, and snapping causes six infinity stone LEDs to light up with a matching sound effect. Built over six weeks with a focus on embedded programming, sensor interfacing, and physical prototyping.",
    tags: ["Microbit V2", "Breadboarding & Soldering", "Sensors & Peripherals"],
    link: null,
  },
  {
    id: 6,
    title: "MizaAI",
    subtitle: "Wildhacks 2025",
    description:
      "Inspired by Wildhacks 2025's theme \"Choose Your Own Adventure,\" built Miza to help students take control of their time and break free from distractions. Users describe study goals via voice input; Miza uses Google Gemini to generate a personalized dashboard with a timer and checklist. Tracks browser activity via a Chrome extension and uses eye tracking to assess attention levels, labeling visited sites as productive or unproductive.",
    tags: ["Python", "Gemini API", "OpenCV"],
    link: null,
  },
];

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-24">
      <div className="mb-16">
        <p className="font-mono text-xs tracking-widest text-[#7c5cbf] uppercase mb-4">03</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">Projects</h1>
        <p className="text-[#a3a3a3] text-lg">Things I&apos;ve built.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#262626]">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group bg-[#0a0a0a] p-8 flex flex-col gap-4 transition-all duration-200 hover:bg-[#111111] hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)] cursor-pointer"
          >
            <div className="flex flex-col gap-1 flex-1">
              <div className="flex flex-col gap-0.5 mb-2">
                <h2 className="font-semibold text-white text-base leading-snug group-hover:text-white/90 transition-colors">
                  {project.title}
                </h2>
                {project.subtitle && (
                  <p className="font-mono text-xs text-[#7c5cbf]">{project.subtitle}</p>
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
          </article>
        ))}
      </div>
    </div>
  );
}
