export interface Profile {
  id: string;
  userId: string;
  fullName: string;
  headline: string;
  bio: string;
  profileImage: string;
  bannerImage: string;
  cvUrl: string;
  skills: string[];
  services: string[];
  contactEmail: string;
  phoneNumber: string;
  location: string;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ApiProject {
  id: string;
  userId?: string;
  experienceId?: string | null;
  type?: string;
  title: string;
  description: string | null;
  thumbnail: string | null;
  images: string[];
  techStacks: string[];
  projectUrl: string | null;
  githubUrl: string | null;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiExperience {
  id: string;
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate: string | null;
  companyLogo: string | null;
  projects: ApiProject[];
}

export async function getProfile(): Promise<Profile | null> {
  const profileId = process.env.NEXT_PUBLIC_PROFILE_ID;
  const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!profileId || !apiUrl) return null;

  try {
    const res = await fetch(`${apiUrl}`, {
      cache: 'no-store',
      next: { revalidate: 0 }
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
}

export async function getExperiences(): Promise<ApiExperience[]> {
  const profileId = process.env.NEXT_PUBLIC_PROFILE_ID;
  if (!profileId) return [];

  try {
    const res = await fetch(`https://api.azkaxism.web.id/experiences/public/${profileId}`, {
      cache: 'no-store',
      next: { revalidate: 0 }
    });
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Error fetching experiences:", error);
    return [];
  }
}

export async function getProjects(): Promise<ApiProject[]> {
  const profileId = process.env.NEXT_PUBLIC_PROFILE_ID;
  if (!profileId) return [];

  try {
    const res = await fetch(`https://api.azkaxism.web.id/projects/public/${profileId}`, {
      cache: 'no-store',
      next: { revalidate: 0 }
    });
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function getProjectById(projectId: string): Promise<ApiProject | null> {
  const profileId = process.env.NEXT_PUBLIC_PROFILE_ID;
  if (!profileId) return null;

  try {
    const res = await fetch(`https://api.azkaxism.web.id/projects/public/${profileId}/${projectId}`, {
      cache: 'no-store',
      next: { revalidate: 0 }
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error fetching project details:", error);
    return null;
  }
}
