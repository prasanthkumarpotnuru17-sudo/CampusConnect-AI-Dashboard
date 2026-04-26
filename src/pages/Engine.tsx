import GrowthChart from '../components/GrowthChart';
import { 
  ActiveAmbassadors, 
  EngagementMetrics, 
  ActivityFeed, 
  BoostGrowth, 
  LeaderboardPreview, 
  GithubIntelligence,
  AddWidget 
} from '../components/DashboardGrid';
import { motion } from 'motion/react';

export default function Engine() {
  return (
    <div className="p-10 max-w-[1600px] mx-auto space-y-8">
      <header className="flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-black tracking-tighter mb-2">CampusConnect AI</h1>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-accent neon-glow animate-pulse"></div>
            <span className="text-xs font-black text-brand-accent uppercase tracking-[0.2em] animate-pulse"> Ambassador System Active</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-12 bg-brand-card/50 px-8 py-4 rounded-3xl border border-brand-border"
        >
          <div className="text-center px-4">
            <p className="text-[10px] text-brand-text-muted font-bold uppercase tracking-widest mb-1.5">Current Sync</p>
            <div className="text-xl font-black">99.8% <span className="text-brand-text-muted font-medium text-xs">Accuracy</span></div>
          </div>
          <div className="h-10 w-px bg-brand-border"></div>
          <div className="text-center px-4">
            <p className="text-[10px] text-brand-text-muted font-bold uppercase tracking-widest mb-1.5">Active Nodes</p>
            <div className="text-xl font-black">1,204 <span className="text-brand-text-muted font-medium text-xs">Global</span></div>
          </div>
        </motion.div>
      </header>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column - Main Charts */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GrowthChart />
          </motion.section>

          <div className="grid grid-cols-2 gap-8">
            <motion.div 
              className="col-span-2 md:col-span-2 xl:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <BoostGrowth />
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <LeaderboardPreview />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <GithubIntelligence />
            </motion.div>
          </div>
        </div>

        {/* Right Column - Secondary Controls */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <ActiveAmbassadors />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <EngagementMetrics />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <ActivityFeed />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="aspect-video"
          >
            <AddWidget />
          </motion.section>
        </div>
      </div>
    </div>
  );
}
