import AppShell from "./components/AppShell";
import { getProfile, getExperiences, getProjects } from "./lib/api";

export const revalidate = 60; // Optional: revalidate every 60s for the profile

export default async function Home() {
  const profile = await getProfile();
  const apiExperiences = await getExperiences();
  const apiProjects = await getProjects();

  return (
    <AppShell
      profile={profile}
      apiExperiences={apiExperiences}
      apiProjects={apiProjects}
    />
  );
}
