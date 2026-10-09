import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		viteTsConfigPaths({ projects: ["./tsconfig.json"] }),
		tanstackStart(),
		// explicit: building under bun would otherwise auto-select the bun preset,
		// which crashes when the image runs the output on node
		nitro({ preset: "node-server" }),
		viteReact(),
	],
});
