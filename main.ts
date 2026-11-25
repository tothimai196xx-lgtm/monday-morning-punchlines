// Monday Morning Punchlines — u-gentle-badger-68-monday-morning-punchlines-709645dc
// Writes one joke about Monday mornings to /output/entry.txt (1-200 chars).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY: string =
  "I told my alarm we had a deal: it only rings when I'm already awake. It rang anyway. Now it's Monday, my coffee's filed for overtime, and my bed is suing me for breach of weekend.";

const OUTPUT_DIR: string = process.argv[2] ?? "/output";

function main(): void {
  // The sealed gate accepts only UTF-8 text of 1-200 characters, not only
  // white space — refuse to write anything that would fail it.
  if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
    throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY, "utf8");
}

main();
