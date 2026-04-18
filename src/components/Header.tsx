import Link from "next/link";
import portfolioData from "@/data/portfolio.json";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white">
          {portfolioData.personal.name}
        </Link>
        <nav className="hidden md:flex gap-6">
          {["Projects", "Skills", "Experience"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
