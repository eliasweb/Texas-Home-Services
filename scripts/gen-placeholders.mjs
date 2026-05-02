import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const palettes = [
  { bg: "#1F3A5F", fg: "#FAF6EE", accent: "#E1B546" },
  { bg: "#152A47", fg: "#F1E9D6", accent: "#BF5700" },
  { bg: "#BF5700", fg: "#FAF6EE", accent: "#E1B546" },
  { bg: "#FAF6EE", fg: "#1F3A5F", accent: "#BF5700" },
  { bg: "#F1E9D6", fg: "#152A47", accent: "#BF5700" },
  { bg: "#1F3A5F", fg: "#F1E9D6", accent: "#BF5700" },
  { bg: "#152A47", fg: "#FAF6EE", accent: "#E1B546" },
  { bg: "#BF5700", fg: "#FAF6EE", accent: "#152A47" },
  { bg: "#FAF6EE", fg: "#BF5700", accent: "#1F3A5F" },
  { bg: "#1F3A5F", fg: "#FAF6EE", accent: "#BF5700" },
  { bg: "#F1E9D6", fg: "#1F3A5F", accent: "#E1B546" },
  { bg: "#152A47", fg: "#F1E9D6", accent: "#BF5700" },
];

const motifs = [
  // Wrench
  "M30 70 L50 50 a14 14 0 1 1 20 20 L50 90 Z M64 56 a8 8 0 1 0 -8 -8",
  // Roof
  "M20 70 L60 30 L100 70 L92 70 L60 42 L28 70 Z",
  // Bolt
  "M55 20 L35 70 L50 70 L42 105 L80 50 L62 50 L72 20 Z",
  // Star
  "M60 18 L72 50 L106 50 L78 70 L88 102 L60 82 L32 102 L42 70 L14 50 L48 50 Z",
  // Drop
  "M60 16 C40 50 30 70 60 100 C90 70 80 50 60 16 Z",
  // House
  "M22 60 L60 28 L98 60 L98 100 L70 100 L70 78 L50 78 L50 100 L22 100 Z",
  // Hammer
  "M30 30 L70 30 L70 50 L50 50 L50 110 L42 110 L42 50 L30 50 Z",
  // Leaf
  "M30 100 C30 50 70 30 100 30 C100 70 70 100 30 100 Z",
  // Brush
  "M20 90 L70 40 L88 58 L38 108 Z M76 32 L96 52",
  // Sun
  "M60 40 a20 20 0 1 0 0.001 0 Z M60 12 V24 M60 96 V108 M12 60 H24 M96 60 H108 M26 26 L34 34 M86 86 L94 94 M26 94 L34 86 M86 34 L94 26",
  // Saw
  "M14 60 L100 60 L96 70 L80 66 L76 76 L60 70 L56 80 L40 72 L36 82 L20 76 Z",
  // Bug
  "M60 30 a16 16 0 0 0 -16 16 v32 a16 16 0 0 0 32 0 V46 a16 16 0 0 0 -16 -16 Z M30 50 L44 56 M30 70 L44 70 M30 90 L44 84 M90 50 L76 56 M90 70 L76 70 M90 90 L76 84",
];

mkdirSync("public/pros", { recursive: true });

for (let i = 0; i < 12; i++) {
  const p = palettes[i];
  const motif = motifs[i];
  const idx = i + 1;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" role="img" aria-label="Texas Home Services placeholder">
  <rect width="120" height="120" fill="${p.bg}"/>
  <g fill="none" stroke="${p.fg}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" opacity="0.92">
    <path d="${motif}"/>
  </g>
  <g fill="${p.accent}">
    <path d="M104 14 L107 22 L115 22 L108.5 26.8 L111 35 L104 30 L97 35 L99.5 26.8 L93 22 L101 22 Z"/>
  </g>
  <rect x="0" y="110" width="120" height="10" fill="${p.accent}" opacity="0.85"/>
</svg>
`;
  writeFileSync(`public/pros/placeholder-${idx}.svg`, svg);
}

// Default OG image (simple branded card)
mkdirSync("public/og", { recursive: true });
writeFileSync(
  "public/og/default.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#152A47"/>
      <stop offset="1" stop-color="#1F3A5F"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <g opacity="0.10" fill="#E1B546">
    <path d="M1040 80 L1080 198 L1208 198 L1108 270 L1148 388 L1040 320 L932 388 L972 270 L872 198 L1000 198 Z"/>
  </g>
  <text x="80" y="280" font-family="Georgia, serif" font-size="84" font-weight="700" fill="#FAF6EE">Texas Home</text>
  <text x="80" y="370" font-family="Georgia, serif" font-size="84" font-weight="700" fill="#E1B546">Services</text>
  <text x="80" y="450" font-family="Inter, system-ui, sans-serif" font-size="32" fill="#F1E9D6">Trusted local pros from El Paso to Houston</text>
  <rect x="80" y="500" width="160" height="6" fill="#BF5700"/>
</svg>
`,
);
console.log("Generated 12 placeholders + OG image");
