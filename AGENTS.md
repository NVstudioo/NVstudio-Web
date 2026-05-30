# NV Studio — Claude Code Instructions

## Project Context
NV Studio is a premium digital agency based in Baku, Azerbaijan.
Website: informational/portfolio site. No backend needed.
Stack: Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion.

## Critical Rules
1. ALWAYS use Framer Motion for ALL animations — never CSS keyframes alone
2. Keep contact info consistent: email hr.nvstudio@gmail.com, location Baku, AZ
3. Social links: 
   LinkedIn: https://www.linkedin.com/company/nv-studio/
   Instagram: https://www.instagram.com/nvstudioo1
4. Fix metadata in app/layout.tsx — title should be "NV Studio | Digital Agency Baku"
5. Never use placeholder data — if content unknown, ask
6. All forms: show success state (no real API needed)
7. Pricing section must have 3 DIFFERENT plans with real pricing

## Current Known Issues to Fix
- framer-motion imported in package.json but not used anywhere
- Metadata still says "Create Next App"  
- Footer phone/email differs from ContactSection
- Pricing section has 3 identical placeholder plans
- Testimonials has duplicate "Alex Brown" × 2
- Terms/Privacy pages missing but linked in footer
- Social links all href="#"
- ProcessSection uses painting.png placeholder for all steps