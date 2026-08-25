import { User, Skill, TrainingPlan } from '../types';

// In-memory "database" for the prototype
class MockDatabase {
  users: User[] = [
    { id: '10042', employeeNo: 'E10042', realName: 'Zhang Wei', workshopId: 1, roles: ['WORKER', 'SUPERVISOR'] },
    { id: '10043', employeeNo: 'E10043', realName: 'Li Wei', workshopId: 1, roles: ['WORKER'] },
    { id: '10044', employeeNo: 'E10044', realName: 'Chen Hao', workshopId: 1, roles: ['WORKER', 'MENTOR'] },
  ];

  skills: Skill[] = [
    { id: 1, code: 'WELD-01', name: 'Manual Arc Welding', category: 'WELDING' },
    { id: 2, code: 'ASSY-01', name: 'General Assembly', category: 'ASSEMBLY' },
    { id: 3, code: 'QUAL-01', name: 'Quality Inspection', category: 'QUALITY' },
  ];

  workshops = [
    { id: 1, code: 'W04', name: 'Workshop A04' }
  ];

  trainingPlans: TrainingPlan[] = [];

  getWorkshops() { return this.workshops; }
  
  getEmployee(id: string) {
    return this.users.find(u => u.id === id || u.employeeNo === id);
  }

  addTrainingPlan(plan: TrainingPlan) {
    this.trainingPlans.push(plan);
  }
}

export const mockDb = new MockDatabase();
