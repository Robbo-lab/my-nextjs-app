### 1. Root Directory (Next.js App Router, JavaScript)

*   **app/**: Core routing folder. Each subfolder represents a route segment with files like `page.js`, `layout.js`, `loading.js`, `error.js`, etc.
*   **public/**: Static assets served directly (e.g., `/favicon.ico`, images, robots.txt).
*   **components/**: Reusable UI components. Add `"use client"` at the top for Client Components.
*   **lib/**: Utility functions and server-side helpers (e.g., data fetching).
*   **styles/**: Global CSS and CSS Modules. Typically includes `globals.css`.
*   **hooks/** (Optional): Custom React hooks for Client Components.
*   **middleware.js** (Optional): Middleware for edge runtime (auth, rewrites).
*   **next.config.js**: Next.js configuration.
*   **package.json**: Project metadata and dependencies.
*   **README.md**: Documentation.
*   **.gitignore**: Files ignored by Git.
*   **.env.local**: Environment variables for local development.
*   **jsconfig.json**: JS project configuration.
*   **.eslintrc.js** / **.prettierrc** (Optional): Linting and formatting configs.
*   **.next/**: Build output (auto-generated).

***

### 2. Inside the `app/` Directory

*   **layout.js**: Required root layout. Defines persistent UI (header/footer).
*   **page.js**: Route’s main UI.
*   **loading.js** (Optional): Suspense loading UI.
*   **error.js** (Optional): Error boundary for the segment.
*   **not-found.js** (Optional): Handles 404s.
*   **template.js** (Optional): Forces re-render on navigation.
*   **route.js** (Optional): API route handlers for HTTP methods.
*   **(group)/**: Route groups for organization without affecting URL.
*   **\[param]/** and **\[...catchAll]/**: Dynamic and catch-all routes.

***

### Example Folder Structure (Vanilla JS)

```bash
my-next-app/
├── app/
│   ├── layout.js               # Root layout
│   ├── globals.css             # Global CSS
│   ├── page.js                 # Home route '/'
│   ├── loading.js              # (Optional)
│   ├── error.js                # (Optional)
│   ├── not-found.js            # (Optional)
│   ├── (marketing)/            # Route group
│   │   ├── about/
│   │   │   └── page.js         # '/about'
│   │   └── blog/
│   │       ├── page.js         # '/blog'
│   │       └── [id]/
│   │           ├── page.js     # '/blog/:slug'
│   │           ├── loading.js
│   │           └── not-found.js
│   ├── (dashboard)/
│   │   ├── layout.js           # Dashboard layout
│   │   ├── page.js             # '/dashboard'
│   │   └── settings/
│   │       └── page.js         # '/dashboard/settings'
│   ├── api/
│   │   └── users/
│   │       └── route.js        # API handler for '/api/users'
│   └── auth/
│       └── login/
│           └── page.js         # '/auth/login'
├── components/
│   ├── Header.js
│   ├── Footer.js
│   └── ThemeToggle.js          # Client Component ("use client")
├── lib/
│   ├── db.js                   # Server-only DB logic
│   └── utils.js                # Shared utilities
├── hooks/
│   └── useTheme.js             # Client-only hook
├── styles/
│   ├── globals.css
│   └── Button.module.css
├── public/
│   ├── favicon.ico
│   └── images/
│       └── logo.png
├── middleware.js               # (Optional)
├── next.config.js
├── package.json
├── README.md
├── jsconfig.json
├── .env.local
└── .gitignore
```

### Server vs Client Components

*   **Server Components (default)**
    *   No `"use client"` directive.
    *   Render on the server, can safely access secrets and servers (DB, internal APIs).
    *   Smaller browser bundles → faster loads.
    *   Ideal for data fetching, heavy computation, and static/streamed content.

*   **Client Components**
    *   Start file with `"use client"`.
    *   Needed for interactivity (`useState`, `useEffect`, event handlers, browser APIs).
    *   Can import Server Components **but Server Components cannot import Client Components**.
    *   Keep them small and focused to minimize client-side JS.