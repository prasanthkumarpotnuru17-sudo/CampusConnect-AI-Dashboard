import { motion } from 'motion/react';
import { Settings as SettingsIcon, Shield, Bell, User } from 'lucide-react';

export default function Settings() {
  return (
    <div className="p-10 max-w-[1200px] mx-auto space-y-8">
      <header>
        <h1 className="text-5xl font-black tracking-tighter mb-2">Settings</h1>
        <p className="text-brand-text-muted font-medium">Configure your ambassador dashboard preferences.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          {[
            { icon: User, label: 'Profile' },
            { icon: Bell, label: 'Notifications' },
            { icon: Shield, label: 'Security' },
            { icon: SettingsIcon, label: 'Preferences' },
          ].map((item, i) => (
            <button key={i} className="w-full flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-brand-border hover:bg-brand-accent/10 hover:border-brand-accent/30 transition-all group">
              <item.icon className="w-5 h-5 text-brand-text-muted group-hover:text-brand-accent" />
              <span className="font-bold">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="md:col-span-2 bg-brand-card p-10 rounded-[3rem] glow-border">
          <h3 className="text-2xl font-black mb-8">Account Details</h3>
          <div className="space-y-6">
             <div className="space-y-2">
                <label className="text-[10px] font-black text-brand-text-muted uppercase tracking-widest">Display Name</label>
                <input type="text" className="w-full bg-brand-bg border border-brand-border rounded-xl p-4 font-bold focus:border-brand-accent transition-colors" defaultValue="Ambassador Leader" />
             </div>
             <div className="space-y-2">
                <label className="text-[10px] font-black text-brand-text-muted uppercase tracking-widest">Email Node</label>
                <input type="email" className="w-full bg-brand-bg border border-brand-border rounded-xl p-4 font-bold focus:border-brand-accent transition-colors" defaultValue="leader@sector7.ai" />
             </div>
             <button className="bg-brand-accent text-brand-bg px-8 py-3 rounded-xl font-bold text-sm neon-glow uppercase tracking-wide mt-4">
                Update Protocol
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
