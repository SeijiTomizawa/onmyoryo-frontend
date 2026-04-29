import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // 'hybrid' から 'static' に変更します
  output: 'static', 
  adapter: cloudflare(),
});