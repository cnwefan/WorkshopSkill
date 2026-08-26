import React from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  User as UserIcon, 
  Factory,
  ShieldCheck,
  MoreVertical,
  Calendar
} from 'lucide-react';
import { AppView } from '../types';

interface ApprovalCenterProps {
  onBack: () => void;
}

const mockApprovals = [
  { 
    id: 'APP-001', 
    employee: 'Li Wei', 
    skill: 'Precision Welding', 
    targetLevel: 3, 
    requestedAt: '2026-08-25 14:20', 
    type: 'SKILL_UPGRADE',
    description: 'Completed 40h MES training and passed mentor evaluation.' 
  },
  { 
    id: 'APP-002', 
    employee: 'Chen Hao', 
    skill: 'Robot Teaching', 
    targetLevel: 2, 
    requestedAt: '2026-08-25 16:45', 
    type: 'TRAINING_PLAN_START',
    description: 'New training request for Station A04 expansion.' 
  },
  { 
    id: 'APP-003', 
    employee: 'Wang Yang', 
    skill: 'Quality Hub Sign-off', 
    targetLevel: 4, 
    requestedAt: '2026-08-26 08:10', 
    type: 'SKILL_UPGRADE',
    description: 'Final certification requested by mentor Zhang Wei.' 
  },
];

export function ApprovalCenter({ onBack }: ApprovalCenterProps) {
  return (
    <div className="space-y-6">
      <header className="flex items-center gap-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 px-3 py-2 hover:bg-white rounded-xl border border-transparent hover:border-slate-200 transition-all text-slate-600 font-bold text-sm bg-slate-100/50"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </button>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Pending Approvals</h1>
          <p className="text-slate-500 text-sm">7 requests requiring supervisor sign-off</p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {mockApprovals.map((approval) => (
          <div key={approval.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden group">
            <div className="p-6 flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                {approval.type === 'SKILL_UPGRADE' ? <ShieldCheck className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">{approval.id}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    approval.type === 'SKILL_UPGRADE' ? 'bg-indigo-100 text-indigo-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {approval.type.replace('_', ' ')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{approval.employee} — {approval.skill} L{approval.targetLevel}</h3>
                <p className="text-sm text-slate-500 mt-1">{approval.description}</p>
                <div className="flex items-center gap-4 mt-3 text-xs text-slate-400 font-medium">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {approval.requestedAt}</span>
                  <span className="flex items-center gap-1.5"><UserIcon className="w-3.5 h-3.5" /> Mentor: Zhang Wei</span>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-2 text-red-600 font-bold text-sm hover:bg-red-50 rounded-xl transition-all border border-transparent hover:border-red-100">
                  <XCircle className="w-4 h-4" /> Reject
                </button>
                <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 py-2 bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 rounded-xl transition-all shadow-md shadow-indigo-100">
                  <CheckCircle2 className="w-4 h-4" /> Approve
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
