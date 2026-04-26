import { motion } from 'motion/react';
import { BarChart3, TrendingUp, Users, Target } from 'lucide-react';
import GrowthChart from '../components/GrowthChart';

export default function Analytics() {
  const stats = [
    { label: 'Total Reach', value: '1.2M', change: '+18.4%', icon: Users },
    { label: 'Avg Engagement', value: '4.8%', change: '+2.1%', icon: TrendingUp },
    { label: 'Mission Success', value: '92.5%', change: '+0.5%', icon: Target },
    { label: 'Growth Velocity', value: '4.2x', change: '+12%', icon: BarChart3 },
  ];

  return (
    <div className="p-10 max-w-[1600px] mx-auto space-y-8">
       <header className="flex items-center justify-between">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl font-black tracking-tighter mb-2">Deep Analytics</h1>
          <p className="text-brand-text-muted font-medium">Quantitative insights into your campus ecosystem performance.</p>
        </motion.div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-brand-card p-6 rounded-3xl glow-border"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 bg-white/5 rounded-xl text-brand-text-muted">
                <s.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-black text-brand-accent tracking-tighter">{s.change}</span>
            </div>
            <p className="text-[10px] text-brand-text-muted font-bold uppercase tracking-widest mb-1">{s.label}</p>
            <p className="text-3xl font-black">{s.value}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <GrowthChart />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-brand-card p-8 rounded-3xl glow-border">
          <h4 className="text-sm font-bold text-brand-text-muted uppercase tracking-widest mb-8">Demographic Breakdown</h4>
          <div className="space-y-6">
            {[ 
              { label: 'Engineering', value: 45 },
              { label: 'Arts & Design', value: 25 },
              { label: 'Business', value: 20 },
              { label: 'Others', value: 10 }
            ].map((d) => (
              <div key={d.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-bold">{d.label}</span>
                  <span className="text-sm font-black text-brand-text-muted">{d.value}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${d.value}%` }}
                    className="h-full bg-brand-purple"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-brand-card p-8 rounded-3xl glow-border flex flex-col justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10 text-brand-accent" />
            </div>
            <h3 className="text-2xl font-black mb-2">Optimization Suggestion</h3>
            <p className="text-brand-text-muted text-sm font-medium leading-relaxed max-w-sm mx-auto mb-8">
              Based on historical data, launching Engineering missions on Tuesday nights increases engagement by 22.4%.
            </p>
            <button className="bg-brand-accent text-brand-bg px-8 py-3 rounded-xl font-bold text-sm w-fit mx-auto neon-glow uppercase tracking-wide">
              Apply Strategy
            </button>
        </div>
      </div>
    </div>
  );
}
