import { 
  LayoutGrid, 
  Target, 
  Users, 
  BarChart3, 
  BrainCircuit, 
  Settings, 
  LifeBuoy, 
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { icon: LayoutGrid, label: 'Dashboard', path: '/' },
  { icon: Target, label: 'Missions', path: '/missions' },
  { icon: Users, label: 'Ambassadors', path: '/ambassadors' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: BrainCircuit, label: 'Intelligence', path: '/intelligence' },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-brand-sidebar border-r border-brand-border flex flex-col z-50">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center neon-glow">
            <Zap className="text-brand-bg w-6 h-6 fill-brand-bg" />
          </div>
          <div>
            <h1 className="text-xs font-black tracking-tighter uppercase leading-none">
              CampusConnect <span className="text-brand-accent">AI</span>
            </h1>
            <p className="text-[10px] text-brand-text-muted uppercase tracking-[0.2em] font-medium mt-1">
              Growth Dashboard
            </p>
          </div>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => `
                w-full flex items-center justify-between p-3 rounded-lg transition-all group
                ${isActive 
                  ? 'bg-brand-accent/10 text-brand-accent' 
                  : 'text-brand-text-muted hover:text-white hover:bg-white/5'
                }
              `}
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  {isActive && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="w-1 h-5 bg-brand-accent rounded-full" 
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 space-y-6">
        <button className="w-full bg-brand-accent text-brand-bg py-3 px-4 rounded-xl font-bold text-sm hover:scale-[1.02] active:scale-95 transition-all neon-glow uppercase tracking-wide">
          Launch Mission
        </button>

        <div className="space-y-1 border-t border-brand-border pt-6">
          <NavLink 
            to="/settings"
            className={({ isActive }) => `w-full flex items-center gap-3 p-3 transition-colors ${isActive ? 'text-brand-accent bg-brand-accent/5 rounded-lg border border-brand-accent/20' : 'text-brand-text-muted hover:text-white'}`}
          >
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium">Settings</span>
          </NavLink>
          <NavLink 
            to="/support"
            className={({ isActive }) => `w-full flex items-center gap-3 p-3 transition-colors ${isActive ? 'text-brand-accent bg-brand-accent/5 rounded-lg border border-brand-accent/20' : 'text-brand-text-muted hover:text-white'}`}
          >
            <LifeBuoy className="w-5 h-5" />
            <span className="text-sm font-medium">Support</span>
          </NavLink>
        </div>

        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-brand-border">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-accent to-brand-purple p-0.5">
            <div className="w-full h-full rounded-full bg-brand-sidebar flex items-center justify-center text-xs font-bold text-white">
              AL
            </div>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-bold truncate">Ambassador Leader</p>
            <p className="text-[10px] text-brand-text-muted uppercase tracking-wider font-semibold">Admin Sector 7</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
