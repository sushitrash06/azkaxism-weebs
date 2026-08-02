import Projects from "./components/Projects";
import ExperienceSection from "./components/ExperienceSection";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getProfile, getExperiences, getProjects } from "./lib/api";

export const revalidate = 60; // Optional: revalidate every 60s for the profile

export default async function Home() {
  const profile = await getProfile();
  const apiExperiences = await getExperiences();
  const apiProjects = await getProjects();

  return (
    <div className="min-h-screen selection:bg-comic-magenta selection:text-white">
      <Header />
      <main>
        <Hero profile={profile} />
        <Skills profile={profile} />
        <ExperienceSection apiExperiences={apiExperiences} />
        <Projects apiProjects={apiProjects} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}
