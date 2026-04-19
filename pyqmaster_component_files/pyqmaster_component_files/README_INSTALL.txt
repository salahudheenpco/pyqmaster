Files included:
- components/Navbar.tsx
- components/Hero.tsx
- components/HowItWorks.tsx
- components/ExplanationLevels.tsx
- components/StudentPrograms.tsx
- components/Features.tsx
- components/DashboardPreview.tsx
- components/FinalCTA.tsx
- app/page.tsx

How to use:
1. Copy the included components folder into your project root.
2. Replace your existing app/page.tsx with the included app/page.tsx.
3. Run the dev server:
   npm run dev
   or in PowerShell if needed:
   npm.cmd run dev
4. Open http://localhost:3000

Optional smooth scrolling:
- In app/layout.tsx change:
  <html lang="en">
  to:
  <html lang="en" className="scroll-smooth">
