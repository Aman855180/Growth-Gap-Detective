# Growth Gap Detective — clickable prototype

A high-fidelity, clickable SaaS prototype for **Cheerio AI**, built around the owner of a
fictional small D2C skincare brand, **GlowNest Skincare**.

It demonstrates one thing: a customer who keeps sending campaigns never discovers that
follow-up automation exists. The prototype walks that person from a blank dashboard to an
approved follow-up workflow, in six screens.

**Live demo (no login, no install):** https://growth-flow-finder.lovable.app

Every number, customer, and campaign in this prototype is fictional. Nothing connects to a
real account, no message is ever sent, and no workflow is ever activated. The interface says
so on every screen: **"Demo · Fictional data."**

---

## The journey

| # | Screen | Path | What it shows |
|---|--------|------|---------------|
| 1 | Demo welcome | `/` | "Continue as GlowNest" — no login required |
| 2 | Dashboard | `/dashboard` | 8 campaigns sent this month, 0 active follow-up workflows, recommendation card |
| 3 | Recommendation details | `/recommendation` | Why the suggestion appeared: repeated campaign activity + no follow-up automation |
| 4 | Template selection | `/templates` | Non-clicker reminder, abandoned-cart reminder, post-purchase check-in, with integration requirements marked |
| 5 | Workflow setup | `/review` | Editable name, trigger, delay, condition and message; workflow diagram; simulated test; approval checkbox |
| 6 | Success | `/success` | "Demo setup complete. No real messages were sent." plus the metrics to track |

Every screen has a Back button, and the whole journey is clickable end to end.

### The approval rule

The success screen is only reachable after the reviewer does two things on the workflow setup
screen:

1. Run the **simulated test**, and
2. Tick the **explicit consent checkbox** confirming they reviewed the workflow.

Editing any field after that resets both, so approval always reflects the workflow on screen.
Opening `/success` directly without approving shows a notice instead: *"Your review comes
first."*

---

## Screenshots

`screenshots/` holds the four submission-ready captures, framed and ready to drop into a doc:

- `01-dashboard.png`
- `02-recommendation-details.png`
- `03-template-selection.png`
- `04-workflow-review.png`

---

## Running it locally

You need Node.js 20+ (or Bun).

```sh
npm install
npm run dev
```

Then open the local address the terminal prints. To run the routing and approval-gate tests:

```sh
npm run test
```

## Built with

- TanStack Start (React 19, file-based routes)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components

The five journey screens are separate routes that share one in-memory React context
(`src/components/growth-context.tsx`) holding the workflow draft, the test result and the
approval flag. Because the state is in memory, refreshing starts the demo fresh — no database,
no accounts, nothing to clean up.
