import { defineTheme } from "@astryxdesign/core/theme";
import { neutralTheme } from "@astryxdesign/theme-neutral";

// The one place the site's look is decided. Light only, on purpose.
export const siteTheme = defineTheme({
	name: "site",
	extends: neutralTheme,

	// square corners everywhere; --radius-full stays round for anything circular
	radius: { base: 0, multiplier: 1 },

	typography: {
		scale: { base: 16, ratio: 1.2 },
		// family name as registered by @fontsource/courier-prime (styles.css)
		body: { family: "Courier Prime", fallbacks: "monospace" },
		heading: { family: "Courier Prime", fallbacks: "monospace" },
		code: { family: "Courier Prime", fallbacks: "monospace" },
	},

	tokens: {
		"--color-background-body": "#BEDBFF",
		"--color-background-card": "#FFFFFF",
		"--color-background-surface": "#FFFFFF",
		"--color-background-muted": "#F5F5F5",
		"--color-border": "#E5E5E5",
		"--color-accent": "#171717",
		"--color-on-accent": "#FAFAFA",
		"--color-text-primary": "#0A0A0A",
		"--color-text-secondary": "#525252",
		"--color-text-accent": "#0A0A0A",
		"--color-icon-primary": "#0A0A0A",
		"--color-icon-secondary": "#525252",
		"--color-icon-accent": "#0A0A0A",
	},
});
