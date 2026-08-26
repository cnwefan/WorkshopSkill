import React, { useState, useEffect } from 'react';
import { UserRole, AppView } from './types';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { WorkerDashboard } from './components/WorkerDashboard';
import { MentorDashboard } from './components/MentorDashboard';
import { SupervisorDashboard } from './components/SupervisorDashboard';
import { SkillRoadmap } from './components/SkillRoadmap';
import { TrainingPlans } from './components/TrainingPlans';
import { TrainingPlanDetails } from './components/TrainingPlanDetails';
import { OperatorList } from './components/OperatorList';
import { ApprovalCenter } from './components/ApprovalCenter';
import { SkillMatrix } from './components/SkillMatrix';

export default function App() {
  const [currentRole, setCurrentRole] = useState<UserRole>('SUPERVISOR');
  const [currentView, setCurrentView] = useState<AppView>('DASHBOARD');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Reset view when role changes to avoid accessing restricted views
  useEffect(() => {
    setCurrentView('DASHBOARD');
  }, [currentRole]);

  const renderContent = () => {
    // Check specific views first
    if (currentView === 'SKILL_ROADMAP') return <SkillRoadmap />;
    if (currentView === 'TRAINING_PLANS') return <TrainingPlans onDetails={() => setCurrentView('PLAN_DETAILS')} />;
    if (currentView === 'PLAN_DETAILS') return <TrainingPlanDetails onBack={() => setCurrentView('TRAINING_PLANS')} />;
    if (currentView === 'OPERATOR_LIST') return <OperatorList onBack={() => setCurrentView('DASHBOARD')} />;
    if (currentView === 'APPROVAL_CENTER') return <ApprovalCenter onBack={() => setCurrentView('DASHBOARD')} />;
    if (currentView === 'TEAM_MATRIX') return <div className="space-y-6"><h1 className="text-2xl font-bold">Team Matrix</h1><SkillMatrix /></div>;
    if (currentView === 'ASSESSMENTS') return <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
      <h2 className="text-xl font-bold mb-2">Assessments Module</h2>
      <p className="text-slate-500 mb-4">Module is under development for this prototype.</p>
      <button onClick={() => setCurrentView('DASHBOARD')} className="text-indigo-600 font-bold hover:underline">Back to Dashboard</button>
    </div>;
    if (currentView === 'AUDIT_LOGS') return <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
      <h2 className="text-xl font-bold mb-2">System Audit Logs</h2>
      <p className="text-slate-500 mb-4">Module is under development for this prototype.</p>
      <button onClick={() => setCurrentView('DASHBOARD')} className="text-indigo-600 font-bold hover:underline">Back to Dashboard</button>
    </div>;
    if (currentView === 'SETTINGS') return <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
      <h2 className="text-xl font-bold mb-2">Settings</h2>
      <p className="text-slate-500 mb-4">Module is under development for this prototype.</p>
      <button onClick={() => setCurrentView('DASHBOARD')} className="text-indigo-600 font-bold hover:underline">Back to Dashboard</button>
    </div>;

    // Fallback to role-based dashboards
    switch (currentRole) {
      case 'WORKER':
        return <WorkerDashboard onViewChange={setCurrentView} />;
      case 'MENTOR':
        return <MentorDashboard />;
      case 'SUPERVISOR':
      case 'HR_ADMIN':
      case 'QC':
      case 'SYS_ADMIN':
        return <SupervisorDashboard role={currentRole} onViewChange={setCurrentView} />;
      default:
        return <WorkerDashboard onViewChange={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar 
        currentRole={currentRole} 
        onRoleChange={setCurrentRole} 
      />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          isOpen={isSidebarOpen} 
          currentRole={currentRole}
          currentView={currentView}
          onViewChange={setCurrentView}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
