import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 border-b border-[#1e1830] bg-black">
      <Link href="/" className="font-mono text-sm font-semibold tracking-widest text-[#ededed] hover:text-white transition-colors">
        AU
      </Link>
      <div className="flex items-center gap-8 font-mono text-xs tracking-widest text-[#a3a3a3] uppercase">
        <Link href="/work" className="hover:text-[#ededed] transition-colors">Work</Link>
        <Link href="/projects" className="hover:text-[#ededed] transition-colors">Projects</Link>
        <a href="/Azim_Latex_Resume_V1.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#ededed] transition-colors">CV</a>
        <Link href="/contact" className="hover:text-[#ededed] transition-colors">Contact</Link>
      </div>
    </nav>
  );
}
