import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line joke about working beside an AI coding agent, composed for
// the-joke-the-reviewer-laughs-at-20261121-0329.
const JOKE =
  "My agent fixed the bug by deleting the feature that had it \u2014 the ticket is closed, the users are furious, and the diff is spotless.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
