/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const repoName = process.env.NEXT_PUBLIC_REPO_NAME || ""; // e.g., "my-next-repo" for project pages

const nextConfig = {
  // Ensures Next writes static files under `out/` via `next export`
  output: "export",

  // For project pages (username.github.io/repo), use a basePath and assetPrefix
  basePath: isProd && repoName ? `/${repoName}` : "",
  assetPrefix: isProd && repoName ? `/${repoName}/` : "",

  images: {
    unoptimized: true, // Required for static export
    domains: ["i.imgur.com"],
  },

  // Optional: if you use trailingSlash to match GitHub Pages behavior
  // trailingSlash: true,
};

module.exports = nextConfig;
