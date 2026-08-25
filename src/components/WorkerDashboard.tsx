import React from 'react';
import { UserRole, AppView } from '../types';
import { Award, BookOpen, Clock, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { 
  ResponsiveContainer, 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis 
} from 'recharts';

const mockSkillData = [
  { subject: 'Welding', A: 80, fullMark: 100 },
  { subject: 'Quality', A: 90, fullMark: 100 },
  { subject: 'Assy', A: 70, fullMark: 100 },
  { subject: 'Safety', A: 100, fullMark: 100 },
  { subject: 'Maintenance', A: 60, fullMark: 100 },
];

const mockPlans = [
  { id: 1, title: 'Precision Welding L3', type: 'PRACTICAL', progress: 65, targetHours: 40, completedHours: 26, status: 'IN_PROGRESS' },
  { id: 2, title: 'Advanced Safety Cert', type: 'THEORY', progress: 100, status: 'COMPLETED' },
];

interface WorkerDashboardProps {
  onViewChange: (view: AppView) => void;
}

export function WorkerDashboard({ onViewChange }: WorkerDashboardProps) {
  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Worker Workspace</h1>
          <p className="text-slate-500">Welcome back, your training progress is on track.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => onViewChange('SKILL_ROADMAP')}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
          >
            View Skill Roadmap
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-slate-800">Skill Distribution</h2>
            <TrendingUp className="w-4 h-4 text-slate-400" />
          </div>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={mockSkillData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Skills"
                  dataKey="A"
                  stroke="#4f46e5"
                  fill="#4f46e5"
                  fillOpacity={0.5}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              Active Training Plans
            </h2>
            <div className="space-y-4">
              {mockPlans.map(plan => (
                <div key={plan.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white transition-all hover:shadow-md group">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-1 inline-block ${plan.type === 'THEORY' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>
                        {plan.type}
                      </span>
                      <h3 className="font-bold text-slate-900">{plan.title}</h3>
                    </div>
                    {plan.status === 'COMPLETED' ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <div className="text-right">
                        <span className="text-sm font-bold text-indigo-600">{plan.progress}%</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="w-full bg-slate-200 rounded-full h-2 mb-3 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${plan.progress}%` }}
                      className={`h-full ${plan.status === 'COMPLETED' ? 'bg-green-500' : 'bg-indigo-600'}`}
                    />
                  </div>
                  
                  {plan.type === 'PRACTICAL' && (
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {plan.completedHours} / {plan.targetHours} Hours
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-3.5 h-3.5" />
                        Target: Level 3
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-indigo-600 rounded-2xl p-6 text-white shadow-lg shadow-indigo-200">
              <h3 className="font-medium text-indigo-100 mb-1">Total MES Hours</h3>
              <p className="text-3xl font-bold">124.5</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-indigo-200">
                <span className="bg-white/20 px-2 py-1 rounded-full">+12.4h this month</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-slate-500 mb-1">Upcoming Assessment</h3>
                <p className="text-lg font-bold text-slate-900 truncate">Station A04 Verification</p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-amber-600 font-semibold">
                <AlertCircle className="w-4 h-4" />
                Scheduled for Aug 28, 09:00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
