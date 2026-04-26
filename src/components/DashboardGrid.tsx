import { motion } from 'motion/react';
import { History, Plus, Github, ChevronRight } from 'lucide-react';

export function ActiveAmbassadors() {
  return (
    <div className="bg-brand-card p-8 rounded-3xl glow-border">
      <h4 className="text-sm font-bold text-brand-text-muted uppercase tracking-widest mb-8">Active Ambassadors</h4>
      
      <div className="flex items-center gap-8">
        <div className="relative w-24 h-24">
          <svg className="w-full h-full -rotate-90">
            <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
            <circle 
              cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" 
              strokeDasharray={251.2} strokeDashoffset={251.2 * (1 - 0.88)}
              className="text-brand-accent drop-shadow-[0_0_8px_rgba(0,255,106,0.5)]" 
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-black">88%</span>
          </div>
        </div>
        
        <div className="flex-1 space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider">Active Users %</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-brand-accent w-[88%] rounded-full shadow-[0_0_10px_rgba(0,255,106,0.5)]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider">Participation Level</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-brand-purple w-[65%] rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EngagementMetrics() {
  const metrics = [
    { label: 'Avg Task Completion', value: '14.2m' },
    { label: 'Weekly Activity %', value: '92.4%', accent: true },
    { label: 'Total Missions', value: '1,402' },
  ];

  return (
    <div className="bg-brand-card p-8 rounded-3xl glow-border">
      <h4 className="text-sm font-bold text-brand-text-muted uppercase tracking-widest mb-6">Engagement Metrics</h4>
      <div className="space-y-6">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center justify-between">
            <span className="text-sm text-brand-text-muted font-medium">{m.label}</span>
            <span className={`text-lg font-bold ${m.accent ? 'text-brand-accent' : ''}`}>{m.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ActivityFeed() {
  const activities = [
    { type: 'accent', title: 'Mission completed by ', user: 'Alex', meta: '+15 score · 2m ago' },
    { type: 'purple', title: 'New ambassador joined', meta: 'Sector 4 Node · 12m ago' },
    { type: 'accent', title: 'Top performer updated', meta: 'Intelligence Rank 1 · 45m ago' },
    { type: 'muted', title: 'System scan completed', meta: 'No errors found · 1h ago' },
  ];

  return (
    <div className="bg-brand-card p-8 rounded-3xl glow-border">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-sm font-bold text-brand-text-muted uppercase tracking-widest">Activity Feed</h4>
        <History className="w-4 h-4 text-brand-text-muted cursor-pointer hover:text-white transition-colors" />
      </div>
      <div className="space-y-6">
        {activities.map((a, i) => (
          <div key={i} className="flex gap-4">
            <div className={`w-1 h-10 rounded-full ${
              a.type === 'accent' ? 'bg-brand-accent' : a.type === 'purple' ? 'bg-brand-purple' : 'bg-white/10'
            }`}></div>
            <div>
              <p className="text-sm font-medium">
                {a.title} {a.user && <span className="text-brand-accent underline underline-offset-4 decoration-brand-accent/30 cursor-pointer">{a.user}</span>}
              </p>
              <p className="text-[10px] text-brand-text-muted font-medium uppercase tracking-wider mt-1">{a.meta}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BoostGrowth() {
  return (
    <div className="bg-brand-card p-10 rounded-3xl glow-border relative overflow-hidden h-full flex flex-col justify-center">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-accent/5 to-transparent pointer-events-none"></div>
      <div className="inline-flex py-1.5 px-3 rounded-lg bg-brand-purple/10 border border-brand-purple/30 mb-6">
        <span className="text-[10px] font-black text-brand-purple uppercase tracking-[0.2em]">Priority Protocol</span>
      </div>
      <h2 className="text-4xl font-black tracking-tighter mb-4 leading-tight">Boost Your <br />Growth</h2>
      <p className="text-brand-text-muted text-sm leading-relaxed max-w-sm mb-8 font-medium">
        Complete missions to increase your Growth Score and unlock high-tier intelligence tools and ambassador perks.
      </p>
      <button className="bg-brand-accent w-fit text-brand-bg px-8 py-3 rounded-xl font-bold text-sm neon-glow hover:scale-105 active:scale-95 transition-all">
        Start Mission
      </button>
    </div>
  );
}

export function LeaderboardPreview() {
  const leaders = [
    { id: 'JD', name: 'Jordan D.', score: '2.4k' },
    { id: 'MK', name: 'Maria K.', score: '2.1k' },
    { id: 'ST', name: 'Sam T.', score: '1.9k' },
  ];

  return (
    <div className="bg-brand-card p-8 rounded-3xl glow-border">
      <h4 className="text-sm font-bold text-brand-text-muted uppercase tracking-widest mb-6">Leaderboard Preview</h4>
      <div className="space-y-4">
        {leaders.map((l, i) => (
          <div key={l.id} className="flex items-center justify-between group cursor-pointer hover:bg-white/5 p-2 rounded-xl transition-all border border-transparent hover:border-brand-border">
            <div className="flex items-center gap-4">
              <span className="text-sm font-black text-brand-text-muted w-4">{i + 1}</span>
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center font-bold text-xs">
                {l.id}
              </div>
              <span className="text-sm font-bold group-hover:text-brand-accent transition-colors">{l.name}</span>
            </div>
            <span className="text-sm font-black tracking-tight">{l.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GithubIntelligence() {
  return (
    <div className="bg-brand-card p-8 rounded-3xl glow-border border-l-4 border-l-brand-purple relative overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-brand-purple/10 rounded-xl">
          <Github className="w-5 h-5 text-brand-purple" />
        </div>
        <h4 className="text-sm font-bold tracking-tight">GitHub Intelligence</h4>
      </div>
      <p className="text-brand-text-muted text-sm font-medium leading-relaxed mb-8">
        34 Active Pull Requests detected across campus repositories. Integration health optimal.
      </p>
      <div className="flex gap-3">
        <span className="px-3 py-1.5 rounded-lg bg-brand-bg text-[10px] font-bold text-brand-text-muted border border-brand-border">Node: main</span>
        <span className="px-3 py-1.5 rounded-lg bg-brand-bg text-[10px] font-bold text-brand-text-muted border border-brand-border">Latency: 24ms</span>
      </div>
    </div>
  );
}

export function AddWidget() {
  return (
    <div className="border-2 border-dashed border-brand-border rounded-3xl p-8 flex flex-col items-center justify-center gap-6 group cursor-pointer hover:border-brand-accent/30 transition-all">
      <div className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-bg group-hover:border-brand-accent transition-all duration-500">
        <Plus className="w-6 h-6" />
      </div>
      <p className="text-sm font-bold text-brand-text-muted group-hover:text-white transition-colors">Assign New Dashboard Widget</p>
    </div>
  );
}
