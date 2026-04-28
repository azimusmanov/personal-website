export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-8 py-24 flex flex-col gap-16">
      <div>
        <p className="font-mono text-xs tracking-widest text-[#525252] uppercase mb-6">Direct</p>
        <a
          href="mailto:azimusmanov2027@u.northwestern.edu"
          className="group inline-flex items-center gap-4 font-mono text-2xl text-[#ededed] hover:text-white transition-colors"
        >
          azimusmanov2027@u.northwestern.edu
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 shrink-0 group-hover:bg-green-400 transition-colors" />
        </a>
      </div>

      <div>
        <p className="font-mono text-xs tracking-widest text-[#525252] uppercase mb-6">
          GitHub / LinkedIn
        </p>
        <div className="flex flex-col gap-5">
          <a
            href="https://github.com/azimusmanov"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-2xl text-[#ededed] hover:text-white transition-colors"
          >
            github.com/azimusmanov
          </a>
          <a
            href="https://www.linkedin.com/in/azimusmanov77/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-2xl text-[#ededed] hover:text-white transition-colors"
          >
            linkedin.com/in/azimusmanov77
          </a>
        </div>
      </div>
    </div>
  );
}
