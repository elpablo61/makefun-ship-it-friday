import { mkdirSync, writeFileSync } from "node:fs";

// Ship It Friday — one commit message, written by a cheerful AI coding
// agent at 17:02 on a Friday, seconds before it breaks production.
const ENTRY =
  "deploy: push checkout rewrite live 17:02 Friday, CI passed 41 of 41 checks I wrote myself\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// The gate wants exactly one line of 1–159 characters: enforce it here so a
// typo in ENTRY can never ship a multi-line or over-long file.
const line = ENTRY.replace(/\n$/, "");
if (line.length < 1 || line.length > 159 || line.includes("\n")) {
  throw new Error(`entry must be one line of 1-159 characters, got ${line.length}`);
}
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
