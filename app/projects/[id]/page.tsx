import { getProjectById } from '../../lib/api';
import Link from 'next/link';
import { MdArrowBack, MdOpenInNew, MdCode, MdDateRange, MdPersonOutline } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = await getProjectById(resolvedParams.id);

  if (!project) {
    return (
      <div className="min-h-screen bg-comic-paper p-8 flex flex-col items-center justify-center font-mono">
        <h1 className="text-4xl font-comic mb-4">PROJECT NOT FOUND</h1>
        <Link href="/" className="bg-comic-yellow border-4 border-comic-black px-6 py-2 hover:bg-comic-cyan hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] transition-all font-bold">
          GO BACK HOME
        </Link>
      </div>
    );
  }

  const allImages = project.thumbnail 
    ? [project.thumbnail, ...project.images.filter(img => img !== project.thumbnail)]
    : project.images;

  return (
    <div className="min-h-screen bg-comic-paper text-comic-black font-mono selection:bg-comic-magenta selection:text-white pb-20">
      {/* Navbar / Top Bar */}
      <nav className="p-4 md:p-6 border-b-4 border-comic-black bg-comic-yellow flex items-center shadow-[0_4px_0px_0px_rgba(26,26,26,1)] z-10 sticky top-0">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <Link href="/#projects" className="inline-flex items-center gap-2 font-bold uppercase hover:text-comic-magenta transition-colors border-2 border-transparent hover:border-comic-black px-2 py-1 bg-white hover:bg-comic-cyan hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] transition-all active:translate-y-0 active:shadow-none">
            <MdArrowBack className="w-5 h-5" />
            Back to Base
          </Link>
          <div className="font-comic text-xl hidden sm:block">ARTIFACT DETAILS</div>
        </div>
      </nav>

      {/* Hero Banner / Cover */}
      {project.thumbnail && (
        <div className="w-full h-[30vh] md:h-[45vh] bg-comic-black relative overflow-hidden border-b-4 border-comic-black flex items-center justify-center">
          <div className="absolute inset-0 bg-repeat bg-[length:24px_24px] opacity-20" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)" }}></div>
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-auto h-full max-w-5xl object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] z-10 p-4"
          />
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Main Content (Left Col) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Header Section */}
            <div>
              <div className="inline-block bg-comic-magenta text-white px-4 py-1 mb-4 border-2 border-comic-black shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] transform -rotate-1 font-bold text-xs uppercase tracking-widest">
                {project.type || 'PROJECT'}
              </div>
              <h1 className="font-comic text-4xl sm:text-5xl md:text-7xl uppercase tracking-tighter leading-none mb-6 text-comic-black drop-shadow-[2px_2px_0px_rgba(255,210,30,1)]">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 font-mono text-sm font-bold opacity-70 mb-8 border-l-4 border-comic-magenta pl-4 py-1">
                <div className="flex items-center gap-2">
                  <MdPersonOutline className="w-5 h-5 text-comic-cyan" />
                  <span>{project.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdDateRange className="w-5 h-5 text-comic-yellow" />
                  <span>{new Date(project.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
                </div>
              </div>
            </div>

            {/* Description (Markdown) */}
            <div className="comic-panel p-6 md:p-10 bg-white">
              <div className="comic-prose max-w-none">
                {project.description ? (
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {project.description}
                  </ReactMarkdown>
                ) : (
                  <p className="italic opacity-60">No detailed description provided for this project.</p>
                )}
              </div>
            </div>

            {/* Full Gallery */}
            {allImages.length > 1 && (
              <div className="space-y-6">
                <h3 className="font-comic text-3xl md:text-4xl uppercase border-b-4 border-comic-black pb-2 inline-block">
                  Visual Assets
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {allImages.map((img, idx) => (
                    <div key={idx} className="comic-panel overflow-hidden bg-white relative group aspect-[4/5]">
                      <img 
                        src={img} 
                        alt={`${project.title} screenshot ${idx + 1}`} 
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar / Metadata (Right Col) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Tech Stack */}
            <div className="comic-panel p-6 bg-comic-cyan text-comic-black transform lg:rotate-1 hover:rotate-0 transition-transform">
              <h3 className="font-comic text-2xl mb-4 border-b-4 border-comic-black pb-2">SYSTEM STACK</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStacks.map(tech => (
                  <span key={tech} className="text-[11px] md:text-xs font-mono font-bold uppercase py-1.5 px-3 bg-white border-2 border-comic-black shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(255,0,110,1)] transition-all cursor-default">
                    {tech}
                  </span>
                ))}
                {project.techStacks.length === 0 && (
                  <span className="opacity-50 text-sm italic">Classified</span>
                )}
              </div>
            </div>

            {/* Links / Actions */}
            <div className="comic-panel p-6 bg-comic-yellow flex flex-col gap-4 transform lg:-rotate-1 hover:rotate-0 transition-transform">
              <h3 className="font-comic text-2xl mb-2 border-b-4 border-comic-black pb-2">COMMAND CENTER</h3>
              
              {project.projectUrl ? (
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="bg-comic-black text-white py-3 md:py-4 font-mono font-bold uppercase flex items-center justify-center gap-2 hover:bg-comic-cyan hover:text-comic-black transition-colors shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] active:translate-x-1 active:translate-y-1 active:shadow-none border-4 border-comic-black text-sm md:text-base group">
                  <MdOpenInNew className="w-5 h-5 group-hover:animate-bounce" /> LAUNCH LIVE SITE
                </a>
              ) : (
                <div className="bg-comic-paper text-comic-black/40 py-3 font-mono font-bold uppercase flex items-center justify-center gap-2 border-4 border-comic-black/20 text-sm cursor-not-allowed">
                  <MdOpenInNew className="w-5 h-5" /> SITE OFFLINE
                </div>
              )}
              
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-comic-black py-3 md:py-4 font-mono font-bold uppercase flex items-center justify-center gap-2 hover:bg-comic-magenta hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] active:translate-x-1 active:translate-y-1 active:shadow-none border-4 border-comic-black text-sm md:text-base group">
                  <FaGithub className="w-5 h-5 group-hover:rotate-12 transition-transform" /> VIEW SOURCE CODE
                </a>
              ) : (
                <div className="bg-comic-paper text-comic-black/40 py-3 font-mono font-bold uppercase flex items-center justify-center gap-2 border-4 border-comic-black/20 text-sm cursor-not-allowed">
                  <FaGithub className="w-5 h-5" /> REPO IS PRIVATE
                </div>
              )}
            </div>

            {/* Extra flavor panel */}
            <div className="p-6 border-4 border-comic-black bg-[radial-gradient(#1A1A1A_1px,transparent_1px)] bg-[size:10px_10px] bg-white relative">
              <div className="absolute inset-0 bg-comic-paper opacity-90"></div>
              <div className="relative z-10 text-center">
                <p className="font-comic text-xl text-comic-magenta uppercase mb-2">Notice</p>
                <p className="font-mono text-xs font-bold leading-relaxed opacity-80">
                  This artifact has been successfully retrieved from the archives. Handle with care.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
