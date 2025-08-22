# Offline-Knowledge-Explorer
A web app that lets users browse a hierarchical knowledge base (tree view), cache data client-side, and work offline with Service Worker + IndexedDB.
	1.	Tree View Navigation
	•	Recursive expandable/collapsible tree to browse categories.
	•	Eg: “Frontend → React → Hooks”.
	2.	Client-side Caching
	•	When fetching article content from API:
	•	First check cache (localStorage or IndexedDB).
	•	Use stale-while-revalidate strategy.
	3.	Offline Support
	•	Service Worker caches static assets.
	•	IndexedDB stores articles so they’re available offline.
	•	If offline → show cached version + queue writes (like favorites).
	4.	Suspense & Lazy Loading
	•	Code-split article viewer using React.lazy + Suspense.
	•	Show loading fallback until content arrives.
	5.	Optimistic Updates
	•	Mark article as “favorite” instantly (UI updates), sync later if offline.

⸻

Tech Stack
	•	React (hooks, Suspense)
	•	IndexedDB for offline data
	•	Service Worker for caching assets
	•	Fake API (json-server or mock JSON file
