import { build } from 'vite';
import esbuild from 'esbuild';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, rmSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function buildProduction() {
  try {
    // Clean dist folder
    if (existsSync('dist')) {
      rmSync('dist', { recursive: true, force: true });
    }

    console.log('Building frontend...');
    
    // Build frontend with Vite
    await build({
      root: 'client',
      build: {
        outDir: '../dist/public',
        emptyOutDir: true,
      },
    });

    console.log('Building backend...');
    
    // Build backend with esbuild
    await esbuild.build({
      entryPoints: ['server/index.ts'],
      bundle: true,
      outfile: 'dist/index.js',
      platform: 'node',
      target: 'node18',
      format: 'esm',
      packages: 'external',
      define: {
        'process.env.NODE_ENV': '"production"',
      },
    });

    console.log('Build completed successfully!');
    console.log('Frontend: dist/public/');
    console.log('Backend: dist/index.js');
    
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildProduction();