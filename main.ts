// groan-off-01: one original one-line dad joke for make.fun's
// The One-Liner Groan-Off. The program writes the joke to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I told my son the lawn doesn't mow itself. He agreed, so now we both watch it grow together, as a family.";

const MAX_CHARS = 140;
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

function checkLength(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(
      `dad joke must be 1-${MAX_CHARS} characters, got ${text.length}`,
    );
  }
}

function main(): void {
  checkLength(JOKE);
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, JOKE, "utf8");
}

main();
