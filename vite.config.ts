import hq from "alias-hq";
import { resolve } from "path";
import postcssPresetEnv from "postcss-preset-env";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";

import react from "@vitejs/plugin-react";
import external from "@yelo/rollup-node-external";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: hq.get("rollup"),
    },
    plugins: [react(), dts({ rollupTypes: true, exclude: ["**/*.stories.(ts|tsx)"] }), cssInjectedByJsPlugin()],
    build: {
        sourcemap: true,
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, "src/lib/index.ts"),
            name: "Library name",
            // the proper extensions will be added
            fileName: "index",
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: external(),
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    react: "React",
                },
            },
        },
    },
    css: {
        modules: {
            localsConvention: "camelCase",
        },
        postcss: {
            plugins: [postcssPresetEnv({ stage: 1 })],
        },
    },
});
