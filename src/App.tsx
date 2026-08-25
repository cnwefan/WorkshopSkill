import React, { useState, useEffect } from 'react';
import { UserRole, AppView } from './types';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { WorkerDashboard } from './components/WorkerDashboard';
import { MentorDashboard } from './components/MentorDashboard';
import { SupervisorDashboard } from './components/SupervisorDashboard';
import { SkillRoadmap } from './components/SkillRoadmap';
import { TrainingPlans } from './components/TrainingPlans';

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
    if (currentView === 'TRAINING_PLANS') return <TrainingPlans />;

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
