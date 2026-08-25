import React from 'react';
import { 
  Users, 
  CheckSquare, 
  MessageSquare, 
  Clock, 
  ExternalLink,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

const mockMentees = [
  { id: 1, name: 'Chen Hao', station: 'Welding-A', progress: 85, nextAssessment: 'Tomorrow', status: 'ON_TRACK' },
  { id: 2, name: 'Li Meili', station: 'Assy-01', progress: 40, nextAssessment: 'Aug 30', status: 'BEHIND' },
  { id: 3, name: 'Wang Yang', station: 'Quality-C', progress: 95, nextAssessment: 'Today', status: 'READY' },
];

export function MentorDashboard() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900 font-display">Mentor Console</h1>
        <p className="text-slate-500">You are mentoring 3 operators in Workshop A04</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-bold text-slate-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-600" />
                Assigned Mentees
              </h2>
              <button className="text-indigo-600 text-sm font-bold hover:underline">View Team Matrix</button>
            </div>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mockMentees.map(mentee => (
                <div key={mentee.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-indigo-200 hover:bg-white transition-all group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold">
                      {mentee.name.charAt(0)}
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-tighter px-2 py-0.5 rounded-full ${
                      mentee.status === 'READY' ? 'bg-green-100 text-green-700' : 
                      mentee.status === 'BEHIND' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {mentee.status.replace('_', ' ')}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900">{mentee.name}</h3>
                  <p className="text-xs text-slate-500 mb-4">{mentee.station} Training</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                      <span>Progress</span>
                      <span>{mentee.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-500 ${mentee.progress > 80 ? 'bg-green-500' : 'bg-indigo-600'}`} 
                        style={{ width: `${mentee.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-slate-500">
                      <Clock className="w-3 h-3" />
                      Next: {mentee.nextAssessment}
                    </div>
                    <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100">
              <h2 className="font-bold text-slate-900">Recent Training Evidence</h2>
            </div>
            <div className="p-6 text-center py-12">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
                <CheckSquare className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="font-bold text-slate-800">No new evidence to verify</h3>
              <p className="text-sm text-slate-500 max-w-xs mx-auto mt-1">When mentees clock out of MES stations, their logs will appear here for verification.</p>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <div className="bg-indigo-900 rounded-2xl p-6 text-white relative overflow-hidden shadow-xl shadow-indigo-200">
            <div className="relative z-10">
              <h3 className="font-bold text-indigo-200 uppercase text-[10px] tracking-widest mb-4">Verification Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all text-left">
                  <UserCheck className="w-5 h-5 text-indigo-300" />
                  <div>
                    <p className="text-sm font-bold">Co-presence Verify</p>
                    <p className="text-[10px] text-indigo-300">Clock in with Mentee</p>
                  </div>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all text-left">
                  <ShieldCheck className="w-5 h-5 text-indigo-300" />
                  <div>
                    <p className="text-sm font-bold">Submit Assessment</p>
                    <p className="text-[10px] text-indigo-300">Sign-off skill level</p>
                  </div>
                </button>
              </div>
            </div>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-indigo-600" />
              Recent Feedback
            </h3>
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <p className="text-xs text-slate-700 italic">"Excellent handle on the new pulse arc settings today. Consistency is improving."</p>
                <p className="text-[10px] font-bold text-slate-400 mt-2">Yesterday to Chen Hao</p>
              </div>
              <button className="w-full py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">
                Write New Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
