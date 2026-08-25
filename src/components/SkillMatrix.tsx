import React from 'react';
import { cn } from '../lib/utils';

const stations = ['Welding', 'Assy-01', 'Assy-02', 'Quality', 'Packing'];
const employees = ['Zhang Wei', 'Li Wei', 'Chen Hao', 'Wang Yang', 'Li Meili', 'Sun Qiang'];

const mockMatrix = employees.map(emp => ({
  name: emp,
  skills: stations.map(() => Math.floor(Math.random() * 5)) // Level 0-4
}));

export function SkillMatrix() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
        <h2 className="font-bold text-slate-900">Skill Matrix (Workshop A04)</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">Employee</th>
              {stations.map(s => (
                <th key={s} className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-center border-b border-slate-100">
                  {s}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mockMatrix.map((row, i) => (
              <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 text-sm font-bold text-slate-900 border-b border-slate-50">{row.name}</td>
                {row.skills.map((level, j) => (
                  <td key={j} className="px-6 py-4 text-center border-b border-slate-50">
                    <div className={cn(
                      "inline-flex items-center justify-center w-8 h-8 rounded-lg font-bold text-sm transition-all",
                      level === 0 ? "bg-slate-100 text-slate-400" :
                      level === 1 ? "bg-blue-50 text-blue-600" :
                      level === 2 ? "bg-indigo-100 text-indigo-700" :
                      level === 3 ? "bg-indigo-600 text-white shadow-md shadow-indigo-100" :
                      "bg-emerald-600 text-white shadow-md shadow-emerald-100"
                    )}>
                      {level}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-6 justify-center">
        {[0, 1, 2, 3, 4].map(l => (
          <div key={l} className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-tight">
            <div className={cn(
              "w-3 h-3 rounded-sm",
              l === 0 ? "bg-slate-200" :
              l === 1 ? "bg-blue-200" :
              l === 2 ? "bg-indigo-200" :
              l === 3 ? "bg-indigo-600" : "bg-emerald-600"
            )}></div>
            Level {l}
          </div>
        ))}
      </div>
    </div>
  );
}
