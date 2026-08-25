import React from 'react';
import { UserRole } from '../types';
import { Factory, Bell, User as UserIcon, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

export function Navbar({ currentRole, onRoleChange }: NavbarProps) {
  const roles: UserRole[] = ['WORKER', 'MENTOR', 'SUPERVISOR', 'HR_ADMIN', 'QC', 'SYS_ADMIN'];

  return (
    <nav className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 lg:px-8 shrink-0 z-30">
      <div className="flex items-center gap-2">
        <div className="bg-indigo-600 p-1.5 rounded-lg">
          <Factory className="w-6 h-6 text-white" />
        </div>
        <span className="font-bold text-xl text-slate-900 hidden sm:block tracking-tight">
          Workshop<span className="text-indigo-600">Skill</span>
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative group">
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-sm font-medium text-slate-700">
            Role: <span className="text-indigo-600 uppercase">{currentRole}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
            {roles.map(role => (
              <button
                key={role}
                onClick={() => onRoleChange(role)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-indigo-50 hover:text-indigo-600 transition-colors ${currentRole === role ? 'bg-indigo-50 text-indigo-600 font-bold' : 'text-slate-600'}`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="hidden text-right lg:block">
            <p className="text-sm font-semibold text-slate-900 leading-tight">Zhang Wei</p>
            <p className="text-xs text-slate-500">Employee ID: 10042</p>
          </div>
          <div className="w-9 h-9 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 border border-slate-300">
            <UserIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
    </nav>
  );
}
