import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `
      $background-dark: #0a0a0a;
      $foreground-dark: #ededed;
      $background-light: #ffffff;
      $foreground-light: #171717;
    `,
    includePaths: [path.join(__dirname, "globals")],
  },
};

export default nextConfig;
