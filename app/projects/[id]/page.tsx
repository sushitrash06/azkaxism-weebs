import { getProjectById } from '../../lib/api';
import Link from 'next/link';
import { MdArrowBack, MdOpenInNew, MdCode } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

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
    <div className="min-h-screen bg-comic-paper text-comic-black font-mono">
      {/* Navbar / Top Bar */}
      <nav className="p-4 md:p-6 border-b-4 border-comic-black bg-comic-yellow flex items-center shadow-[0_4px_0px_0px_rgba(26,26,26,1)] z-10 sticky top-0">
        <div className="max-w-6xl mx-auto w-full">
          <Link href="/#projects" className="inline-flex items-center gap-2 font-bold uppercase hover:text-comic-magenta transition-colors border-2 border-transparent hover:border-comic-black px-2 py-1 bg-white hover:bg-comic-cyan hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] transition-all active:translate-y-0 active:shadow-none">
            <MdArrowBack className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        {/* Header Section */}
        <div className="mb-12">
          <div className="inline-block bg-comic-black text-white px-6 md:px-10 py-3 md:py-4 mb-6 transform -rotate-1 shadow-[8px_8px_0px_0px_rgba(0,188,212,1)]">
            <h1 className="font-comic text-4xl md:text-6xl uppercase tracking-tighter">
              {project.title}
            </h1>
          </div>
          <p className="text-lg md:text-xl font-bold max-w-3xl opacity-80 whitespace-pre-wrap">
            {project.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content / Gallery */}
          <div className="lg:col-span-2 space-y-8">
            <div className="comic-panel p-2 bg-white">
              <div className="bg-comic-black font-comic text-white px-4 py-2 text-xl border-b-4 border-comic-black">
                GALLERY
              </div>
              <div className="p-4 space-y-6 bg-gray-50">
                {allImages.length > 0 ? (
                  allImages.map((img, idx) => (
                    <div key={idx} className="border-4 border-comic-black shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] overflow-hidden bg-white aspect-video relative flex items-center justify-center">
                      <img src={img} alt={`${project.title} screenshot ${idx + 1}`} className="w-full h-full object-contain" />
                    </div>
                  ))
                ) : (
                  <div className="aspect-video border-4 border-comic-black border-dashed flex flex-col items-center justify-center opacity-50">
                    <MdCode className="w-16 h-16 mb-2" />
                    <p className="font-bold">No images available</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar / Metadata */}
          <div className="space-y-8">
            <div className="comic-panel p-6 bg-comic-cyan text-comic-black">
              <h3 className="font-comic text-2xl mb-4 border-b-4 border-comic-black pb-2">PROJECT INFO</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold uppercase text-xs opacity-70 mb-1">Role</h4>
                  <p className="font-bold text-lg">{project.role}</p>
                </div>
                
                <div>
                  <h4 className="font-bold uppercase text-xs opacity-70 mb-1">Year</h4>
                  <p className="font-bold text-lg">{new Date(project.createdAt).getFullYear()}</p>
                </div>
                
                <div>
                  <h4 className="font-bold uppercase text-xs opacity-70 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStacks.map(tech => (
                      <span key={tech} className="text-[10px] md:text-xs font-mono font-bold uppercase py-1 px-2 bg-white border-2 border-comic-black shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="comic-panel p-6 bg-comic-yellow flex flex-col gap-4">
              <h3 className="font-comic text-2xl mb-2">LINKS</h3>
              
              {project.projectUrl && (
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="bg-comic-black text-white py-3 font-mono font-bold uppercase flex items-center justify-center gap-2 hover:bg-comic-cyan hover:text-comic-black transition-colors shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] active:translate-x-1 active:translate-y-1 active:shadow-none border-4 border-comic-black">
                  <MdOpenInNew className="w-5 h-5" /> Visit Live Site
                </a>
              )}
              
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-comic-black py-3 font-mono font-bold uppercase flex items-center justify-center gap-2 hover:bg-comic-magenta hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] active:translate-x-1 active:translate-y-1 active:shadow-none border-4 border-comic-black">
                  <FaGithub className="w-5 h-5" /> View Source
                </a>
              )}

              {!project.projectUrl && !project.githubUrl && (
                <p className="font-bold text-sm opacity-50 text-center">Internal / Private Project</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
