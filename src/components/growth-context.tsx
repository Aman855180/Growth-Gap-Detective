import { createContext, useContext, useState, type ReactNode } from 'react';

export const templates = [
  { id: 'reminder', name: 'Non-clicker reminder', description: 'Give interested customers a gentle nudge when they haven’t clicked your campaign.', trigger: 'Campaign delivered', condition: 'Has not clicked campaign', delay: '24', message: 'Hi {{first_name}}, a little glow-up is waiting for you ✨ Explore your new skincare favourites at GlowNest.', integration: 'Uses your campaign activity', ready: true },
  { id: 'cart', name: 'Abandoned-cart reminder', description: 'Reconnect with shoppers who left a little something in their cart.', trigger: 'Cart abandoned', condition: 'Has not completed purchase', delay: '2', message: 'Hi {{first_name}}, your GlowNest favourites are still in your cart. Ready to finish your routine?', integration: 'Requires Shopify integration', ready: false },
  { id: 'purchase', name: 'Post-purchase check-in', description: 'Make every order the start of a thoughtful customer relationship.', trigger: 'Order fulfilled', condition: 'Has marketing consent', delay: '168', message: 'Hi {{first_name}}, how is your new GlowNest routine feeling? We’d love to hear from you.', integration: 'Requires Shopify integration', ready: false },
];
type Workflow = { templateId: string; name: string; trigger: string; condition: string; delay: string; message: string };
type GrowthState = { workflow: Workflow; update: (patch: Partial<Workflow>) => void; choose: (id: string) => void; approved: boolean; approve: () => void; tested: boolean; test: () => void; resetApproval: () => void };
const initial = { templateId: 'reminder', name: 'GlowNest · Campaign follow-up', trigger: 'Campaign delivered', condition: 'Has not clicked campaign', delay: '24', message: 'Hi {{first_name}}, a little glow-up is waiting for you ✨ Explore your new skincare favourites at GlowNest.' };
const GrowthContext = createContext<GrowthState | null>(null);
export function GrowthProvider({ children }: { children: ReactNode }) {
  const [workflow, setWorkflow] = useState<Workflow>(initial);
  const [approved, setApproved] = useState(false);
  const [tested, setTested] = useState(false);
  const update = (patch: Partial<Workflow>) => { setWorkflow(w => ({ ...w, ...patch })); setApproved(false); setTested(false); };
  const choose = (id: string) => { const t = templates.find(t => t.id === id); if (!t) return; update({ templateId: id, name: `GlowNest · ${t.name}`, trigger: t.trigger, condition: t.condition, delay: t.delay, message: t.message }); };
  return <GrowthContext.Provider value={{ workflow, update, choose, approved, approve: () => setApproved(true), tested, test: () => setTested(true), resetApproval: () => setApproved(false) }}>{children}</GrowthContext.Provider>;
}
export function useGrowth() { const value = useContext(GrowthContext); if (!value) throw new Error('GrowthProvider is required'); return value; }