// u-coral-404-one-liner-laughs-aa872d41: one funny line, written to entry.txt.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const joke = "I don't need eight hours of sleep, just enough time to convince my alarm clock I have amnesia.";
const filePath = join(outputDir, 'entry.txt');

writeFileSync(filePath, joke);
