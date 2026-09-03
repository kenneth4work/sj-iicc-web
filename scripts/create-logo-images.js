import fs from 'fs';
import { execSync } from 'child_process';

// 1. Primary Gold Logo with Ambient Golden Glow (For Light Backgrounds like Navbar & Modals)
const svgLight = `<svg viewBox="0 0 540 130" width="1080" height="260" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Radiant Golden Neon Halo Filter -->
    <filter id="glow-gold" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="5" in="SourceGraphic" result="blurSmall" />
      <feGaussianBlur stdDeviation="14" in="SourceGraphic" result="blurWide" />
      <feMerge>
        <feMergeNode in="blurWide" />
        <feMergeNode in="blurSmall" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <!-- Luxury Metallic Gold Foil Gradient -->
    <linearGradient id="gold-metal-primary" x1="0%" y1="0%" x2="100%" y2="80%">
      <stop offset="0%" stop-color="#FDF2CC" />
      <stop offset="20%" stop-color="#F2D075" />
      <stop offset="48%" stop-color="#E2AE48" />
      <stop offset="78%" stop-color="#C68C26" />
      <stop offset="100%" stop-color="#A56E10" />
    </linearGradient>

    <linearGradient id="divider-grad-primary" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#F7DE92" />
      <stop offset="45%" stop-color="#DEA944" />
      <stop offset="85%" stop-color="#B87D1B" />
      <stop offset="100%" stop-color="#805105" />
    </linearGradient>
  </defs>

  <!-- Ambient Golden Glow Halo behind 'saji' (Exact photo match) -->
  <g opacity="0.88" filter="url(#glow-gold)">
    <ellipse cx="125" cy="65" rx="105" ry="34" fill="#F0B543" opacity="0.38" />
    <text x="24" y="87" font-family="Bodoni Moda, Didot, Bodoni MT, Georgia, serif" font-size="82" font-weight="500" letter-spacing="-0.015em" fill="#ECA933" opacity="0.65">saji</text>
  </g>

  <!-- Foreground Crisp Metallic Gold Text: saji -->
  <text x="24" y="87" font-family="Bodoni Moda, Didot, Bodoni MT, Georgia, serif" font-size="82" font-weight="500" letter-spacing="-0.015em" fill="url(#gold-metal-primary)">saji</text>

  <!-- Vertical Divider Pin -->
  <line x1="252" y1="26" x2="252" y2="98" stroke="url(#divider-grad-primary)" stroke-width="3" stroke-linecap="round" />
  <circle cx="252" cy="100" r="2.2" fill="#F7DE92" />

  <!-- Right Typography: CATERING by IICC -->
  <!-- CATERING with wide geometric tracking -->
  <text x="282" y="62" font-family="Montserrat, -apple-system, sans-serif" font-size="25" font-weight="700" letter-spacing="6.5" fill="url(#gold-metal-primary)">CATERING</text>
  <!-- by IICC -->
  <text x="282" y="94" font-family="Montserrat, -apple-system, sans-serif" font-size="20" letter-spacing="1.8" fill="#C68C26">
    <tspan font-weight="500">by </tspan>
    <tspan font-weight="800" fill="url(#gold-metal-primary)" letter-spacing="3.2">IICC</tspan>
  </text>
</svg>`;

// 2. Dark Background Variant (For Deep Navy Footer, High Luminosity Gold)
const svgDark = `<svg viewBox="0 0 540 130" width="1080" height="260" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-gold-dark" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="6" in="SourceGraphic" result="blurSmall" />
      <feGaussianBlur stdDeviation="16" in="SourceGraphic" result="blurWide" />
      <feMerge>
        <feMergeNode in="blurWide" />
        <feMergeNode in="blurSmall" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <linearGradient id="gold-metal-dark" x1="0%" y1="0%" x2="100%" y2="80%">
      <stop offset="0%" stop-color="#FFF5D6" />
      <stop offset="25%" stop-color="#FCE194" />
      <stop offset="50%" stop-color="#F2C157" />
      <stop offset="80%" stop-color="#DBA132" />
      <stop offset="100%" stop-color="#BA7E15" />
    </linearGradient>

    <linearGradient id="divider-grad-dark" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFF5D6" />
      <stop offset="50%" stop-color="#F0BF55" />
      <stop offset="100%" stop-color="#C28721" />
    </linearGradient>
  </defs>

  <g opacity="0.95" filter="url(#glow-gold-dark)">
    <ellipse cx="125" cy="65" rx="105" ry="34" fill="#F5C050" opacity="0.48" />
    <text x="24" y="87" font-family="Bodoni Moda, Didot, Bodoni MT, Georgia, serif" font-size="82" font-weight="500" letter-spacing="-0.015em" fill="#F5BC46" opacity="0.75">saji</text>
  </g>

  <text x="24" y="87" font-family="Bodoni Moda, Didot, Bodoni MT, Georgia, serif" font-size="82" font-weight="500" letter-spacing="-0.015em" fill="url(#gold-metal-dark)">saji</text>

  <line x1="252" y1="26" x2="252" y2="98" stroke="url(#divider-grad-dark)" stroke-width="3" stroke-linecap="round" />
  <circle cx="252" cy="100" r="2.2" fill="#FFF5D6" />

  <text x="282" y="62" font-family="Montserrat, -apple-system, sans-serif" font-size="25" font-weight="700" letter-spacing="6.5" fill="url(#gold-metal-dark)">CATERING</text>
  <text x="282" y="94" font-family="Montserrat, -apple-system, sans-serif" font-size="20" letter-spacing="1.8" fill="#FCE194">
    <tspan font-weight="500">by </tspan>
    <tspan font-weight="800" fill="url(#gold-metal-dark)" letter-spacing="3.2">IICC</tspan>
  </text>
</svg>`;

// Write temporary SVG files
fs.writeFileSync('/tmp/logo_light.svg', svgLight);
fs.writeFileSync('/tmp/logo_dark.svg', svgDark);

// Convert to high-resolution trimmed transparent PNGs
console.log('Rendering high-res PNGs...');
execSync('rsvg-convert -w 1080 /tmp/logo_light.svg -o /tmp/logo_light_raw.png');
execSync('rsvg-convert -w 1080 /tmp/logo_dark.svg -o /tmp/logo_dark_raw.png');

// Add gentle optical margin & write to public directory
execSync('convert /tmp/logo_light_raw.png -trim -bordercolor none -border 16x10 public/images/logo-saji.png');
execSync('convert /tmp/logo_dark_raw.png -trim -bordercolor none -border 16x10 public/images/logo-saji-dark.png');

// Also update logo.png and svg files
fs.copyFileSync('public/images/logo-saji.png', 'public/images/logo.png');
fs.writeFileSync('public/images/logo-saji.svg', svgLight);
fs.writeFileSync('public/images/logo.svg', svgLight);

console.log('Done! Created logo-saji.png and logo-saji-dark.png');
