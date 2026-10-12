// All site text. Written in normal case (lowercasing is a style, see styles.css),
// so the same wording can be reused for the PDF CV.

export const langs = ["de", "en"] as const;
export type Lang = (typeof langs)[number];

export type Entry = {
	title: string;
	meta?: string;
	links?: { label: string; href: string }[];
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

const links = {
	ngo: { label: "dialogue4u.org", href: "https://dialogue4u.org" },
	scheduler: {
		label: "github",
		href: "https://github.com/davidkirch/scheduler",
	},
	schedulerLive: { label: "live", href: "https://scheduler.davidstech.de" },
	microdo: { label: "microdo.de", href: "https://microdo.de" },
	thesis: { label: "demo", href: "https://ba.davidstech.de/study" },
};

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
const microdoStack = [
	"TypeScript",
	"TanStack Start",
	"TanStack Query",
	"React 19",
	"Convex",
	"Convex Auth",
	"Tailwind CSS",
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
	data: "PostgreSQL, Drizzle, Prisma, Supabase, Convex",
	infra: "Linux, Docker, GitHub Actions, Proxmox, Hetzner, UniFi, Restic",
	tools: "Git, Vitest, Biome",
};

export const content: Record<Lang, Content> = {
	de: {
		title: "David Kirchner",
		description:
			"Fullstack-Entwickler mit Schwerpunkt auf TypeScript/React und selbst gehosteter Infrastruktur.",
		summary:
			"Fullstack-Entwickler mit B.Sc. Informatik und über drei Jahren Praxis in Entwicklung und Administration. Schwerpunkt: TypeScript/React-Webanwendungen und selbst gehostete Infrastruktur (Linux, Docker).",
		headings: {
			experience: "Erfahrung",
			projects: "Projekte",
			education: "Ausbildung",
			skills: "Kenntnisse",
		},
		experience: [
			{
				title: "IT-Systemadministrator / Entwickler",
				meta: "Dialogue for Understanding e.V. · Berlin · seit 04/2023 · Teilzeit",
				links: [links.ngo],
				bullets: [
					"Migration von Microsoft 365/SharePoint auf selbst gehostete Open-Source-Infrastruktur (Nextcloud, Rocket.Chat, Wiki.js, Planka) für Datensouveränität",
					"Prozessautomatisierung mit selbst betriebenem n8n",
					"Mitentwicklung einer Anwendung zur Rechnungs- und Ausgabenverwaltung (Next.js, Supabase)",
					"Infrastruktur auf Hetzner-VPS, Backup-Konzept, private Netzwerke mit UniFi",
					"1st- bis 3rd-Level-Support, Administration von M365/SharePoint und Webseite",
				],
			},
		],
		projects: [
			{
				title: "Scheduler",
				meta: "Selbst hostbare Terminfindung",
				links: [links.schedulerLive, links.scheduler],
				bullets: [
					"Teilnehmende markieren Verfügbarkeit per Drag, Ersteller sehen eine Live-Heatmap der Überschneidungen",
					"Live-Updates über PostgreSQL LISTEN/NOTIFY und Server-Sent Events, ohne Redis oder WebSocket-Server",
					"Auth mit better-auth: E-Mail/Passwort, GitHub-OAuth, anonyme Accounts mit Übernahme bei Registrierung",
					"Typsichere Server Functions mit Zod, Session-Prüfung, Fail-fast-Validierung der Umgebungsvariablen",
				],
				stack: schedulerStack,
			},
			{
				title: "Bachelorarbeit: Dashboard",
				meta: "„Benutzerzentrierte Entwicklung eines Dashboards zur Anwendungskonsolidierung in dezentralen IT-Infrastrukturen“",
				links: [links.thesis],
				bullets: [
					"Web-Dashboard, das die verteilten Anwendungen einer NGO bündelt (Todos, Kalender, Lesezeichen)",
					"Anforderungen aus einer Nutzerbefragung, Ergebnis mit Nutzenden evaluiert",
					"Kalendersynchronisation mit Nextcloud über CalDAV",
				],
				stack: thesisStack,
			},
			{
				title: "MicroDo",
				meta: "Todo-App mit geteilten Listen",
				links: [links.microdo],
				bullets: [
					"Installierbare Progressive Web App für Desktop und Mobilgeräte: verschachtelte Unteraufgaben, Prioritäten, Fälligkeiten mit Uhrzeit, Push-Erinnerungen",
					"Listen per E-Mail teilen (bearbeiten oder nur lesen), Änderungen erscheinen in Echtzeit bei allen Beteiligten",
					"Anmeldung über GitHub oder E-Mail-Magic-Link",
				],
				stack: microdoStack,
			},
		],
		education: [
			{
				title: "Informatik in Kultur und Gesundheit (B.Sc.)",
				meta: "HTW Berlin · 2023–2026 · Note 1,6",
				bullets: [],
			},
			{
				title: "Produktentwicklung und technisches Design (B.Eng.)",
				meta: "Frankfurt University of Applied Sciences · 2019–2022 · ohne Abschluss",
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
				items: "Microsoft-365-/SharePoint-/Exchange-Administration",
			},
		],
	},
	en: {
		title: "David Kirchner",
		description:
			"Full-stack developer focused on TypeScript/React and self-hosted infrastructure.",
		summary:
			"Full-stack developer with a B.Sc. in computer science and more than three years of hands-on development and administration work, focused on TypeScript/React web apps and self-hosted infrastructure (Linux, Docker).",
		headings: {
			experience: "Experience",
			projects: "Projects",
			education: "Education",
			skills: "Skills",
		},
		experience: [
			{
				title: "IT administrator / developer",
				meta: "Dialogue for Understanding e.V. · Berlin · since 04/2023 · part-time",
				links: [links.ngo],
				bullets: [
					"Migrated from Microsoft 365/SharePoint to self-hosted open-source infrastructure (Nextcloud, Rocket.Chat, Wiki.js, Planka) for data sovereignty",
					"Automated internal processes with self-hosted n8n",
					"Co-developed an invoice and expense management app (Next.js, Supabase)",
					"Ran infrastructure on Hetzner VPS, designed the backup strategy, built private networks with UniFi",
					"1st to 3rd level support; administered M365/SharePoint and the website",
				],
			},
		],
		projects: [
			{
				title: "Scheduler",
				meta: "Self-hosted scheduling",
				links: [links.schedulerLive, links.scheduler],
				bullets: [
					"Participants drag to mark availability; the creator sees a live heatmap of overlaps",
					"Live updates through PostgreSQL LISTEN/NOTIFY and server-sent events, with no Redis or WebSocket server",
					"Auth with better-auth: email/password, GitHub OAuth, anonymous accounts that carry over on sign-up",
					"Type-safe server functions with Zod, session checks and fail-fast env validation",
				],
				stack: schedulerStack,
			},
			{
				title: "Bachelor's thesis: dashboard",
				meta: "User-centred development of a dashboard for application consolidation in decentralised IT infrastructures",
				links: [links.thesis],
				bullets: [
					"Web dashboard that brings an NGO's scattered apps together (todos, calendar, bookmarks)",
					"Requirements gathered in a user survey; the result was evaluated with users",
					"Calendar sync with Nextcloud over CalDAV",
				],
				stack: thesisStack,
			},
			{
				title: "MicroDo",
				meta: "Todo app with shared lists",
				links: [links.microdo],
				bullets: [
					"Installable progressive web app for desktop and mobile: nested subtasks, priorities, due dates with times, push reminders",
					"Share lists by email with edit or read-only access; changes show up live for everyone",
					"Sign-in with GitHub or an email magic link",
				],
				stack: microdoStack,
			},
		],
		education: [
			{
				title: "Computer Science in Culture and Health (B.Sc.)",
				meta: "HTW Berlin · 2023–2026 · grade 1.6",
				bullets: [],
			},
			{
				title: "Product Development and Technical Design (B.Eng.)",
				meta: "Frankfurt University of Applied Sciences · 2019–2022 · not completed",
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
				items: "Microsoft 365/SharePoint/Exchange administration",
			},
		],
	},
};
