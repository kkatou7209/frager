import { defineConfig } from 'eslint/config';
import typescript from 'typescript-eslint';
import security from 'eslint-plugin-security';

export default defineConfig([
    security.configs.recommended,
    typescript.configs.recommended,
    {
        files: ['*.ts'],
        rules: {
            'no-unused-expressions': 'error',
            'prefer-const': 'error',
            'no-console': 'error',
        }
    }``
]);