export enum Level {
  /**
   * 了解
   */
  UNDERSTAND = 1,
  /**
   * 熟悉
   */
  KNOW_ALL_ABOUT = 2,
  /**
   * 掌握
   */
  MASTER = 3,
  /**
   * 熟练
   */
  SKILLED = 4,
  /**
   * 精通
   */
  EXPERT = 5,
}

export interface ISkill {
  name: string;
  level: Level;
}

export interface IWorkExperience {
  companyName: string;
  rangeTime: string;
  position: string;
  workContent?: string;
}

export interface IProject {
  projectName: string;
  projectTime: string;
  projectContent: any;
  projectSourcePath?: string;
}

export interface IEducation {
  universityEducationalBackground: string;
  universityName: string;
  universityTime: string;
  universityMajor: string;
  universityExperience: string;
}

export interface IInfo {
  avatar: string;
  name: string;
  job: string;
  experience: string;
  age: number;
  weChat: string;
  email: string;
  mobile: string;
  realMobile: string;
  education: IEducation;
  location: string;
  github: string;
  skills: ISkill[];
  workExperience: IWorkExperience[];
}
