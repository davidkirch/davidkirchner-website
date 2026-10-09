// All site text. Written in normal case (lowercasing is a style, see styles.css),
// so the same wording can be reused for the PDF CV.

export const langs = ["de", "en"] as const;
export type Lang = (typeof langs)[number];

export type Entry = {
	title: string;
	meta?: string;
	href?: string;
	bullets: string[];
	stack?: string[];
};

export type Content = {
	title: string;
	description: string;
	summary: string;
	headings: {
		experience: string;
		projects: string;
		education: string;
		skills: string;
	};
	experience: Entry[];
	projects: Entry[];
	education: Entry[];
	skills: { label: string; items: string }[];
};

export const siteUrl = "https://davidkirchner.de";
export const github = "https://github.com/davidkirch";

const schedulerHref = "https://github.com/davidkirch/scheduler";
const schedulerStack = [
	"TypeScript",
	"TanStack Start",
	"TanStack Query",
	"Drizzle",
	"PostgreSQL",
	"Tailwind CSS",
	"Vitest",
	"Biome",
	"Docker",
];
const thesisStack = [
	"React",
	"TanStack Start",
	"TanStack Query",
	"Prisma",
	"PostgreSQL",
	"Clerk",
	"Zod",
	"shadcn/ui",
];
const skillItems = {
	languages: "TypeScript/JavaScript, Python, SQL, Bash, Java",
	web: "React, Next.js, TanStack Start/Query, Django, REST, Zod, Tailwind CSS",
	data: "PostgreSQL, Drizzle, Prisma, Supabase",
	infra: "Linux, Docker, GitHub Actions, Proxmox, Hetzner, UniFi, Backups",
	tools: "Git, Vitest, Biome",
};

export const content: Record<Lang, Content> = {
	de: {
		title: "David Kirchner",
		description:
			"Entwickler mit Schwerpunkt auf selbst gehosteten Web-Anwendungen.",
		summary:
			"Entwickler mit drei Jahren Praxis in Infrastruktur und Automatisierung. Schwerpunkt: selbst gehostete Web-Anwendungen mit TypeScript, React und PostgreSQL.",
		headings: {
			experience: "Erfahrung",
			projects: "Projekte",
			education: "Ausbildung",
			skills: "Kenntnisse",
		},
		experience: [
			{
				title: "IT-Administration & Entwicklung",
				meta: "NGO",
				bullets: [
					"Migration von Microsoft 365/SharePoint auf selbst gehostete Open-Source-Infrastruktur (Nextcloud, Rocket.Chat, Wiki.js, Planka) für Datensouveränität",
					"Prozessautomatisierung mit selbst betriebenem n8n",
					"Mitentwicklung einer Anwendung zur Rechnungs- und Ausgabenverwaltung (Next.js, Supabase)",
					"Infrastruktur auf Hetzner-VPS, Backup-Konzept, private Netzwerke mit UniFi",
					"1st- bis 3rd-Level-Support, Administration von M365/SharePoint und Webseiten",
				],
			},
		],
		projects: [
			{
				title: "Scheduler",
				meta: "Selbst hostbare Terminfindung",
				href: schedulerHref,
				bullets: [
					"Teilnehmende markieren Verfügbarkeit per Drag, Ersteller sehen eine Live-Heatmap der Überschneidungen",
					"Live-Updates über PostgreSQL LISTEN/NOTIFY und Server-Sent Events, ohne Redis oder WebSocket-Server",
					"Auth mit better-auth: E-Mail/Passwort, GitHub-OAuth, anonyme Accounts mit Übernahme bei Registrierung",
					"Typsichere Server Functions mit Zod, Session-Prüfung, Fail-fast-Validierung der Umgebungsvariablen",
				],
				stack: schedulerStack,
			},
		],
		education: [
			{
				title: "Informatik in Kultur und Gesundheit",
				meta: "HTW Berlin",
				bullets: [
					"Bachelorarbeit: „Benutzerzentrierte Entwicklung eines Dashboards zur Anwendungskonsolidierung in dezentralen IT-Infrastrukturen“",
					"Dashboard bündelt verteilte Anwendungen (Todos, Kalender, Lesezeichen); Anforderungen aus einer Nutzerbefragung, mit Evaluation",
					"Lesende CalDAV-Synchronisation mit Nextcloud",
				],
				stack: thesisStack,
			},
			{
				title: "Produktentwicklung und technisches Design (B.Eng.)",
				meta: "FH Frankfurt · 2019–2022 · nicht abgeschlossen",
				bullets: [],
			},
		],
		skills: [
			{ label: "Sprachen", items: skillItems.languages },
			{ label: "Web", items: skillItems.web },
			{ label: "Daten", items: skillItems.data },
			{ label: "Infrastruktur", items: skillItems.infra },
			{ label: "Tools", items: skillItems.tools },
			{
				label: "Außerdem",
				items: "Microsoft 365/SharePoint, Java/Spring Boot (Grundkenntnisse)",
			},
		],
	},
	en: {
		title: "David Kirchner",
		description: "Developer focused on self-hosted web applications.",
		summary:
			"Developer with three years of hands-on infrastructure and automation work, focused on self-hosted web applications built with TypeScript, React and PostgreSQL.",
		headings: {
			experience: "Experience",
			projects: "Projects",
			education: "Education",
			skills: "Skills",
		},
		experience: [
			{
				title: "IT administration & development",
				meta: "NGO",
				bullets: [
					"Migrated from Microsoft 365/SharePoint to self-hosted open-source infrastructure (Nextcloud, Rocket.Chat, Wiki.js, Planka) for data sovereignty",
					"Automated internal processes with self-hosted n8n",
					"Co-developed an invoice and expense management app (Next.js, Supabase)",
					"Ran infrastructure on Hetzner VPS, designed the backup strategy, built private networks with UniFi",
					"1st to 3rd level support; administered M365/SharePoint and the websites",
				],
			},
		],
		projects: [
			{
				title: "Scheduler",
				meta: "Self-hosted scheduling",
				href: schedulerHref,
				bullets: [
					"Participants drag to mark availability; the creator sees a live heatmap of overlaps",
					"Live updates through PostgreSQL LISTEN/NOTIFY and server-sent events, with no Redis or WebSocket server",
					"Auth with better-auth: email/password, GitHub OAuth, anonymous accounts that carry over on sign-up",
					"Type-safe server functions with Zod, session checks and fail-fast env validation",
				],
				stack: schedulerStack,
			},
		],
		education: [
			{
				title: "Computer Science in Culture and Health",
				meta: "HTW Berlin",
				bullets: [
					"Thesis: user-centred development of a dashboard that consolidates applications in decentralised IT infrastructure",
					"Dashboard bringing distributed apps (todos, calendar, bookmarks) together; requirements from a user survey, followed by an evaluation",
					"Read-only CalDAV sync with Nextcloud",
				],
				stack: thesisStack,
			},
			{
				title: "Product Development and Technical Design (B.Eng.)",
				meta: "FH Frankfurt · 2019–2022 · not completed",
				bullets: [],
			},
		],
		skills: [
			{ label: "Languages", items: skillItems.languages },
			{ label: "Web", items: skillItems.web },
			{ label: "Data", items: skillItems.data },
			{ label: "Infrastructure", items: skillItems.infra },
			{ label: "Tools", items: skillItems.tools },
			{
				label: "Also",
				items: "Microsoft 365/SharePoint administration",
			},
		],
	},
};
