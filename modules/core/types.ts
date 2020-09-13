export interface Experience {
  experienceId: number;
  name: string;
  roleName: string;
  experienceDetails: ExperienceDetail[];
  technologies: Technology[];
  startDate: Date;
  endDate: Date | null;
  companyUrl: string;
}

export interface Project {
  projectId: number;
  name: string;
  tagline: string;
  githubUrl: string;
  demoUrl: string | null;
  fileName: string;
  projectDetails?: ProjectDetail[];
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
  highlightedNames?: string[];
  shortName?: string;
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
  description: string;
}

export interface ProjectDetail {
  projectDetailId: number;
  description: string;
}

export interface SkillLevel {
  skillLevelId: number;
  description: string;
  technology: Technology;
}
