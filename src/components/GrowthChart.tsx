import { motion } from 'motion/react';

const chartData = [
  { value: 45, label: 'Mon' },
  { value: 65, label: 'Tue' },
  { value: 35, label: 'Wed' },
  { value: 85, label: 'Thu' },
  { value: 55, label: 'Fri' },
  { value: 95, label: 'Sat' },
  { value: 75, label: 'Sun' },
];

export default function GrowthChart() {
  return (
    <div className="bg-brand-card p-8 rounded-3xl glow-border relative overflow-hidden group">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h3 className="text-2xl font-bold tracking-tight">Growth Analytics</h3>
          <p className="text-sm text-brand-text-muted mt-1">Real-time performance distribution across all campus sectors.</p>
        </div>
        <div className="flex gap-2 bg-brand-bg/50 p-1 rounded-xl border border-brand-border">
          <button className="px-5 py-2 text-xs font-bold rounded-lg text-brand-text-muted hover:text-white transition-colors">WEEK</button>
          <button className="px-5 py-2 text-xs font-bold rounded-lg bg-brand-accent text-brand-bg neon-glow">MONTH</button>
        </div>
      </div>

      <div className="h-64 flex items-end justify-between gap-4 px-4 relative">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-full h-px bg-brand-accent/20" />
          ))}
        </div>

        {chartData.map((item, i) => (
          <div key={i} className="flex-1 flex flex-col items-center group/bar">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: `${item.value}%` }}
              transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
              className="w-full max-w-[48px] bg-gradient-to-t from-brand-accent/5 to-brand-accent rounded-t-lg relative group-hover/bar:brightness-125 transition-all"
            >
              <div className="absolute -top-1 left-0 right-0 h-1 bg-brand-accent blur-sm"></div>
              <div className="absolute inset-0 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-brand-accent/20 blur-xl"></div>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 mt-12 pt-12 border-t border-brand-border">
        <div>
          <p className="text-[10px] uppercase font-bold text-brand-text-muted tracking-widest mb-2">Total Growth Score</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-brand-accent">8,540</span>
            <span className="text-xs font-bold text-brand-accent flex items-center">+12%</span>
          </div>
        </div>
        <div>
          <p className="text-[10px] uppercase font-bold text-brand-text-muted tracking-widest mb-2">Missions Completed</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black">248</span>
          </div>
        </div>
        <div>
          <p className="text-[10px] uppercase font-bold text-brand-text-muted tracking-widest mb-2">Engagement Rate (%)</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black">94.2%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
