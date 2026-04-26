import { motion } from 'motion/react';
import { Search, Filter, Mail, MoreHorizontal } from 'lucide-react';

const ambassadors = [
  { id: 1, name: 'Alex Johnson', email: 'alex@campus.edu', status: 'Elite', score: 4520, tasks: 42, avatar: 'AL' },
  { id: 2, name: 'Sarah Chen', email: 'sarah@campus.edu', status: 'Active', score: 3210, tasks: 28, avatar: 'SC' },
  { id: 3, name: 'Marcus Smith', email: 'marcus@campus.edu', status: 'Roving', score: 1890, tasks: 15, avatar: 'MS' },
  { id: 4, name: 'Elena Rodriguez', email: 'elena@campus.edu', status: 'Elite', score: 5100, tasks: 56, avatar: 'ER' },
  { id: 5, name: 'Jordan Taylor', email: 'jordan@campus.edu', status: 'Active', score: 2750, tasks: 22, avatar: 'JT' },
];

export default function Ambassadors() {
  return (
    <div className="p-10 max-w-[1600px] mx-auto space-y-8">
      <header className="flex items-center justify-between">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl font-black tracking-tighter mb-2">Ambassador Network</h1>
          <p className="text-brand-text-muted font-medium">Manage and connect with your campus growth team.</p>
        </motion.div>
        
        <button className="bg-brand-accent text-brand-bg px-6 py-3 rounded-xl font-bold text-sm neon-glow uppercase tracking-wide">
          Invite Member
        </button>
      </header>

      <div className="bg-brand-card rounded-3xl glow-border overflow-hidden">
        <div className="p-6 border-b border-brand-border flex items-center justify-between gap-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-text-muted w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search ambassadors by name or school..." 
              className="w-full bg-brand-bg/50 border border-brand-border rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-brand-accent/50 transition-all font-medium"
            />
          </div>
          <button className="px-4 py-3 bg-white/5 border border-brand-border rounded-xl flex items-center gap-2 text-sm font-bold text-brand-text-muted hover:text-white transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-brand-border">
                <th className="px-8 py-4 text-[10px] font-black text-brand-text-muted uppercase tracking-widest">Ambassador</th>
                <th className="px-8 py-4 text-[10px] font-black text-brand-text-muted uppercase tracking-widest">Status</th>
                <th className="px-8 py-4 text-[10px] font-black text-brand-text-muted uppercase tracking-widest text-right">Missions</th>
                <th className="px-8 py-4 text-[10px] font-black text-brand-text-muted uppercase tracking-widest text-right">Growth Score</th>
                <th className="px-8 py-4 text-[10px] font-black text-brand-text-muted uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {ambassadors.map((a, i) => (
                <motion.tr 
                  key={a.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group hover:bg-white/5 transition-colors border-b border-brand-border/50 last:border-0"
                >
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center font-bold text-brand-accent text-xs">
                        {a.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{a.name}</p>
                        <p className="text-xs text-brand-text-muted font-medium">{a.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                      a.status === 'Elite' ? 'bg-brand-purple/20 text-brand-purple border border-brand-purple/30' : 
                      a.status === 'Active' ? 'bg-brand-accent/10 text-brand-accent border border-brand-accent/20' : 
                      'bg-white/5 text-brand-text-muted border border-white/10'
                    }`}>
                      {a.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right font-bold text-sm tracking-tight">{a.tasks}</td>
                  <td className="px-8 py-6 text-right">
                    <span className="text-sm font-black text-brand-accent">{a.score.toLocaleString()}</span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                       <button className="p-2 hover:bg-white/5 rounded-lg text-brand-text-muted hover:text-white transition-colors">
                        <Mail className="w-4 h-4" />
                       </button>
                       <button className="p-2 hover:bg-white/5 rounded-lg text-brand-text-muted hover:text-white transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                       </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
