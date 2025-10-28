import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            // Permite import Header from 'src/components/Header'
            src: path.resolve(__dirname, 'src'),
        },
    },
})