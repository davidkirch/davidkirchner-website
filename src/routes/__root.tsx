import { Heading } from "@astryxdesign/core";
import { Link } from "@astryxdesign/core/Link";
import { Theme } from "@astryxdesign/core/theme";
import { VStack } from "@astryxdesign/core/VStack";
import {
	createRootRoute,
	HeadContent,
	Scripts,
	useParams,
} from "@tanstack/react-router";
import { siteTheme } from "@/themes/site";
import siteCss from "@/themes/site.css?url";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{ rel: "stylesheet", href: siteCss },
			{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
		],
	}),
	notFoundComponent: () => (
		<VStack gap={4} padding={8} align="center">
			<Heading level={1}>404</Heading>
			<Link href="/">david kirchner</Link>
		</VStack>
	),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	const { lang } = useParams({ strict: false });
	return (
		<html lang={lang ?? "de"}>
			<head>
				<HeadContent />
			</head>
			<body>
				<Theme theme={siteTheme} mode="light">
					{children}
				</Theme>
				<Scripts />
			</body>
		</html>
	);
}
