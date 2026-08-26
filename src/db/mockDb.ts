import { User, Skill, TrainingPlan, UserRole } from '../types';

export interface Station {
  id: number;
  workshopId: number;
  code: string;
  name: string;
}

export interface StationSkillBaseline {
  stationId: number;
  skillId: number;
  requiredLevel: number;
  requiredMesHours: number;
}

export interface EmployeeSkill {
  employeeId: string;
  skillId: number;
  currentLevel: number;
}

class MockDatabase {
  users: User[] = [];
  skills: Skill[] = [];
  workshops: { id: number; code: string; name: string }[] = [];
  stations: Station[] = [];
  baselines: StationSkillBaseline[] = [];
  employeeSkills: EmployeeSkill[] = [];
  trainingPlans: any[] = [];

  constructor() {
    this.seed();
  }

  seed() {
    // 1. Workshops
    this.workshops = [
      { id: 1, code: 'W04', name: 'Workshop A04' }
    ];

    // 2. Users & Roles
    this.users = [
      { id: '10042', employeeNo: 'E10042', realName: 'Zhang Wei', workshopId: 1, roles: ['WORKER', 'SUPERVISOR'] },
      { id: '10043', employeeNo: 'E10043', realName: 'Li Wei', workshopId: 1, roles: ['WORKER'] },
      { id: '10044', employeeNo: 'E10044', realName: 'Chen Hao', workshopId: 1, roles: ['WORKER', 'MENTOR'] },
      { id: '10045', employeeNo: 'E10045', realName: 'Wang Yang', workshopId: 1, roles: ['WORKER'] },
      { id: '10046', employeeNo: 'E10046', realName: 'Li Meili', workshopId: 1, roles: ['WORKER'] },
      { id: '10047', employeeNo: 'E10047', realName: 'Sun Qiang', workshopId: 1, roles: ['WORKER'] },
      { id: '10048', employeeNo: 'E10048', realName: 'Zhao Lei', workshopId: 1, roles: ['WORKER'] },
      { id: '10049', employeeNo: 'E10049', realName: 'Zhou Jie', workshopId: 1, roles: ['WORKER'] },
      { id: '10050', employeeNo: 'E10050', realName: 'Wu Gang', workshopId: 1, roles: ['WORKER'] },
      { id: '10051', employeeNo: 'E10051', realName: 'Zheng He', workshopId: 1, roles: ['WORKER'] },
      { id: '10052', employeeNo: 'E10052', realName: 'Feng Yun', workshopId: 1, roles: ['WORKER'] },
      { id: '10053', employeeNo: 'E10053', realName: 'Chu Tian', workshopId: 1, roles: ['WORKER'] },
      // ... adding more mock users to fill up
      ...Array.from({ length: 30 }, (_, i) => ({
        id: (10054 + i).toString(),
        employeeNo: `E${10054 + i}`,
        realName: `Operator ${i + 13}`,
        workshopId: 1,
        roles: ['WORKER' as UserRole]
      }))
    ];

    // 3. Skills Library
    this.skills = [
      { id: 1, code: 'WELD-01', name: 'Manual Arc Welding', category: 'WELDING' },
      { id: 2, code: 'WELD-02', name: 'Robot Teaching', category: 'WELDING' },
      { id: 3, code: 'ASSY-01', name: 'General Assembly', category: 'ASSEMBLY' },
      { id: 4, code: 'ASSY-02', name: 'Precision Torque', category: 'ASSEMBLY' },
      { id: 5, code: 'QUAL-01', name: 'Quality Inspection', category: 'QUALITY' },
      { id: 6, code: 'SAFE-01', name: 'Basic Safety', category: 'SAFETY' },
    ];

    // 4. Stations
    this.stations = [
      { id: 1, workshopId: 1, code: 'ST-WELD-A', name: 'Welding Station A' },
      { id: 2, workshopId: 1, code: 'ST-ASSY-01', name: 'Assy Line 01' },
      { id: 3, workshopId: 1, code: 'ST-ASSY-02', name: 'Assy Line 02' },
      { id: 4, workshopId: 1, code: 'ST-QUAL-C', name: 'Quality Hub C' },
    ];

    // 5. Station Skill Baselines (What is required for each station)
    this.baselines = [
      { stationId: 1, skillId: 1, requiredLevel: 4, requiredMesHours: 40 },
      { stationId: 1, skillId: 2, requiredLevel: 3, requiredMesHours: 20 },
      { stationId: 2, skillId: 3, requiredLevel: 3, requiredMesHours: 10 },
      { stationId: 3, skillId: 4, requiredLevel: 4, requiredMesHours: 30 },
      { stationId: 4, skillId: 5, requiredLevel: 4, requiredMesHours: 50 },
    ];

    // 6. Current Employee Skills (Actuals)
    this.employeeSkills = [
      { employeeId: '10042', skillId: 1, currentLevel: 3 },
      { employeeId: '10042', skillId: 3, currentLevel: 4 },
      { employeeId: '10043', skillId: 1, currentLevel: 1 },
      { employeeId: '10044', skillId: 1, currentLevel: 4 },
      { employeeId: '10045', skillId: 5, currentLevel: 3 },
    ];
  }

  getWorkshops() { return this.workshops; }
  getEmployee(id: string) {
    return this.users.find(u => u.id === id || u.employeeNo === id);
  }
  getSkills() { return this.skills; }
  getStations() { return this.stations; }
  getBaselines() { return this.baselines; }
  getEmployeeSkills(employeeId: string) {
    return this.employeeSkills.filter(s => s.employeeId === employeeId);
  }
}

export const mockDb = new MockDatabase();
