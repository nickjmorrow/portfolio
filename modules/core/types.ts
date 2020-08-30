export interface Experience {
  experienceId: number;
  name: string;
  experienceDetails: ExperienceDetail[];
  technologies: Technology[];
  startDate: string;
  endDate: string | null;
  roleName: string;
  companyUrl: string;
}

export interface Project {
  projectId: number;
  name: string;
  tagline: string;
  githubUrl: string;
  demoUrl: string | null;
  fileName: string;
  projectDetails: ProjectDetail[];
  technologies: Technology[];
  orderId: number;
}

export interface Setting {
  settingId: string;
  value: string;
}

export interface Technology {
  technologyId: number;
  name: string;
  orderId: number | null;
  version: string | null;
}

export interface TechnologyType {
  technologyTypeId: number;
  name: string;
  orderId: number;
}

export interface ExperienceDetail {
  experienceDetailId: number;
  experience: Experience;
  description: string;
}

export interface ProjectDetail {
  projectDetailId: number;
  project: Project;
  description: string;
}

export interface SkillLevel {
  skillLevelId: number;
  description: string;
  technology: Technology;
}
