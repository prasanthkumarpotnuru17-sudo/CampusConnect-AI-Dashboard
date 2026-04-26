import { Search, Bell, Zap, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-20 flex items-center justify-between px-8 bg-brand-bg/50 backdrop-blur-md sticky top-0 z-40">
      <div className="relative group w-96">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-text-muted w-4 h-4 group-focus-within:text-brand-accent transition-colors" />
        <input 
          type="text" 
          placeholder="Scan intelligence nodes..." 
          className="w-full bg-brand-card/50 border border-brand-border rounded-full py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:border-brand-accent/50 transition-all placeholder:text-brand-text-muted/50"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <button className="p-2.5 text-brand-text-muted hover:text-white transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-brand-accent rounded-full border-2 border-brand-bg"></span>
          </button>
          <button className="p-2.5 text-brand-text-muted hover:text-white transition-colors">
            <Zap className="w-5 h-5 fill-current" />
          </button>
          <button className="p-2.5 text-brand-text-muted hover:text-white transition-colors">
            <User className="w-5 h-5" />
          </button>
        </div>
        
        <div className="h-8 w-px bg-brand-border"></div>
        
        <div className="text-right">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] leading-none">
            CampusConnect <span className="text-brand-accent">AI</span>
          </p>
        </div>
      </div>
    </header>
  );
}
