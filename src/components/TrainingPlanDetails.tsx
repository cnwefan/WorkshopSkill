import React from 'react';
import { 
  ArrowLeft, 
  GraduationCap, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  PlayCircle,
  FileText,
  User as UserIcon,
  Factory,
  BarChart2,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

interface TrainingPlanDetailsProps {
  onBack: () => void;
}

export function TrainingPlanDetails({ onBack }: TrainingPlanDetailsProps) {
  return (
    <div className="space-y-6">
      <header className="flex items-center gap-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 px-3 py-2 hover:bg-white rounded-xl border border-transparent hover:border-slate-200 transition-all text-slate-600 font-bold text-sm bg-slate-100/50"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to List
        </button>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Plan Details</h1>
          <p className="text-slate-500 text-sm">P-1001 — Precision Welding L3</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-slate-900 flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-indigo-600" />
                Training Progress
              </h2>
              <span className="text-xs font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded-full">IN PROGRESS</span>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm font-bold mb-2">
                  <span className="text-slate-600">Overall Completion</span>
                  <span className="text-indigo-600">65%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '65%' }}
                    className="h-full bg-indigo-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Theory</p>
                  <p className="text-lg font-bold text-slate-900">100%</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">MES Hours</p>
                  <p className="text-lg font-bold text-slate-900">26/40h</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Assessments</p>
                  <p className="text-lg font-bold text-slate-900">1/2</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100">
              <h2 className="font-bold text-slate-900">Module Breakdown</h2>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                { title: 'Arc Stability & Parameters', type: 'THEORY', status: 'COMPLETED' },
                { title: 'Hands-on Manual Welding', type: 'PRACTICAL', status: 'IN_PROGRESS', detail: '26h logged' },
                { title: 'Weld Quality Standards', type: 'THEORY', status: 'COMPLETED' },
                { title: 'Final Practical Sign-off', type: 'ASSESSMENT', status: 'PENDING' },
              ].map((item, i) => (
                <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${
                      item.status === 'COMPLETED' ? 'bg-green-50 text-green-600' : 
                      item.status === 'IN_PROGRESS' ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-100 text-slate-400'
                    }`}>
                      {item.status === 'COMPLETED' ? <CheckCircle2 className="w-5 h-5" /> : <PlayCircle className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">{item.type}</span>
                        {item.detail && <span className="text-[10px] text-indigo-500 font-medium">• {item.detail}</span>}
                      </div>
                    </div>
                  </div>
                  <button className="text-xs font-bold text-indigo-600 hover:underline">View Evidence</button>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="font-bold text-slate-900 mb-4">Assigned Team</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-indigo-600">
                  <UserIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Trainee</p>
                  <p className="text-sm font-bold text-slate-900">Zhang Wei</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-amber-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Mentor</p>
                  <p className="text-sm font-bold text-slate-900">Chen Hao</p>
                </div>
              </div>
            </div>
          </section>

          <div className="p-6 bg-slate-900 rounded-2xl text-white">
            <h3 className="font-bold mb-4">Actions</h3>
            <div className="space-y-2">
              <button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-sm font-bold transition-all">
                Update Target Date
              </button>
              <button className="w-full py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-bold transition-all">
                Export Log Book
              </button>
              <button className="w-full py-2.5 text-red-400 hover:bg-red-400/10 rounded-xl text-sm font-bold transition-all">
                Terminate Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
