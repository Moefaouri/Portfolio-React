import React, { useState } from "react";
import Nav from "./Nav";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════
   SVG THUMBNAILS — unified dark aesthetic, each with a
   distinct cool accent. Inspired by the violet palette.
   ═══════════════════════════════════════════════════════ */

/* ── SHARED HELPERS ── */
const Bg = ({ id, c1 = "#0b0f1a", c2 = "#0e1525" }) => (
  <defs>
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor={c1} />
      <stop offset="100%" stopColor={c2} />
    </linearGradient>
  </defs>
);

/** Hakeem — dashboard with data panels, medical cross motif */
const ThumbHakeem = () => (
  <svg viewBox="0 0 620 348" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
    <defs>
      <linearGradient id="hk-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#08090f" />
        <stop offset="100%" stopColor="#0c1020" />
      </linearGradient>
      <linearGradient id="hk-glow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect width="620" height="348" fill="url(#hk-bg)" />
    {/* top glow */}
    <ellipse cx="310" cy="0" rx="260" ry="80" fill="url(#hk-glow)" />
    {/* browser chrome */}
    <rect x="24" y="18" width="572" height="312" rx="12" fill="#0f1220" stroke="#6366f1" strokeOpacity="0.15" strokeWidth="1" />
    <rect x="24" y="18" width="572" height="32" rx="12" fill="#13162a" />
    <rect x="24" y="38" width="572" height="12" fill="#13162a" />
    <circle cx="44" cy="34" r="4.5" fill="#ff5f57" opacity="0.75" />
    <circle cx="58" cy="34" r="4.5" fill="#febc2e" opacity="0.75" />
    <circle cx="72" cy="34" r="4.5" fill="#28c840" opacity="0.75" />
    <rect x="92" y="27" width="220" height="14" rx="7" fill="#090b14" />
    <rect x="100" y="31" width="100" height="6" rx="3" fill="#6366f1" opacity="0.3" />
    {/* sidebar */}
    <rect x="24" y="50" width="112" height="280" fill="#0b0e1a" />
    <rect x="36" y="66" width="80" height="10" rx="4" fill="#6366f1" opacity="0.55" />
    {[88, 106, 124, 142, 160, 178].map((y, i) => (
      <g key={y}>
        <rect x="36" y={y} width={i === 0 ? 76 : 60} height="9" rx="4"
          fill={i === 0 ? "#6366f1" : "#6b7280"} opacity={i === 0 ? 0.5 : 0.18} />
      </g>
    ))}
    {/* KPI row */}
    {[{ x: 148, val: "2,841", lbl: "Patients" }, { x: 262, val: "149", lbl: "Surgeries" }, { x: 376, val: "62", lbl: "Active" }, { x: 490, val: "88%", lbl: "Beds" }].map(({ x, val, lbl }) => (
      <g key={x}>
        <rect x={x} y="60" width="100" height="54" rx="8" fill="#13162a" stroke="#6366f1" strokeOpacity="0.12" strokeWidth="1" />
        <rect x={x + 8} y="70" width="54" height="6" rx="3" fill="#6b7280" opacity="0.35" />
        <rect x={x + 8} y="82" width="80" height="10" rx="3" fill="#e2e8f0" opacity="0.4" />
        <rect x={x + 8} y="98" width="36" height="8" rx="4" fill="#6366f1" opacity="0.2" />
      </g>
    ))}
    {/* chart card */}
    <rect x="148" y="126" width="212" height="134" rx="8" fill="#13162a" stroke="#6366f1" strokeOpacity="0.1" strokeWidth="1" />
    <rect x="160" y="138" width="80" height="7" rx="3" fill="#6366f1" opacity="0.45" />
    {[0, 1, 2, 3, 4, 5, 6].map(i => {
      const heights = [38, 58, 44, 72, 52, 66, 48];
      return <rect key={i} x={162 + i * 26} y={226 - heights[i]} width="18" height={heights[i]} rx="3" fill="#6366f1" opacity={0.2 + i * 0.04} />;
    })}
    <polyline points="171,204 197,186 223,196 249,168 275,178 301,160 327,170" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeOpacity="0.6" />
    {[171, 197, 223, 249, 275, 301, 327].map((x, i) => {
      const ys = [204, 186, 196, 168, 178, 160, 170];
      return <circle key={i} cx={x} cy={ys[i]} r="3" fill="#818cf8" opacity="0.8" />;
    })}
    {/* table card */}
    <rect x="372" y="126" width="216" height="134" rx="8" fill="#13162a" stroke="#6366f1" strokeOpacity="0.1" strokeWidth="1" />
    <rect x="384" y="138" width="80" height="7" rx="3" fill="#6366f1" opacity="0.45" />
    <rect x="372" y="154" width="216" height="16" rx="4" fill="#0f1220" />
    {["Patient", "Type", "Status"].map((h, i) => (
      <rect key={i} x={384 + i * 68} y="158" width="52" height="5" rx="2" fill="#6b7280" opacity="0.3" />
    ))}
    {[0, 1, 2, 3, 4].map(i => (
      <g key={i}>
        <rect x="372" y={174 + i * 16} width="216" height="14" rx="3" fill={i % 2 === 0 ? "#0f1220" : "transparent"} fillOpacity="0.6" />
        <rect x="384" y={178 + i * 16} width="44" height="5" rx="2" fill="#94a3b8" opacity="0.3" />
        <rect x="452" y={178 + i * 16} width="50" height="5" rx="2" fill="#94a3b8" opacity="0.25" />
        <rect x="524" y={176 + i * 16} width="36" height="9" rx="4" fill={["#6366f1","#f59e0b","#10b981","#6366f1","#f59e0b"][i]} opacity="0.2" />
      </g>
    ))}
    {/* private badge */}
    <rect x="468" y="294" width="64" height="18" rx="9" fill="#ef4444" fillOpacity="0.1" stroke="#ef4444" strokeOpacity="0.25" strokeWidth="1" />
    <text x="500" y="306" textAnchor="middle" fill="#ef4444" fontSize="7" fontFamily="monospace" fontWeight="700">PRIVATE</text>
  </svg>
);

/** Beedouin — e-commerce, warm slate with gold accent */
const ThumbBeedouin = () => (
  <svg viewBox="0 0 620 348" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
    <defs>
      <linearGradient id="bd-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#09090f" />
        <stop offset="100%" stopColor="#0e0e18" />
      </linearGradient>
      <linearGradient id="bd-glow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d97706" stopOpacity="0.14" />
        <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect width="620" height="348" fill="url(#bd-bg)" />
    <ellipse cx="310" cy="0" rx="250" ry="70" fill="url(#bd-glow)" />
    {/* browser chrome */}
    <rect x="24" y="18" width="572" height="312" rx="12" fill="#0f0f18" stroke="#d97706" strokeOpacity="0.14" strokeWidth="1" />
    <rect x="24" y="18" width="572" height="32" rx="12" fill="#141420" />
    <rect x="24" y="38" width="572" height="12" fill="#141420" />
    <circle cx="44" cy="34" r="4.5" fill="#ff5f57" opacity="0.75" />
    <circle cx="58" cy="34" r="4.5" fill="#febc2e" opacity="0.75" />
    <circle cx="72" cy="34" r="4.5" fill="#28c840" opacity="0.75" />
    <rect x="92" y="27" width="220" height="14" rx="7" fill="#09090f" />
    <rect x="100" y="31" width="120" height="6" rx="3" fill="#d97706" opacity="0.25" />
    {/* top nav */}
    <rect x="24" y="50" width="572" height="28" fill="#0c0c16" />
    <rect x="38" y="59" width="90" height="10" rx="4" fill="#d97706" opacity="0.5" />
    {[200, 268, 336, 404].map((x, i) => (
      <rect key={i} x={x} y="60" width="56" height="8" rx="3" fill="#6b7280" opacity="0.2" />
    ))}
    <rect x="510" y="57" width="72" height="14" rx="7" fill="#d97706" opacity="0.18" />
    <rect x="520" y="61" width="44" height="6" rx="3" fill="#d97706" opacity="0.45" />
    {/* product grid 3x2 */}
    {[[36,90],[214,90],[392,90],[36,210],[214,210],[392,210]].map(([x, y], i) => (
      <g key={i}>
        <rect x={x} y={y} width="162" height="108" rx="10" fill="#141420" stroke="#d97706" strokeOpacity={0.12 - i * 0.01} strokeWidth="1" />
        {/* product image placeholder */}
        <rect x={x} y={y} width="162" height="62" rx="10" fill="#1c1c28" />
        <rect x={x} y={y + 50} width="162" height="12" fill="#1c1c28" />
        {/* shimmer lines in image */}
        <rect x={x + 50} y={y + 24} width="62" height="6" rx="3" fill="#d97706" opacity="0.08" />
        <rect x={x + 36} y={y + 34} width="90" height="5" rx="2" fill="#d97706" opacity="0.05" />
        {/* product info */}
        <rect x={x + 10} y={y + 70} width="100" height="7" rx="3" fill="#e2e8f0" opacity="0.4" />
        <rect x={x + 10} y={y + 82} width="64" height="8" rx="4" fill="#d97706" opacity="0.55" />
        <rect x={x + 10} y={y + 94} width="70" height="8" rx="4" fill="#d97706" opacity="0.12" />
        <rect x={x + 130} y={y + 80} width="22" height="22" rx="6" fill="#d97706" opacity="0.18" />
      </g>
    ))}
    {/* cart badge */}
    <rect x="510" y="280" width="72" height="28" rx="14" fill="#d97706" opacity="0.85" />
    <rect x="520" y="291" width="44" height="6" rx="3" fill="#09090f" opacity="0.5" />
  </svg>
);

/** UI Consistency Checker — cool slate/cyan audit tool */
const ThumbChecker = () => (
  <svg viewBox="0 0 620 348" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
    <defs>
      <linearGradient id="ck-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#08090f" />
        <stop offset="100%" stopColor="#0a0e1a" />
      </linearGradient>
      <linearGradient id="ck-glow" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.16" />
        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect width="620" height="348" fill="url(#ck-bg)" />
    <ellipse cx="310" cy="0" rx="240" ry="70" fill="url(#ck-glow)" />
    {/* left panel: extension popup */}
    <rect x="18" y="18" width="280" height="312" rx="12" fill="#0d1117" stroke="#06b6d4" strokeOpacity="0.18" strokeWidth="1" />
    <rect x="18" y="18" width="280" height="32" rx="12" fill="#111926" />
    <rect x="18" y="38" width="280" height="12" fill="#111926" />
    <circle cx="36" cy="34" r="4" fill="#ff5f57" opacity="0.7" />
    <circle cx="50" cy="34" r="4" fill="#febc2e" opacity="0.7" />
    <circle cx="64" cy="34" r="4" fill="#28c840" opacity="0.7" />
    <rect x="80" y="27" width="180" height="14" rx="7" fill="#08090f" />
    <rect x="88" y="31" width="90" height="6" rx="3" fill="#06b6d4" opacity="0.28" />
    {/* screenshot with error overlays */}
    <rect x="28" y="58" width="260" height="130" rx="6" fill="#0d1117" stroke="#06b6d4" strokeOpacity="0.1" strokeWidth="1" />
    <rect x="38" y="68" width="130" height="9" rx="4" fill="#94a3b8" opacity="0.32" />
    <rect x="38" y="82" width="100" height="7" rx="4" fill="#94a3b8" opacity="0.26" />
    <rect x="38" y="95" width="200" height="7" rx="4" fill="#94a3b8" opacity="0.2" />
    <rect x="38" y="108" width="150" height="28" rx="5" fill="#111926" />
    <rect x="38" y="142" width="200" height="28" rx="5" fill="#111926" />
    {/* error dashes */}
    <rect x="36" y="65" width="134" height="14" rx="3" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,2" />
    <rect x="36" y="106" width="154" height="32" rx="5" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,2" />
    <rect x="36" y="140" width="205" height="32" rx="5" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,2" />
    {/* results list */}
    <rect x="28" y="198" width="260" height="122" rx="8" fill="#111926" stroke="#06b6d4" strokeOpacity="0.15" strokeWidth="1" />
    <rect x="40" y="212" width="72" height="7" rx="3" fill="#06b6d4" opacity="0.5" />
    {[{ c: "#ef4444", w: 155 }, { c: "#ef4444", w: 125 }, { c: "#f59e0b", w: 155 }, { c: "#06b6d4", w: 110 }, { c: "#06b6d4", w: 98 }].map(({ c, w }, i) => (
      <g key={i}>
        <circle cx="42" cy={228 + i * 17} r="4" fill={c} opacity="0.75" />
        <rect x="52" y={224 + i * 17} width={w} height="8" rx="3" fill={c} opacity="0.16" />
        <rect x="52" y={224 + i * 17} width={w} height="8" rx="3" fill="none" stroke={c} strokeOpacity="0.2" strokeWidth="1" />
      </g>
    ))}
    <rect x="40" y="308" width="236" height="4" rx="2" fill="#08090f" />
    <rect x="40" y="308" width="166" height="4" rx="2" fill="#06b6d4" opacity="0.5" />
    {/* right panel: score readout */}
    <rect x="314" y="18" width="288" height="312" rx="12" fill="#0d1117" stroke="#06b6d4" strokeOpacity="0.12" strokeWidth="1" />
    <rect x="328" y="36" width="82" height="8" rx="4" fill="#06b6d4" opacity="0.4" />
    <rect x="328" y="52" width="260" height="80" rx="10" fill="#08090f" stroke="#06b6d4" strokeOpacity="0.08" strokeWidth="1" />
    <text x="458" y="100" textAnchor="middle" fill="#06b6d4" fontSize="34" fontFamily="monospace" fontWeight="700" opacity="0.85">74</text>
    <text x="490" y="100" fill="#475569" fontSize="16" fontFamily="monospace" opacity="0.6">/100</text>
    <rect x="336" y="116" width="244" height="5" rx="2" fill="#08090f" />
    <rect x="336" y="116" width="181" height="5" rx="2" fill="#06b6d4" opacity="0.5" />
    {[{ lbl: "Font consistency", v: 85, c: "#06b6d4" }, { lbl: "Color tokens", v: 62, c: "#f59e0b" }, { lbl: "Spacing system", v: 78, c: "#06b6d4" }, { lbl: "Border radius", v: 55, c: "#ef4444" }].map(({ lbl, v, c }, i) => (
      <g key={i}>
        <rect x="328" y={136 + i * 44} width="260" height="34" rx="8" fill="#111926" />
        <rect x="340" y={146 + i * 44} width="100" height="6" rx="3" fill="#94a3b8" opacity="0.35" />
        <rect x="340" y={157 + i * 44} width={Math.round(v * 2)} height="4" rx="2" fill={c} opacity="0.45" />
        <text x="578" y={160 + i * 44} textAnchor="end" fill={c} fontSize="9" fontFamily="monospace" opacity="0.7">{v}%</text>
      </g>
    ))}
  </svg>
);

/** Old portfolio — sidebar nav layout, violet palette (keep original accent) */
const ThumbOldPortfolio = () => (
  <svg viewBox="0 0 620 348" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
    <defs>
      <linearGradient id="op-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0a0914" />
        <stop offset="100%" stopColor="#0d0c1e" />
      </linearGradient>
      <linearGradient id="op-glow" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect width="620" height="348" fill="url(#op-bg)" />
    <ellipse cx="200" cy="0" rx="220" ry="90" fill="url(#op-glow)" />
    {/* sidebar */}
    <rect x="0" y="0" width="158" height="348" fill="#0d0c1e" />
    <rect x="158" y="0" width="1" height="348" fill="#7c3aed" fillOpacity="0.15" />
    {/* avatar */}
    <circle cx="79" cy="62" r="34" fill="#7c3aed" fillOpacity="0.1" stroke="#7c3aed" strokeOpacity="0.2" strokeWidth="1.5" />
    <circle cx="79" cy="62" r="22" fill="#7c3aed" fillOpacity="0.16" />
    <rect x="60" y="54" width="38" height="4" rx="2" fill="#7c3aed" opacity="0.45" />
    <rect x="64" y="62" width="30" height="4" rx="2" fill="#7c3aed" opacity="0.32" />
    <rect x="60" y="70" width="38" height="3" rx="1.5" fill="#94a3b8" opacity="0.2" />
    {/* nav items */}
    {[108, 132, 156, 180, 204].map((y, i) => (
      <g key={y}>
        <rect x="16" y={y} width="126" height="20" rx="8"
          fill={i === 0 ? "#7c3aed" : "transparent"}
          fillOpacity={i === 0 ? 0.2 : 1}
          stroke={i === 0 ? "#7c3aed" : "none"}
          strokeOpacity="0.3" strokeWidth="1" />
        <circle cx="30" cy={y + 10} r="4" fill={i === 0 ? "#7c3aed" : "#6b7280"} opacity={i === 0 ? 0.7 : 0.22} />
        <rect x="40" y={y + 7} width={[52, 44, 48, 38, 46][i]} height="6" rx="3"
          fill={i === 0 ? "#a78bfa" : "#6b7280"} opacity={i === 0 ? 0.7 : 0.22} />
      </g>
    ))}
    {/* main content */}
    <rect x="170" y="18" width="432" height="312" rx="12" fill="#0e0d1e" />
    {/* hero */}
    <rect x="186" y="38" width="180" height="16" rx="5" fill="#e2e8f0" opacity="0.48" />
    <rect x="186" y="60" width="130" height="10" rx="4" fill="#7c3aed" opacity="0.55" />
    <rect x="186" y="76" width="220" height="7" rx="3" fill="#94a3b8" opacity="0.28" />
    <rect x="186" y="88" width="200" height="6" rx="3" fill="#94a3b8" opacity="0.22" />
    <rect x="186" y="104" width="96" height="24" rx="12" fill="#7c3aed" opacity="0.82" />
    <rect x="290" y="104" width="84" height="24" rx="12" fill="none" stroke="#7c3aed" strokeOpacity="0.38" strokeWidth="1.5" />
    {/* project cards 2x2 */}
    {[[186, 144], [340, 144], [186, 258], [340, 258]].map(([x, y], i) => (
      <g key={i}>
        <rect x={x} y={y} width="138" height="98" rx="10" fill="#13122a" stroke="#7c3aed" strokeOpacity={0.14 - i * 0.02} strokeWidth="1" />
        <rect x={x} y={y} width="138" height="50" rx="10" fill="#7c3aed" fillOpacity={0.06 + i * 0.01} />
        <rect x={x} y={y + 40} width="138" height="10" fill="#13122a" />
        <rect x={x + 10} y={y + 58} width="80" height="7" rx="3" fill="#e2e8f0" opacity="0.36" />
        <rect x={x + 10} y={y + 70} width="100" height="5" rx="2" fill="#94a3b8" opacity="0.24" />
        <rect x={x + 10} y={y + 80} width="56" height="10" rx="5" fill="#7c3aed" opacity="0.22" />
      </g>
    ))}
  </svg>
);

/** Hakeem Healthcare UI — design system board, indigo */
const ThumbHakeemUI = () => (
  <svg viewBox="0 0 620 348" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
    <defs>
      <linearGradient id="hkui-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#08090f" />
        <stop offset="100%" stopColor="#0c1020" />
      </linearGradient>
      <linearGradient id="hkui-glow" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect width="620" height="348" fill="url(#hkui-bg)" />
    <ellipse cx="310" cy="0" rx="280" ry="85" fill="url(#hkui-glow)" />
    {/* XD canvas dots */}
    {Array.from({ length: 10 }, (_, c) => Array.from({ length: 7 }, (_, r) => (
      <circle key={`${c}-${r}`} cx={16 + c * 64} cy={16 + r * 54} r="1.2" fill="#6366f1" fillOpacity="0.1" />
    )))}
    {/* left artboard */}
    <rect x="16" y="16" width="284" height="316" rx="10" fill="#0d1020" stroke="#6366f1" strokeOpacity="0.2" strokeWidth="1" />
    <rect x="16" y="16" width="284" height="30" rx="10" fill="#13162a" />
    <rect x="16" y="34" width="284" height="12" fill="#13162a" />
    <rect x="28" y="25" width="70" height="8" rx="3" fill="#6366f1" opacity="0.4" />
    {/* module nav */}
    <rect x="26" y="56" width="264" height="22" rx="6" fill="#13162a" />
    {["Overview", "Patients", "Schedule"].map((l, i) => (
      <g key={i}>
        <rect x={36 + i * 88} y="60" width="68" height="14" rx="4"
          fill={i === 0 ? "#6366f1" : "transparent"} fillOpacity={i === 0 ? 0.18 : 1}
          stroke={i === 0 ? "#6366f1" : "none"} strokeOpacity="0.3" strokeWidth="1" />
        <rect x={44 + i * 88} y="63" width="42" height="6" rx="3"
          fill={i === 0 ? "#818cf8" : "#6b7280"} opacity={i === 0 ? 0.65 : 0.22} />
      </g>
    ))}
    {/* content cards 2x2 */}
    {[[26, 88], [154, 88], [26, 206], [154, 206]].map(([x, y], i) => (
      <g key={i}>
        <rect x={x} y={y} width="118" height="106" rx="8" fill="#13162a" stroke="#6366f1" strokeOpacity={0.12 - i * 0.02} strokeWidth="1" />
        <rect x={x} y={y} width="118" height="50" rx="8" fill="#6366f1" fillOpacity={0.06 + i * 0.01} />
        <rect x={x} y={y + 40} width="118" height="10" fill="#13162a" />
        <rect x={x + 10} y={y + 58} width="72" height="7" rx="3" fill="#e2e8f0" opacity="0.35" />
        <rect x={x + 10} y={y + 70} width="90" height="5" rx="2" fill="#94a3b8" opacity="0.22" />
        <rect x={x + 10} y={y + 80} width="50" height="8" rx="4" fill="#6366f1" opacity="0.2" />
        <rect x={x + 10} y={y + 92} width="98" height="6" rx="3" fill="#94a3b8" opacity="0.18" />
      </g>
    ))}
    {/* right artboard: tokens */}
    <rect x="314" y="16" width="290" height="316" rx="10" fill="#0d1020" stroke="#6366f1" strokeOpacity="0.15" strokeWidth="1" />
    <rect x="326" y="32" width="90" height="8" rx="4" fill="#6366f1" opacity="0.4" />
    {/* color swatches */}
    {["#6366f1","#818cf8","#e2e8f0","#94a3b8","#1e2235","#0d1020"].map((c, i) => (
      <g key={i}>
        <rect x={326 + (i % 3) * 92} y={48 + Math.floor(i / 3) * 52} width="76" height="34" rx="6" fill={c} />
        <rect x={326 + (i % 3) * 92} y={82 + Math.floor(i / 3) * 52} width="76" height="10" rx="4" fill="#0d1020" />
      </g>
    ))}
    {/* type scale */}
    <rect x="326" y="162" width="82" height="7" rx="3" fill="#6366f1" opacity="0.4" />
    {[0, 1, 2, 3].map(i => (
      <rect key={i} x="326" y={176 + i * 16} width={264 - i * 52} height={10 - i * 1.5} rx="3" fill="#e2e8f0" opacity={0.45 - i * 0.08} />
    ))}
    {/* spacing tokens */}
    <rect x="326" y="244" width="82" height="7" rx="3" fill="#6366f1" opacity="0.4" />
    {[4, 8, 12, 16, 24, 32].map((s, i) => (
      <rect key={i} x={326 + i * 48} y="256" width={s} height={s} rx="2" fill="#6366f1" opacity={0.22 + i * 0.04} />
    ))}
    {/* private badge */}
    <rect x="430" y="300" width="64" height="18" rx="9" fill="#ef4444" fillOpacity="0.1" stroke="#ef4444" strokeOpacity="0.25" strokeWidth="1" />
    <text x="462" y="312" textAnchor="middle" fill="#ef4444" fontSize="7" fontFamily="monospace" fontWeight="700">PRIVATE</text>
  </svg>
);

/** UI Consistency Checker Landing — rose/slate web landing */
const ThumbCheckerLanding = () => (
  <svg viewBox="0 0 620 348" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
    <defs>
      <linearGradient id="cl-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#08090f" />
        <stop offset="100%" stopColor="#0c0d1a" />
      </linearGradient>
      <linearGradient id="cl-glow" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect width="620" height="348" fill="url(#cl-bg)" />
    <ellipse cx="310" cy="0" rx="260" ry="75" fill="url(#cl-glow)" />
    {/* browser */}
    <rect x="22" y="16" width="576" height="316" rx="12" fill="#0d1117" stroke="#06b6d4" strokeOpacity="0.2" strokeWidth="1.5" />
    <rect x="22" y="16" width="576" height="34" rx="12" fill="#111926" />
    <rect x="22" y="38" width="576" height="12" fill="#111926" />
    <circle cx="42" cy="33" r="5" fill="#ff5f57" opacity="0.7" />
    <circle cx="58" cy="33" r="5" fill="#febc2e" opacity="0.7" />
    <circle cx="74" cy="33" r="5" fill="#28c840" opacity="0.7" />
    <rect x="94" y="24" width="360" height="18" rx="9" fill="#080c12" />
    <text x="274" y="37" textAnchor="middle" fill="#06b6d4" fontSize="8" fontFamily="monospace" opacity="0.55">ui-consistency-checker.vercel.app</text>
    {/* top nav */}
    <rect x="30" y="58" width="560" height="26" fill="#080c12" />
    <rect x="42" y="66" width="84" height="10" rx="4" fill="#06b6d4" opacity="0.5" />
    {[200, 268, 336].map((x, i) => <rect key={i} x={x} y="67" width="50" height="8" rx="3" fill="#6b7280" opacity="0.2" />)}
    <rect x="486" y="62" width="80" height="16" rx="8" fill="#06b6d4" opacity="0.18" />
    <rect x="496" y="66" width="52" height="8" rx="4" fill="#06b6d4" opacity="0.5" />
    {/* hero section */}
    <rect x="170" y="96" width="280" height="16" rx="5" fill="#e2e8f0" opacity="0.48" />
    <rect x="200" y="118" width="220" height="9" rx="4" fill="#94a3b8" opacity="0.35" />
    <rect x="218" y="136" width="184" height="28" rx="14" fill="#06b6d4" opacity="0.72" />
    <rect x="244" y="145" width="120" height="9" rx="4" fill="#08090f" opacity="0.6" />
    {/* upload panel */}
    <rect x="30" y="178" width="270" height="144" rx="10" fill="#080c12" stroke="#06b6d4" strokeOpacity="0.22" strokeWidth="1.5" strokeDasharray="7,4" />
    <circle cx="165" cy="230" r="30" fill="#06b6d4" fillOpacity="0.07" />
    <text x="165" y="238" textAnchor="middle" fill="#06b6d4" fontSize="24" opacity="0.45">↑</text>
    <rect x="96" y="274" width="138" height="8" rx="4" fill="#94a3b8" opacity="0.28" />
    <rect x="120" y="288" width="90" height="7" rx="3" fill="#94a3b8" opacity="0.2" />
    <rect x="132" y="302" width="66" height="14" rx="7" fill="#06b6d4" opacity="0.2" />
    {/* results panel */}
    <rect x="316" y="178" width="274" height="144" rx="10" fill="#111926" stroke="#06b6d4" strokeOpacity="0.18" strokeWidth="1" />
    <rect x="330" y="192" width="80" height="8" rx="4" fill="#06b6d4" opacity="0.5" />
    {[{ c: "#ef4444", w: 158 }, { c: "#ef4444", w: 128 }, { c: "#f59e0b", w: 150 }, { c: "#06b6d4", w: 110 }, { c: "#06b6d4", w: 95 }].map(({ c, w }, i) => (
      <g key={i}>
        <circle cx="332" cy={210 + i * 20} r="4.5" fill={c} opacity="0.75" />
        <rect x="344" y={206 + i * 20} width={w} height="8" rx="3" fill={c} opacity="0.16" />
      </g>
    ))}
    <rect x="330" y="306" width="250" height="5" rx="2" fill="#080c12" />
    <rect x="330" y="306" width="185" height="5" rx="2" fill="#06b6d4" opacity="0.5" />
  </svg>
);

/** Accident Documentation — deep purple mobile flow */
const ThumbAccident = () => (
  <svg viewBox="0 0 620 348" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
    <defs>
      <linearGradient id="ac-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#09080f" />
        <stop offset="100%" stopColor="#0e0c1c" />
      </linearGradient>
      <linearGradient id="ac-glow" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect width="620" height="348" fill="url(#ac-bg)" />
    <ellipse cx="310" cy="0" rx="240" ry="80" fill="url(#ac-glow)" />
    {/* flow steps */}
    {[{ y: 32, label: "Open App" }, { y: 96, label: "Location" }, { y: 160, label: "Photo" }, { y: 224, label: "Form" }, { y: 288, label: "Submit" }].map(({ y, label }, i) => (
      <g key={i}>
        <rect x="14" y={y} width="96" height="34" rx="8" fill="#130f22" stroke="#a855f7" strokeOpacity="0.26" strokeWidth="1" />
        <text x="62" y={y + 21} textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace" opacity="0.8">{label}</text>
        {i < 4 && <line x1="62" y1={y + 34} x2="62" y2={y + 60} stroke="#a855f7" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="3,2" />}
        {i < 4 && <polygon points={`62,${y + 62} 57,${y + 54} 67,${y + 54}`} fill="#a855f7" opacity="0.35" />}
      </g>
    ))}
    {/* phone mockup */}
    <rect x="146" y="14" width="224" height="320" rx="24" fill="#130f22" stroke="#a855f7" strokeOpacity="0.3" strokeWidth="1.5" />
    <rect x="160" y="34" width="196" height="282" rx="12" fill="#0e0b1a" />
    <rect x="160" y="34" width="196" height="28" rx="12" fill="#180f2a" />
    <rect x="160" y="50" width="196" height="12" fill="#180f2a" />
    <rect x="176" y="42" width="72" height="8" rx="4" fill="#a855f7" opacity="0.45" />
    {/* map zone */}
    <rect x="168" y="70" width="180" height="104" rx="8" fill="#110d20" />
    {[90, 108, 126, 144].map(y => <line key={y} x1="168" y1={y} x2="348" y2={y} stroke="#a855f7" strokeOpacity="0.06" strokeWidth="1" />)}
    {[212, 257, 302].map(x => <line key={x} x1={x} y1="70" x2={x} y2="174" stroke="#a855f7" strokeOpacity="0.06" strokeWidth="1" />)}
    <line x1="168" y1="122" x2="348" y2="122" stroke="#6b7280" strokeOpacity="0.22" strokeWidth="2.5" />
    <line x1="258" y1="70" x2="258" y2="174" stroke="#6b7280" strokeOpacity="0.22" strokeWidth="2.5" />
    <circle cx="258" cy="122" r="15" fill="#ef4444" opacity="0.7" />
    <text x="258" y="128" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">!</text>
    {/* form fields */}
    {[182, 228, 274].map((y, i) => (
      <g key={i}>
        <rect x="168" y={y} width="180" height="34" rx="7" fill="#180f2a" stroke="#a855f7" strokeOpacity="0.16" strokeWidth="1" />
        <rect x="180" y={y + 10} width="56" height="6" rx="3" fill="#a855f7" opacity="0.35" />
        <rect x="180" y={y + 21} width="100" height="5" rx="2" fill="#94a3b8" opacity="0.24" />
      </g>
    ))}
    <rect x="176" y="314" width="164" height="24" rx="12" fill="#a855f7" opacity="0.7" />
    <text x="258" y="330" textAnchor="middle" fill="#fff" fontSize="9" fontFamily="monospace" fontWeight="600">Submit Report</text>
    {/* annotations right */}
    {[{ y: 120, label: "location pin" }, { y: 196, label: "photo upload" }, { y: 260, label: "incident form" }].map(({ y, label }, i) => (
      <g key={i}>
        <line x1="372" y1={y} x2="428" y2={y - 8} stroke="#a855f7" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3,2" />
        <rect x="430" y={y - 20} width="138" height="18" rx="5" fill="#a855f7" fillOpacity="0.08" />
        <text x="499" y={y - 7} textAnchor="middle" fill="#a855f7" fontSize="9" fontFamily="monospace" opacity="0.6">{label}</text>
      </g>
    ))}
  </svg>
);

/** Patient Service Requests — slate/indigo data table */
const ThumbPatient = () => (
  <svg viewBox="0 0 620 348" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
    <defs>
      <linearGradient id="pt-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#08090f" />
        <stop offset="100%" stopColor="#0c1020" />
      </linearGradient>
      <linearGradient id="pt-glow" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.16" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect width="620" height="348" fill="url(#pt-bg)" />
    <ellipse cx="310" cy="0" rx="280" ry="85" fill="url(#pt-glow)" />
    <rect x="16" y="14" width="588" height="320" rx="12" fill="#0d1020" stroke="#6366f1" strokeOpacity="0.16" strokeWidth="1" />
    {/* top nav */}
    <rect x="16" y="14" width="588" height="34" rx="12" fill="#13162a" />
    <rect x="16" y="36" width="588" height="12" fill="#13162a" />
    <rect x="30" y="24" width="110" height="10" rx="4" fill="#6366f1" opacity="0.4" />
    <rect x="490" y="22" width="100" height="16" rx="8" fill="#6366f1" opacity="0.18" />
    <rect x="500" y="26" width="72" height="8" rx="4" fill="#6366f1" opacity="0.4" />
    {/* sidebar */}
    <rect x="16" y="48" width="118" height="286" fill="#0a0c18" />
    {[66, 90, 114, 138, 162, 186, 210].map((y, i) => (
      <rect key={y} x="28" y={y} width={i === 0 ? 84 : 70} height="10" rx="4"
        fill={i === 0 ? "#6366f1" : "#6b7280"} opacity={i === 0 ? 0.5 : 0.16} />
    ))}
    {/* filter tabs */}
    <rect x="144" y="58" width="452" height="24" rx="6" fill="#13162a" />
    {["All Requests", "Pending", "Approved", "Urgent"].map((t, i) => (
      <g key={i}>
        <rect x={156 + i * 104} y="62" width="84" height="16" rx="8"
          fill={i === 0 ? "#6366f1" : "transparent"} fillOpacity={i === 0 ? 0.18 : 1}
          stroke={i === 0 ? "#6366f1" : "none"} strokeOpacity="0.3" strokeWidth="1" />
        <rect x={164 + i * 104} y="66" width="56" height="6" rx="3"
          fill={i === 0 ? "#818cf8" : "#6b7280"} opacity={i === 0 ? 0.65 : 0.2} />
      </g>
    ))}
    {/* table header */}
    <rect x="144" y="90" width="452" height="22" rx="5" fill="#13162a" />
    {["Patient", "Type", "Date", "Priority", "Status", "Action"].map((h, i) => (
      <rect key={i} x={156 + i * 72} y="97" width={[44, 56, 38, 50, 46, 40][i]} height="6" rx="3" fill="#6b7280" opacity="0.28" />
    ))}
    {/* rows */}
    {Array.from({ length: 8 }, (_, i) => {
      const statusColors = ["#6366f1","#f59e0b","#ef4444","#10b981","#f59e0b","#6366f1","#ef4444","#10b981"];
      return (
        <g key={i}>
          <rect x="144" y={116 + i * 24} width="452" height="20" rx="3"
            fill={i % 2 === 0 ? "#13162a" : "transparent"} fillOpacity="0.5" />
          <rect x="156" y={121 + i * 24} width="50" height="6" rx="3" fill="#94a3b8" opacity="0.3" />
          <rect x="228" y={121 + i * 24} width="60" height="6" rx="3" fill="#94a3b8" opacity="0.24" />
          <rect x="300" y={121 + i * 24} width="42" height="6" rx="3" fill="#94a3b8" opacity="0.22" />
          <rect x="372" y={119 + i * 24} width="46" height="10" rx="5" fill={statusColors[i]} fillOpacity="0.16" />
          <rect x="444" y={119 + i * 24} width="52" height="10" rx="5" fill={statusColors[i]} fillOpacity="0.2" />
          <rect x="508" y={119 + i * 24} width="40" height="10" rx="5" fill="#6366f1" fillOpacity="0.18" />
        </g>
      );
    })}
  </svg>
);

/** Taskery — kanban board, warm slate/amber */
const ThumbTaskery = () => (
  <svg viewBox="0 0 620 348" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
    <defs>
      <linearGradient id="tk-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#08090f" />
        <stop offset="100%" stopColor="#0e0d18" />
      </linearGradient>
      <linearGradient id="tk-glow" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.14" />
        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect width="620" height="348" fill="url(#tk-bg)" />
    <ellipse cx="310" cy="0" rx="260" ry="75" fill="url(#tk-glow)" />
    {/* browser chrome */}
    <rect x="18" y="16" width="584" height="316" rx="12" fill="#0d0c18" stroke="#f59e0b" strokeOpacity="0.14" strokeWidth="1" />
    <rect x="18" y="16" width="584" height="32" rx="12" fill="#131220" />
    <rect x="18" y="36" width="584" height="12" fill="#131220" />
    <circle cx="36" cy="32" r="4.5" fill="#ff5f57" opacity="0.7" />
    <circle cx="50" cy="32" r="4.5" fill="#febc2e" opacity="0.7" />
    <circle cx="64" cy="32" r="4.5" fill="#28c840" opacity="0.7" />
    <rect x="82" y="25" width="220" height="14" rx="7" fill="#080810" />
    <rect x="90" y="29" width="100" height="6" rx="3" fill="#f59e0b" opacity="0.22" />
    {/* app header */}
    <rect x="26" y="48" width="568" height="26" fill="#09091a" />
    <rect x="38" y="56" width="88" height="10" rx="4" fill="#f59e0b" opacity="0.48" />
    <rect x="218" y="54" width="166" height="14" rx="7" fill="#131220" />
    <rect x="228" y="58" width="80" height="6" rx="3" fill="#6b7280" opacity="0.3" />
    <rect x="516" y="52" width="64" height="18" rx="9" fill="#f59e0b" opacity="0.18" />
    <rect x="526" y="56" width="36" height="8" rx="4" fill="#f59e0b" opacity="0.5" />
    {/* 3 kanban columns */}
    {[
      { x: 26, accent: "#6366f1", label: "To Do", tasks: [52, 44, 60, 38] },
      { x: 216, accent: "#f59e0b", label: "In Progress", tasks: [68, 50, 44] },
      { x: 406, accent: "#10b981", label: "Done", tasks: [44, 52, 40, 44] },
    ].map(({ x, accent, label, tasks }) => {
      let ty = 116;
      return (
        <g key={x}>
          {/* column header */}
          <rect x={x} y="80" width="182" height="28" rx="7" fill="#131220" />
          <rect x={x + 10} y="89" width="8" height="8" rx="2" fill={accent} opacity="0.7" />
          <rect x={x + 24} y="90" width="78" height="7" rx="3" fill={accent} opacity="0.5" />
          <rect x={x + 146} y="87" width="28" height="14" rx="7" fill={accent} fillOpacity="0.14" />
          <rect x={x + 152} y="91" width="16" height="6" rx="3" fill={accent} opacity="0.4" />
          {/* task cards */}
          {tasks.map((h, i) => {
            const cy = ty;
            ty += h + 8;
            return (
              <g key={i}>
                <rect x={x} y={cy} width="182" height={h} rx="8" fill="#131220" stroke={accent} strokeOpacity="0.12" strokeWidth="1" />
                <rect x={x} y={cy + 8} width="3" height={h - 16} rx="1.5" fill={accent} opacity="0.55" />
                <rect x={x + 12} y={cy + 10} width={96 + i * 8} height="7" rx="3" fill="#e2e8f0" opacity="0.32" />
                {h > 44 && <rect x={x + 12} y={cy + 22} width="140" height="5" rx="2" fill="#94a3b8" opacity="0.2" />}
                {h > 55 && <rect x={x + 12} y={cy + 31} width="110" height="5" rx="2" fill="#94a3b8" opacity="0.16" />}
                <rect x={x + 12} y={cy + h - 18} width="44" height="11" rx="6" fill={accent} fillOpacity="0.14" />
                {h > 44 && <rect x={x + 62} y={cy + h - 18} width="44" height="11" rx="6" fill={accent} fillOpacity="0.09" />}
                <circle cx={x + 158} cy={cy + h - 12} r="6" fill={accent} fillOpacity="0.2" stroke={accent} strokeOpacity="0.3" strokeWidth="0.8" />
                <circle cx={x + 170} cy={cy + h - 12} r="6" fill={accent} fillOpacity="0.12" stroke={accent} strokeOpacity="0.2" strokeWidth="0.8" />
              </g>
            );
          })}
          {/* add btn */}
          <rect x={x} y={ty} width="182" height="22" rx="7" fill={accent} fillOpacity="0.05" stroke={accent} strokeOpacity="0.12" strokeWidth="1" strokeDasharray="4,3" />
          <text x={x + 91} y={ty + 14} textAnchor="middle" fill={accent} fontSize="9" fontFamily="monospace" opacity="0.38">+ Add task</text>
        </g>
      );
    })}
  </svg>
);

/* ─── ICONS ─── */
const ArrowIcon = () => (
  <svg stroke="currentColor" fill="currentColor" viewBox="0 0 256 256">
    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z" />
  </svg>
);
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
  </svg>
);
const ChromeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
    <path d="M0 256C0 209.4 12.5 165.6 34.3 127.1L144.1 318.3C165.1 357.5 206.9 384 255.8 384C270.1 384 283.9 381.7 296.8 377.4L220.5 509.6C96.7 492.3 0 383.8 0 256zM365.1 321.6C377.4 302.4 384 279.1 384 256C384 217.8 367.2 183.5 340.7 160H494.8C504.4 223.8 491.5 292 459.1 350.6L365.1 321.6zM477.8 128H255.8C209.4 128 168.8 152.2 145.5 188.5L68.6 56.97C115 21.53 173.2 0 256 0C349.2 0 433.5 46.22 477.8 128V128zM168 256C168 207.4 207.4 168 256 168C304.6 168 344 207.4 344 256C344 304.6 304.6 344 256 344C207.4 344 168 304.6 168 256z" />
  </svg>
);
const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
    <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
  </svg>
);

/* ─── PROJECT DATA ─── */
const FRONTEND_PROJECTS = [
  {
    title: "Hakeem Healthcare Suite",
    description: "Jordan's national health platform — 8+ frontend modules covering clinical workflows, patient management, and mobile access.",
    href: null,
    github: "https://github.com/Moefaouri",
    chips: ["JavaScript", "React Native", "CSS", "PHP"],
    isPrivate: true,
    Thumb: ThumbHakeem,
  },
  {
    title: "Beedouin",
    description: "Full e-commerce storefront for a Jordanian honey brand — live in production. Arabic RTL layout, product catalog, cart, and contact flow.",
    href: "https://petra-bloom.vercel.app/",
    github: "https://github.com/Moefaouri/PetraBloom",
    chips: ["Next.js", "React.js", "CSS", "RTL"],
    Thumb: ThumbBeedouin,
  },
  {
    title: "UI Consistency Checker",
    description: "Chrome extension that catches UI inconsistencies — wrong fonts, colors, broken spacing — before they hit production.",
    href: "https://chromewebstore.google.com/detail/ui-consistency-checker/mgidcbjkhigegdgdehnefogenihoboon?utm_source=item-share-cb",
    github: "https://github.com/Moefaouri",
    chips: ["Chrome Extension", "React.js", "CSS"],
    isChrome: true,
    Thumb: ThumbChecker,
  },
  {
    title: "UI Consistency Checker — Landing",
    description: "Web app UI/UX for the UI Consistency Checker — upload a screenshot, get an instant consistency audit with a scored breakdown.",
    href: "https://ui-consistency-checker.vercel.app/",
    github: null,
    chips: ["Next.js", "React.js", "CSS"],
    Thumb: ThumbCheckerLanding,
  },
  {
    title: "Personal Portfolio — Old Version",
    description: "My previous portfolio built with vanilla HTML, CSS & JavaScript — the version before this React migration.",
    href: "https://moefaouri.github.io/portfolio/",
    github: "https://github.com/Moefaouri/portfolio",
    chips: ["HTML", "CSS", "JavaScript"],
    Thumb: ThumbOldPortfolio,
  },
];

const UIUX_PROJECTS = [
  {
    title: "Patient Service Requests",
    description: "Healthcare wireframe for managing patient request flows — priority queues, status tracking, and approval workflows across clinical departments.",
    href: "https://xd.adobe.com/view/75cb6e6d-5afd-4fe2-b06d-54a129994965-2098/",
    github: null,
    chips: ["Wireframing", "Adobe XD", "Healthcare UX"],
    Thumb: ThumbPatient,
  },
  {
    title: "Taskery",
    description: "Task management app UI/UX — Kanban board design with drag-and-drop task flow, priority tagging, team assignment, and progress tracking.",
    href: "https://github.com/Moefaouri/Design/tree/main/Projects",
    github: null,
    chips: ["Adobe XD", "Product Design", "Wireframing"],
    Thumb: ThumbTaskery,
  },
  {
    title: "Accident Documentation App",
    description: "Mobile UI/UX design for a road accident documentation app — location capture, photo upload, incident form, and report submission flow.",
    href: "https://xd.adobe.com/view/5427591a-d9f2-42e2-a955-6bb47b48458d-0174/",
    github: null,
    chips: ["Adobe XD", "Mobile UX", "Wireframing"],
    Thumb: ThumbAccident,
  },
  {
    title: "Hakeem — Healthcare Modules UI",
    description: "End-to-end UI/UX design across 8+ healthcare modules — Surgery Management, Emergency System, Medical Committee, PIM Web and more.",
    href: null,
    github: null,
    chips: ["Adobe XD", "Photoshop", "Illustrator", "Wireframing"],
    isPrivate: true,
    Thumb: ThumbHakeemUI,
  },
];

/* ─── PROJECT CARD ─── */
const ProjectCard = ({ project }) => {
  const { title, description, href, github, chips, isPrivate, isChrome, Thumb } = project;
  return (
    <div className="project-card">
      <div className="project-thumb">
        {href && !isPrivate
          ? <a href={href} target="_blank" rel="noreferrer" style={{ display: "block", width: "100%", height: "100%" }}><Thumb /></a>
          : <Thumb />
        }
      </div>
      <div className="project-body">
        <div className="project-chips">
          {chips.map(c => <span className="chip" key={c}>{c}</span>)}
          {isPrivate && (
            <span className="chip chip-private"><LockIcon /> Private</span>
          )}
        </div>
        <div className="project-footer">
          <div style={{ flex: 1, minWidth: 0 }}>
            {href && !isPrivate
              ? <a className="project-name" href={href} target="_blank" rel="noreferrer">{title}</a>
              : <span className="project-name" style={{ cursor: "default" }}>{title}</span>
            }
            <p className="project-desc">{description}</p>
          </div>
          <div style={{ display: "flex", gap: 5, flexShrink: 0, marginTop: 3 }}>
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className="project-link-btn" title="GitHub"><GithubIcon /></a>
            )}
            {isChrome && href && (
              <a href={href} target="_blank" rel="noreferrer" className="project-link-btn project-link-chrome" title="Chrome Web Store"><ChromeIcon /></a>
            )}
            {href && !isPrivate && !isChrome && (
              <a href={href} target="_blank" rel="noreferrer" className="project-link-btn" title="View live"><ArrowIcon /></a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── PAGE ─── */
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const projects = activeTab === "frontend" ? FRONTEND_PROJECTS : UIUX_PROJECTS;

  return (
    <div className="page-shell">
      <Nav />
      <main className="main-pane">
        <div className="page-header">
          <h3>Project Portfolio</h3>
          <p>A selection of work across web development and UI/UX design.</p>
          <Link href="/contact" className="btn-primary-custom" style={{ display: "inline-flex", margin: "0 auto" }}>
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 256 256">
              <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68Z" />
            </svg>
            Hire Me
          </Link>
        </div>

        <div className="portfolio-tabs-wrap">
          <div className="portfolio-tabs">
            <button className={`tab-btn${activeTab === "frontend" ? " active" : ""}`} onClick={() => setActiveTab("frontend")}>
              Front-End
            </button>
            <button className={`tab-btn${activeTab === "uiux" ? " active" : ""}`} onClick={() => setActiveTab("uiux")}>
              UI/UX Design
            </button>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;