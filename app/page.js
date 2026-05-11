import Link from "next/link";
import BackgroundEffect from "@/app/components/BackgroundEffect";

export default function Home() {
  return (
    <>
    <BackgroundEffect />
    <div className="max-w-5xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-[1fr_280px] gap-24">
      {/* Left — hero */}
      <div className="flex flex-col gap-16">
        <div>
          <p className="font-mono text-xs tracking-widest text-[#7c5cbf] uppercase mb-4">
            Nice to meet you. I&apos;m
          </p>
          <h1 className="text-6xl md:text-7xl font-bold leading-none tracking-tight text-white mb-6">
            Azim Usmanov.
          </h1>
          <p className="text-lg text-[#a3a3a3] leading-relaxed max-w-lg">
            Computer Engineering @ Northwestern University. Minor in Machine Learning.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <section>
            <p className="font-mono text-xs tracking-widest text-[#7c5cbf] uppercase mb-3">About</p>
            <p className="text-[#a3a3a3] leading-relaxed">
              I&apos;m a computer engineering student at Northwestern University, pursuing a minor in
              Machine Learning through the McCormick MLDS program. I&apos;m interested in software
              development, embedded systems, and IoT devices. My coursework focuses on the
              intersection of software and hardware — an area I want to continue growing in
              academically and professionally.
            </p>
          </section>

          <section>
            <p className="font-mono text-xs tracking-widest text-[#7c5cbf] uppercase mb-3">Outside of CE</p>
            <p className="text-[#a3a3a3] leading-relaxed">
              I enjoy playing and watching basketball, producing music, playing guitar, and sailing.
            </p>
          </section>

          <section>
            <p className="font-mono text-xs tracking-widest text-[#7c5cbf] uppercase mb-3">Currently</p>
            <p className="text-[#ededed]">Junior at Northwestern University, studying Computer Engineering with a minor in Machine Learning.</p>
          </section>

          <section>
            <p className="font-mono text-xs tracking-widest text-[#7c5cbf] uppercase mb-3">Previously</p>
            <div className="flex flex-col gap-1 text-[#a3a3a3]">
              <p>BriteCo (software engineering)</p>
              <p>ComEd (software engineering)</p>
              <p>Sensify (software engineering)</p>
              <p>Outlier (LLM QA)</p>
              <p>Kumon (teaching)</p>
            </div>
          </section>
        </div>

        <div className="flex gap-4">
          <Link href="/work" className="font-mono text-xs tracking-widest uppercase px-5 py-3 border border-[#1e1830] text-[#a3a3a3] hover:border-[#7c5cbf] hover:text-[#ededed] transition-all">
            Work
          </Link>
          <Link href="/projects" className="font-mono text-xs tracking-widest uppercase px-5 py-3 border border-[#1e1830] text-[#a3a3a3] hover:border-[#7c5cbf] hover:text-[#ededed] transition-all">
            Projects
          </Link>
        </div>
      </div>

      {/* Right — links */}
      <div className="flex flex-col gap-10 pt-2">
        <div>
          <p className="font-mono text-xs tracking-widest text-[#7c5cbf] uppercase mb-4">Links</p>
          <div className="flex flex-col gap-3 font-mono text-sm text-[#a3a3a3]">
            <a href="mailto:azimusmanov2027@u.northwestern.edu" className="hover:text-white transition-colors flex items-center gap-2">
              Email <span className="text-[#7c5cbf]">·</span>
            </a>
            <a href="https://github.com/azimusmanov" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              GitHub <span className="text-[#7c5cbf]">·</span>
            </a>
            <a href="https://www.linkedin.com/in/azimusmanov77/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              LinkedIn <span className="text-[#7c5cbf]">·</span>
            </a>
          </div>
        </div>

        <div>
          <p className="font-mono text-xs tracking-widest text-[#7c5cbf] uppercase mb-4">Docs</p>
          <a
            href="/Azim_Latex_Resume_V1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-4 py-3 border border-[#1e1830] text-[#a3a3a3] hover:border-[#7c5cbf] hover:text-[#ededed] transition-all" style={{ backgroundColor: '#000000' }}
          >
            Download CV <span className="text-[#7c5cbf]">.pdf</span>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
