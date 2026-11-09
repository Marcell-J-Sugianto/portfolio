
import fs from "fs";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) {
  // Read the logo list from disk so adding an asset requires no code change.
  const logoDirectory = path.join(process.cwd(), "public", "stack");

  try {
    const stack = fs
      .readdirSync(logoDirectory, { withFileTypes: true })
      .filter(
        (file) =>
          file.isFile() &&
          /\.(svg|png|jpe?g|webp|avif|gif)$/i.test(file.name)
      )
      .map((file) => `/stack/${file.name}`)
      .sort();

    res.setHeader("Cache-Control", "public, max-age=60");
    return res.status(200).json(stack);
  } catch {
    // Keep the page usable if the asset directory is unavailable.
    return res.status(200).json([]);
  }
}
