# NV Studio — Frontend Design Skill

## Brand Identity
- Company: NV Studio (Digital Agency, Baku Azerbaijan, MMC)
- Primary: #5000FF (purple), #EA00FF (fuchsia)
- Accent: #00FFFF (cyan), #34d399 (emerald)
- Background: #000000, Foreground: #ededed
- Font: Poppins (300/400/500/600/700/800)

## Design Rules
- 8px base grid — all spacing multiples of 8
- clamp() for all font sizes — no media query font overrides
- max-w-7xl mx-auto on all section containers
- Every section needs bg-grid + radial glow background
- Glass cards: rgba(255,255,255,0.04) + backdrop-filter blur(16px)

## Animation Rules (Framer Motion — ALWAYS USE IT)
- Page load: staggered fadeInUp, 0.1s delays between elements
- Scroll reveal: whileInView with once:true, viewport margin -100px
- Hover: scale(1.03) + translateY(-4px), duration 0.2s
- Cards: cardFloat animation (subtle 5s loop)
- Hero elements: stagger 0.15s between badge/title/desc/cta/stats
- Buttons: hover glow pulse + slight scale

## Component Patterns
- Buttons: gradient purple→fuchsia, hover shimmer overlay
- Cards: glass-dark style, border shimmer on hover, neon bottom accent
- Section labels: fuchsia, uppercase, 2px letter-spacing
- Stats: animated counter with cubic easing on scroll
- Navigation: sticky, backdrop-blur, pill-shaped center nav

## Quality Standards
- Mobile-first, fully responsive
- No generic AI aesthetic — premium agency feel
- Every section has entrance animation
- Lighthouse 90+ performance target
- Consistent contact info everywhere