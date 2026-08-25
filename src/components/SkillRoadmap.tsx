import React from 'react';
import { Target, ChevronRight, Star, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const roadmapSteps = [
  { level: 1, title: 'Entry Level', status: 'COMPLETED', skills: ['Basic Safety', 'Shop Floor Intro'] },
  { level: 2, title: 'Associate Operator', status: 'COMPLETED', skills: ['Standard Assy', 'Tool Handling'] },
  { level: 3, title: 'Senior Operator', status: 'IN_PROGRESS', skills: ['Robot Teaching', 'Quality Sign-off'] },
  { level: 4, title: 'Master Craft', status: 'LOCKED', skills: ['Process Opt', 'Mentor Training'] },
];

export function SkillRoadmap() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">Personal Skill Roadmap</h1>
        <p className="text-slate-500">Your path to mastering discrete manufacturing excellence.</p>
      </header>

      <div className="relative">
        {/* Connection Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 z-0"></div>

        <div className="space-y-12 relative z-10">
          {roadmapSteps.map((step, idx) => (
            <div key={idx} className="flex gap-8 group">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 border-4 border-white shadow-sm transition-all duration-300 ${
                step.status === 'COMPLETED' ? 'bg-indigo-600 text-white' : 
                step.status === 'IN_PROGRESS' ? 'bg-white text-indigo-600 border-indigo-600' : 
                'bg-slate-100 text-slate-400'
              }`}>
                {step.status === 'COMPLETED' ? <ShieldCheck className="w-8 h-8" /> : <span className="text-xl font-bold">{step.level}</span>}
              </div>

              <div className={`flex-1 p-6 rounded-2xl border transition-all ${
                step.status === 'IN_PROGRESS' ? 'bg-white border-indigo-200 shadow-lg shadow-indigo-100' : 
                step.status === 'COMPLETED' ? 'bg-slate-50 border-slate-100 opacity-80' : 
                'bg-slate-50 border-slate-100 opacity-50 grayscale'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1 block">Level {step.level}</span>
                    <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                  </div>
                  {step.status === 'IN_PROGRESS' && (
                    <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full">Current Focus</span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {step.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-slate-100 text-sm font-medium text-slate-700 shadow-sm">
                      <Star className={`w-3.5 h-3.5 ${step.status === 'COMPLETED' ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`} />
                      {skill}
                    </div>
                  ))}
                </div>

                {step.status === 'IN_PROGRESS' && (
                  <div className="mt-6 flex items-center justify-between pt-6 border-t border-slate-100">
                    <div className="text-sm text-slate-500">
                      Estimated completion: <span className="font-bold text-slate-900">Oct 12, 2026</span>
                    </div>
                    <button className="flex items-center gap-2 text-indigo-600 font-bold text-sm hover:translate-x-1 transition-transform">
                      Continue Training <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
