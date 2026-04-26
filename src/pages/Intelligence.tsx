import { motion } from 'motion/react';
import { BrainCircuit, Cpu, Sparkles, MessageSquare, Zap } from 'lucide-react';

export default function Intelligence() {
  const nodes = [
    { title: 'Trend Predictor', description: 'Analyze social sentiment to predict upcoming campus trends.', status: 'Operational', icon: Sparkles },
    { title: 'Sentiment Analysis', description: 'Real-time tone tracking of campus communications.', status: 'Processing', icon: MessageSquare },
    { title: 'Relay Router', description: 'Automated distribution of mission payloads to active nodes.', status: 'Optimal', icon: Zap },
    { title: 'Neural Core', description: 'Central processing unit for growth strategy optimization.', status: 'Operational', icon: Cpu },
  ];

  return (
    <div className="p-10 max-w-[1600px] mx-auto space-y-8">
       <header className="flex items-center justify-between">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl font-black tracking-tighter mb-2">Intelligence Nodes</h1>
          <p className="text-brand-text-muted font-medium">Advanced AI tools for autonomous campus growth management.</p>
        </motion.div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {nodes.map((node, i) => (
          <motion.div
            key={node.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-brand-card p-10 rounded-[3rem] glow-border relative overflow-hidden flex flex-col items-center text-center"
          >
            <div className="absolute top-0 right-0 p-8">
               <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 ${
                  node.status === 'Processing' ? 'text-brand-purple' : 'text-brand-accent'
               }`}>
                 <div className={`w-1.5 h-1.5 rounded-full ${
                   node.status === 'Processing' ? 'bg-brand-purple animate-pulse' : 'bg-brand-accent'
                 }`}></div>
                 {node.status}
               </div>
            </div>

            <div className="w-20 h-20 rounded-3xl bg-white/5 border border-brand-border flex items-center justify-center p-5 mb-8 group-hover:bg-brand-accent/10 group-hover:border-brand-accent/30 transition-all duration-500 transform group-hover:scale-110">
              <node.icon className="w-full h-full text-brand-text-muted group-hover:text-brand-accent transition-colors" />
            </div>

            <h3 className="text-2xl font-black mb-4 tracking-tight">{node.title}</h3>
            <p className="text-brand-text-muted text-sm font-medium leading-relaxed max-w-xs mb-8">
              {node.description}
            </p>

            <button className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-brand-text-muted hover:text-white transition-colors">
              Access Terminal
              <div className="w-6 h-px bg-brand-border group-hover:w-12 group-hover:bg-brand-accent transition-all duration-500"></div>
            </button>
          </motion.div>
        ))}
      </div>

      <div className="bg-brand-card p-12 rounded-[4rem] border border-brand-accent/20 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,106,0.05)_0%,transparent_70%)]"></div>
         <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/10 rounded-lg text-brand-accent font-black text-[10px] uppercase tracking-widest mb-6">
                <BrainCircuit className="w-3 h-3" />
                Next-Gen Core
              </div>
              <h2 className="text-4xl font-black tracking-tighter mb-6 leading-tight">Autonomous Growth <br />Optimization System</h2>
              <p className="text-brand-text-muted text-lg font-medium leading-relaxed">
                Connect your campus repositories to enable real-time mission generation based on actual codebase needs and contributor patterns.
              </p>
            </div>
            <button className="bg-brand-accent text-brand-bg px-10 py-5 rounded-[2rem] font-black text-sm neon-glow uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all whitespace-nowrap">
              Link GitHub
            </button>
         </div>
      </div>
    </div>
  );
}
