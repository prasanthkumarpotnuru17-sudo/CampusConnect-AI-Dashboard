import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Engine from './pages/Engine';
import Missions from './pages/Missions';
import Ambassadors from './pages/Ambassadors';
import Analytics from './pages/Analytics';
import Intelligence from './pages/Intelligence';
import Settings from './pages/Settings';
import Support from './pages/Support';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-bg flex">
        <Sidebar />
        
        <main className="flex-1 ml-64 min-w-0">
          <Header />
          
          <Routes>
            <Route path="/" element={<Engine />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/ambassadors" element={<Ambassadors />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/intelligence" element={<Intelligence />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
