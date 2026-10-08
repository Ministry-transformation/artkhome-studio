import { defineConfig } from 'astro/config';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://ministry-transformation.github.io',
  base: isGitHubActions ? '/artkhome-studio' : '/',
  output: 'static',
  trailingSlash: 'always',
});
