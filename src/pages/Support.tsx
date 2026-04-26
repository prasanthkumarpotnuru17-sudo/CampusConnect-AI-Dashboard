import { motion } from 'motion/react';
import { LifeBuoy, MessageSquare, Book, FileText } from 'lucide-react';

export default function Support() {
  return (
    <div className="p-10 max-w-[1200px] mx-auto space-y-8">
      <header>
        <h1 className="text-5xl font-black tracking-tighter mb-2">Support Hub</h1>
        <p className="text-brand-text-muted font-medium">Get assistance with mission protocols and growth tools.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { icon: MessageSquare, title: 'Live Chat', desc: 'Connect with senior ambassador leads.' },
          { icon: Book, title: 'Knowledge Base', desc: 'Documentation on mission strategies.' },
          { icon: FileText, title: 'Submit Ticket', desc: 'Report technical issues with intelligence nodes.' },
          { icon: LifeBuoy, title: 'FAQ', desc: 'Frequently asked questions about rewards.' },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-brand-card p-8 rounded-[2.5rem] glow-border flex items-center gap-6 cursor-pointer hover:bg-brand-accent/5 transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center p-4 group-hover:bg-brand-accent/10 transition-colors">
              <item.icon className="w-full h-full text-brand-text-muted group-hover:text-brand-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-brand-text-muted text-sm font-medium">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
