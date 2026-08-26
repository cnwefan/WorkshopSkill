import React from 'react';
import { UserRole, AppView } from '../types';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { 
  Users, 
  TrendingDown, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  ArrowRight,
  Filter,
  BarChart as BarChartIcon
} from 'lucide-react';
import { SkillMatrix } from './SkillMatrix';
import { cn } from '../lib/utils';

const mockStats = [
  { label: 'Total Operators', value: '42', change: '+2', trend: 'up' },
  { label: 'Average Skill Level', value: '2.8', change: '+0.3', trend: 'up' },
  { label: 'Bottleneck Stations', value: '4', change: '-1', trend: 'down' },
  { label: 'Pending Approvals', value: '7', change: 'Urgent', trend: 'alert' },
];

const stationData = [
  { name: 'Welding', actual: 4, baseline: 5 },
  { name: 'Assy-01', actual: 8, baseline: 8 },
  { name: 'Assy-02', actual: 3, baseline: 6 },
  { name: 'Quality', actual: 5, baseline: 4 },
  { name: 'Packing', actual: 6, baseline: 6 },
];

const COLORS = ['#4f46e5', '#8b5cf6', '#0ea5e9', '#10b981', '#f59e0b', '#ef4444'];

interface SupervisorDashboardProps {
  role: UserRole;
  onViewChange: (view: AppView) => void;
}

export function SupervisorDashboard({ role, onViewChange }: SupervisorDashboardProps) {
  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">{role} Dashboard</h1>
          <p className="text-slate-500">Workshop A04 Capacity & Skill Overview</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors shadow-sm">
            <Filter className="w-4 h-4" />
            Filters
          </button>
          <button 
            onClick={() => onViewChange('TRAINING_PLANS')}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
          >
            Generate Plan
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockStats.map((stat, idx) => (
          <div 
            key={idx} 
            onClick={() => idx === 0 ? onViewChange('OPERATOR_LIST') : idx === 3 ? onViewChange('APPROVAL_CENTER') : null}
            className={cn(
              "bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group transition-all",
              (idx === 0 || idx === 3) && "cursor-pointer hover:border-indigo-300 hover:shadow-md"
            )}
          >
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.label}</h3>
            <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            <div className={`mt-2 text-xs font-bold ${stat.trend === 'up' ? 'text-green-600' : stat.trend === 'down' ? 'text-blue-600' : 'text-red-600'}`}>
              {stat.change}
            </div>
            <div className={`absolute -right-2 -bottom-2 opacity-5 group-hover:scale-110 transition-transform`}>
              {idx === 0 ? <Users className="w-16 h-16" /> : <BarChartIcon className="w-16 h-16" />}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SkillMatrix />
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm self-start">
          <h2 className="font-bold text-slate-900 mb-6">Pending Training Approvals</h2>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm">LW</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 truncate">Li Wei</p>
                  <p className="text-xs text-slate-500">Precision Welding - L2</p>
                </div>
                <button 
                  onClick={() => onViewChange('APPROVAL_CENTER')}
                  className="opacity-0 group-hover:opacity-100 p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
            <button 
              onClick={() => onViewChange('APPROVAL_CENTER')}
              className="w-full py-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 text-center mt-2 border-t border-slate-50 pt-4"
            >
              View All Approvals
            </button>
          </div>
        </div>
      </div>

      <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="font-bold text-slate-900">Critical Skill Bottlenecks</h2>
          <span className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">High Priority</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Station</th>
                <th className="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Skill Required</th>
                <th className="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider text-center">Gap (Headcount)</th>
                <th className="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Plan Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-6 py-4 text-sm font-bold text-slate-900">Assy-Line-02</td>
                <td className="px-6 py-4 text-sm text-slate-600">Robot Teaching</td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-red-600 font-bold bg-red-50 px-2 py-1 rounded-lg">-3</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <span className="text-xs font-medium text-slate-600">2 Plans In Progress</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-bold text-slate-900">Welding-B</td>
                <td className="px-6 py-4 text-sm text-slate-600">Aluminum Pulsed Arc</td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-amber-600 font-bold bg-amber-50 px-2 py-1 rounded-lg">-1</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs font-medium text-slate-600">On Schedule</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
