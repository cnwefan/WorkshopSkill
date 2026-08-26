import React from 'react';
import { GraduationCap, Clock, Calendar, ChevronRight, MoreVertical, Filter, Search } from 'lucide-react';

const mockPlans = [
  { 
    id: 'P-1001', 
    title: 'Precision Welding L3 Certification', 
    employee: 'Zhang Wei', 
    target: 'Station A04', 
    progress: 65, 
    deadline: '2026-09-15',
    status: 'IN_PROGRESS',
    items: 4
  },
  { 
    id: 'P-1002', 
    title: 'Robot Arm Maintenance Intro', 
    employee: 'Li Wei', 
    target: 'Main Line', 
    progress: 20, 
    deadline: '2026-10-01',
    status: 'IN_PROGRESS',
    items: 6
  },
  { 
    id: 'P-1003', 
    title: 'Safety Protocol Refresher', 
    employee: 'Chen Hao', 
    target: 'All Areas', 
    progress: 100, 
    deadline: '2026-08-20',
    status: 'COMPLETED',
    items: 2
  },
];

interface TrainingPlansProps {
  onDetails?: () => void;
}

export function TrainingPlans({ onDetails }: TrainingPlansProps) {
  return (
    <div className="space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Training Management</h1>
          <p className="text-slate-500">Monitor and manage skill development programs.</p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold shadow-md hover:bg-indigo-700 transition-colors">
          Create New Plan
        </button>
      </header>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search plans, employees..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-50">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-50">
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {mockPlans.map(plan => (
          <div key={plan.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-200 transition-all group">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold text-slate-400 tracking-wider">{plan.id}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    plan.status === 'COMPLETED' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {plan.status.replace('_', ' ')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{plan.title}</h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    Employee: <span className="text-slate-900">{plan.employee}</span>
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    Target: <span className="text-slate-900">{plan.target}</span>
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    Deadline: <span className="text-slate-900">{plan.deadline}</span>
                  </span>
                </div>
              </div>

              <div className="lg:w-64 space-y-2">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-500">Progress</span>
                  <span className="text-indigo-600">{plan.progress}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-500 ${plan.status === 'COMPLETED' ? 'bg-green-500' : 'bg-indigo-600'}`}
                    style={{ width: `${plan.progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
                  <span>{plan.items} Modules</span>
                  <span>{plan.progress === 100 ? 'Verified' : 'In Review'}</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 shrink-0">
                <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                  <MoreVertical className="w-5 h-5" />
                </button>
                <button 
                  onClick={onDetails}
                  className="flex items-center gap-1 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-all"
                >
                  Details <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
