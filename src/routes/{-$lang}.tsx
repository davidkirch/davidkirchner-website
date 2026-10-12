import { Heading, Text } from "@astryxdesign/core";
import { Card } from "@astryxdesign/core/Card";
import { HStack } from "@astryxdesign/core/HStack";
import { Link } from "@astryxdesign/core/Link";
import { List, ListItem } from "@astryxdesign/core/List";
import { Token } from "@astryxdesign/core/Token";
import { VStack } from "@astryxdesign/core/VStack";
import { createFileRoute, notFound } from "@tanstack/react-router";
import {
	content,
	type Entry,
	github,
	type Lang,
	langs,
	siteUrl,
} from "@/content";

// "/" is German, "/en" English. Any other first segment is a 404.
const toLang = (param: string | undefined): Lang =>
	param === "en" ? "en" : "de";
const pathOf = (lang: Lang) => (lang === "de" ? "/" : `/${lang}`);

export const Route = createFileRoute("/{-$lang}")({
	beforeLoad: ({ params }) => {
		if (params.lang !== undefined && params.lang !== "en") throw notFound();
	},
	head: ({ params }) => {
		const c = content[toLang(params.lang)];
		return {
			meta: [
				{ title: c.title },
				{ name: "description", content: c.description },
			],
			links: langs.map((l) => ({
				rel: "alternate",
				hrefLang: l,
				href: siteUrl + pathOf(l),
			})),
		};
	},
	component: Page,
});

function Page() {
	const lang = toLang(Route.useParams().lang);
	const other: Lang = lang === "de" ? "en" : "de";
	const c = content[lang];

	return (
		<VStack align="center" padding={4}>
			<VStack as="main" gap={10} width="100%" maxWidth={720} paddingBlock={6}>
				<VStack as="header" gap={3}>
					<HStack justify="between" align="center" wrap="wrap" gap={4}>
						<Heading level={1}>{c.title}</Heading>
						<HStack gap={4}>
							<Link href={github} isExternalLink>
								github
							</Link>
							<Link href={pathOf(other)}>{other}</Link>
						</HStack>
					</HStack>
					<Text>{c.summary}</Text>
				</VStack>

				<Section title={c.headings.experience}>
					{c.experience.map((e) => (
						<EntryCard key={e.title} entry={e} />
					))}
				</Section>

				<Section title={c.headings.projects}>
					{c.projects.map((e) => (
						<EntryCard key={e.title} entry={e} />
					))}
				</Section>

				<Section title={c.headings.education}>
					{c.education.map((e) => (
						<EntryCard key={e.title} entry={e} />
					))}
				</Section>

				<Section title={c.headings.skills}>
					<Card padding={4}>
						<VStack gap={2}>
							{c.skills.map((s) => (
								<Text key={s.label}>
									<Text weight="bold">{s.label}:</Text> {s.items}
								</Text>
							))}
						</VStack>
					</Card>
				</Section>
			</VStack>
		</VStack>
	);
}

function Section({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<VStack as="section" gap={3}>
			<Heading level={2}>{title}</Heading>
			{children}
		</VStack>
	);
}

function EntryCard({ entry }: { entry: Entry }) {
	return (
		<Card padding={4}>
			<VStack gap={3}>
				<VStack gap={1}>
					<HStack justify="between" align="center" gap={4}>
						<Heading level={3}>{entry.title}</Heading>
						<HStack gap={4}>
							{entry.links?.map((l) => (
								<Link key={l.href} href={l.href} isExternalLink>
									{l.label}
								</Link>
							))}
						</HStack>
					</HStack>
					{entry.meta && <Text color="secondary">{entry.meta}</Text>}
				</VStack>
				{entry.bullets.length > 0 && (
					<List listStyle="disc" density="compact">
						{entry.bullets.map((b) => (
							// a ReactNode label wraps; a plain string gets truncated to one line
							<ListItem key={b} label={<Text>{b}</Text>} />
						))}
					</List>
				)}
				{entry.stack && (
					<HStack gap={2} wrap="wrap">
						{entry.stack.map((s) => (
							<Token key={s} label={s} size="sm" />
						))}
					</HStack>
				)}
			</VStack>
		</Card>
	);
}
