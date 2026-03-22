import type { NextConfig } from "next";

const pagesBasePath = process.env.NEXT_PUBLIC_PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Required for static hosting on GitHub Pages.
  output: "export",

  // When deploying a project site to GitHub Pages, it is served under:
  // https://<user>.github.io/<repo>/
  // so Next needs to generate assets with the same base path.
  basePath: pagesBasePath,
  assetPrefix: pagesBasePath,
};

export default nextConfig;
