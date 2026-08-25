import { SkillGap, Skill } from '../types';

export interface SkillBaseline {
  skillId: number;
  requiredLevel: number;
}

export interface EmployeeSkill {
  skillId: number;
  currentLevel: number;
}

/**
 * Core Business Logic: Skill Gap Engine
 * Calculate dynamic skill gaps (Baseline - Actual = Gap)
 */
export function calculateSkillGaps(
  baselines: SkillBaseline[],
  actuals: EmployeeSkill[],
  skillsLibrary: Skill[]
): SkillGap[] {
  return baselines.map(baseline => {
    const skill = skillsLibrary.find(s => s.id === baseline.skillId);
    const actual = actuals.find(a => a.skillId === baseline.skillId);
    
    const currentLevel = actual ? actual.currentLevel : 0;
    const gap = Math.max(0, baseline.requiredLevel - currentLevel);
    
    return {
      skillId: baseline.skillId,
      skillName: skill ? skill.name : 'Unknown Skill',
      requiredLevel: baseline.requiredLevel,
      currentLevel: currentLevel,
      gap: gap
    };
  }).filter(item => item.gap > 0);
}

/**
 * Auto-decouple gaps into Theory Courses and Practical Hours
 */
export function decoupleGapToTrainingItems(gap: SkillGap) {
  const items = [];
  
  if (gap.gap > 0) {
    // Every gap requires at least one theory module if it's a new level
    items.push({
      type: 'THEORY',
      name: `${gap.skillName} Level ${gap.requiredLevel} Theory`,
      targetHours: 2.0
    });
    
    // Practical hours calculation: 10 hours per gap level
    items.push({
      type: 'MES_PRACTICAL',
      name: `${gap.skillName} Level ${gap.requiredLevel} On-job Training`,
      targetHours: gap.gap * 10
    });
  }
  
  return items;
}
