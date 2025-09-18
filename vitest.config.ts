import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        reporters: 'verbose',
        coverage: {
            provider: 'v8',
            reportsDirectory: "./coverage",
            reporter: ['html', 'text'],
            include: ['lib/**'],
            exclude: [
                'node_modules/',
                'tests/',
                'lib/**/*.spec.ts',
                'lib/index.ts',
                'lib/vite-env.d.ts',
                'lib/error.ts',
            ]
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'lib')
        }
    }
});