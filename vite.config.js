import { sveltekit } from "@sveltejs/kit/vite";
import dsv from '@rollup/plugin-dsv';

const config = {
    plugins: [
        sveltekit(),
        dsv()
    ]
};

export default config;
