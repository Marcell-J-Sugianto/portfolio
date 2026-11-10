import { mkdirSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const logoDirectory = path.join(projectRoot, "public", "stack");
const manifestDirectory = path.join(projectRoot, "src", "generated");
const manifestPath = path.join(manifestDirectory, "stackLogos.json");

// Discover public stack images at build/dev startup and bundle their URLs as data.
const stacks = readdirSync(logoDirectory, { withFileTypes: true })
  .filter(
    (file) =>
      file.isFile() &&
      /\.(svg|png|jpe?g|webp|avif|gif)$/i.test(file.name)
  )
  .map((file) => `/stack/${file.name}`)
  .sort();

mkdirSync(manifestDirectory, { recursive: true });
writeFileSync(manifestPath, `${JSON.stringify(stacks, null, 2)}\n`);
