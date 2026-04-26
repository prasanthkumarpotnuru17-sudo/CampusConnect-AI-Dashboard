import { motion } from 'motion/react';
import { Target, CheckCircle2, Clock, Zap } from 'lucide-react';

const missions = [
  { id: 1, title: 'Social Media Blast', type: 'Marketing', score: 100, status: 'Active', progress: 65, difficulty: 'Easy' },
  { id: 2, title: 'GitHub PR Review', type: 'Engineering', score: 250, status: 'In Review', progress: 100, difficulty: 'Hard' },
  { id: 3, title: 'Campus Workshop', type: 'Community', score: 500, status: 'Pending', progress: 0, difficulty: 'Medium' },
  { id: 4, title: 'Referral Campaign', type: 'Growth', score: 150, status: 'Active', progress: 30, difficulty: 'Medium' },
  { id: 5, title: 'Bug Hunting', type: 'QA', score: 200, status: 'Completed', progress: 100, difficulty: 'Hard' },
];

export default function Missions() {
  return (
    <div className="p-10 max-w-[1600px] mx-auto space-y-8">
      <header className="flex items-center justify-between">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl font-black tracking-tighter mb-2">Available Missions</h1>
          <p className="text-brand-text-muted font-medium">Complete tasks to earn points and level up your status.</p>
        </motion.div>
        
        <div className="flex gap-4">
          <div className="bg-brand-card px-6 py-3 rounded-2xl glow-border flex items-center gap-3">
            <Zap className="text-brand-accent w-5 h-5 fill-brand-accent" />
            <div>
              <p className="text-[10px] text-brand-text-muted font-bold uppercase tracking-widest leading-none mb-1">Weekly Pool</p>
              <p className="text-lg font-black text-white leading-none">2,500pts</p>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {missions.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-brand-card p-6 rounded-3xl glow-border flex flex-col h-full"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-brand-accent/10 transition-colors">
                <Target className="w-6 h-6 text-brand-text-muted group-hover:text-brand-accent" />
              </div>
              <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                m.status === 'Completed' ? 'bg-brand-accent text-brand-bg' : 
                m.status === 'In Review' ? 'border border-brand-accent/50 text-brand-accent' : 
                'bg-white/5 text-brand-text-muted'
              }`}>
                {m.status}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2 group-hover:text-brand-accent transition-colors">{m.title}</h3>
            <p className="text-brand-text-muted text-sm font-medium mb-6">{m.type} • {m.difficulty}</p>

            <div className="mt-auto space-y-4">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-brand-text-muted">
                <span>Progress</span>
                <span>{m.progress}%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: `${m.progress}%` }}
                   className="h-full bg-brand-accent"
                />
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-brand-border">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-text-muted" />
                  <span className="text-xs text-brand-text-muted font-bold tracking-tight">Ends in 2d 14h</span>
                </div>
                <span className="text-lg font-black text-brand-accent">{m.score} pts</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
