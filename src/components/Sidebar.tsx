import React from 'react';
import { UserRole, AppView } from '../types';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  ClipboardList, 
  Settings, 
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Target
} from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  isOpen: boolean;
  currentRole: UserRole;
  currentView: AppView;
  onViewChange: (view: AppView) => void;
  onToggle: () => void;
}

export function Sidebar({ isOpen, currentRole, currentView, onViewChange, onToggle }: SidebarProps) {
  const menuItems: { icon: any, label: string, roles: UserRole[], id: AppView }[] = [
    { id: 'DASHBOARD', icon: LayoutDashboard, label: 'Dashboard', roles: ['WORKER', 'MENTOR', 'SUPERVISOR', 'HR_ADMIN', 'QC', 'SYS_ADMIN'] },
    { id: 'SKILL_ROADMAP', icon: Target, label: 'Skill Roadmap', roles: ['WORKER'] },
    { id: 'TRAINING_PLANS', icon: GraduationCap, label: 'Training Plans', roles: ['WORKER', 'MENTOR', 'SUPERVISOR'] },
    { id: 'TEAM_MATRIX', icon: Users, label: 'Team Matrix', roles: ['SUPERVISOR', 'HR_ADMIN'] },
    { id: 'ASSESSMENTS', icon: ShieldCheck, label: 'Assessments', roles: ['MENTOR', 'QC'] },
    { id: 'AUDIT_LOGS', icon: ClipboardList, label: 'Audit Logs', roles: ['SYS_ADMIN', 'HR_ADMIN'] },
    { id: 'SETTINGS', icon: Settings, label: 'Settings', roles: ['SYS_ADMIN'] },
  ];

  const filteredItems = menuItems.filter(item => item.roles.includes(currentRole));

  return (
    <aside 
      className={cn(
        "bg-white border-r border-slate-200 transition-all duration-300 flex flex-col relative shrink-0",
        isOpen ? "w-64" : "w-20"
      )}
    >
      <div className="flex-1 py-6 flex flex-col gap-1 px-3">
        {filteredItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group w-full",
              currentView === item.id ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
            )}
          >
            <item.icon className={cn("w-5 h-5 shrink-0", currentView === item.id ? "text-indigo-600" : "text-slate-400 group-hover:text-indigo-500")} />
            {isOpen && <span className="font-medium text-sm">{item.label}</span>}
          </button>
        ))}
      </div>

      <button 
        onClick={onToggle}
        className="absolute -right-3 top-20 w-6 h-6 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-indigo-600 shadow-sm z-40 transition-colors"
      >
        {isOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </button>

      <div className="p-4 border-t border-slate-100">
        <div className={cn(
          "bg-indigo-900 rounded-xl p-3 text-indigo-100 transition-all",
          isOpen ? "block" : "hidden lg:hidden"
        )}>
          <p className="text-xs font-bold uppercase tracking-wider opacity-60 mb-1">Workshop Area</p>
          <p className="text-sm font-semibold truncate">Discrete Assy - A04</p>
        </div>
      </div>
    </aside>
  );
}
