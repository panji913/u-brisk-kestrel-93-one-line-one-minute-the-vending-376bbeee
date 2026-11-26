// One Line, One Minute: The Vending Machine Pickup Line Contest
// Writes a single original pickup line, spoken by a vending machine,
// to /output/entry.txt (1-200 characters, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I hum all day for strangers, but you make my coils spin — press B7, gorgeous, and I'll drop something sweet. Exact change only: my heart's already spent.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${[...LINE].length} characters to /output/entry.txt`);
