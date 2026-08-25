export type UserRole = 'WORKER' | 'MENTOR' | 'SUPERVISOR' | 'HR_ADMIN' | 'QC' | 'SYS_ADMIN';
export type AppView = 'DASHBOARD' | 'SKILL_ROADMAP' | 'TRAINING_PLANS' | 'TEAM_MATRIX' | 'ASSESSMENTS' | 'AUDIT_LOGS' | 'SETTINGS';

export interface User {
  id: string;
  employeeNo: string;
  realName: string;
  workshopId: number | null;
  roles: UserRole[];
}

export interface Skill {
  id: number;
  code: string;
  name: string;
  category: string;
}

export interface SkillGap {
  skillId: number;
  skillName: string;
  requiredLevel: number;
  currentLevel: number;
  gap: number;
}

export interface TrainingPlan {
  id: string;
  planNo: string;
  employeeId: string;
  targetStationId: number;
  status: 'DRAFT' | 'IN_PROGRESS' | 'ASSESSING' | 'COMPLETED' | 'REJECTED';
  createdAt: string;
}
