import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, FlaskConical, Leaf, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pageHead } from '@/components/growth-shared';
import { useGrowth } from '@/components/growth-context';
import skincare from '@/assets/skincare.jpg';

export const Route = createFileRoute('/')({
  head: () => pageHead('Welcome to the GlowNest demo', 'Explore Growth Gap Detective as fictional GlowNest Skincare. No login, real accounts, or live messages.'),
  component: Welcome,
});

function Welcome() {
  const { choose } = useGrowth();
  return <div className="demo-welcome">
    <header className="welcome-topbar"><Link to="/" className="brand"><span className="brand-symbol">c<span>✳</span></span><span>cheerio<span className="brand-ai"> AI</span></span></Link><span className="demo-badge"><FlaskConical size={14}/>Demo · Fictional data</span></header>
    <main className="welcome-content">
      <span className="eyebrow">CHEERIO AI</span>
      <h1>Growth Gap Detective</h1>
      <p className="welcome-intro">Welcome to GlowNest’s next growth opportunity.</p>
      <img className="welcome-image" src={skincare} width={1024} height={768} alt="Fictional GlowNest skincare products"/>
      <div className="welcome-workspace"><span className="workspace-avatar"><Leaf size={21}/></span><div><strong>GlowNest Skincare</strong><small>Fictional D2C brand workspace</small></div></div>
      <Button asChild size="lg" className="welcome-continue"><Link to="/dashboard" onClick={() => choose('reminder')}>Continue as GlowNest<ArrowRight size={17}/></Link></Button>
      <p className="welcome-safety"><ShieldCheck size={15}/>No login required. No real accounts or messages.</p>
    </main>
    <footer className="welcome-footer">Demo · Fictional data</footer>
  </div>;
}