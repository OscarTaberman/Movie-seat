Movie Seat Booking – Frontend 2

Movie seat booking application built for the course examination using React + TypeScript.

Movies are fetched from a local REST API using JSON-server.

---

Run the project

```bash
npm install

npx json-server --watch Movies.json --port 3001

npm run dev

```


Development log

2026-01-21
-Created React project with Vite

2026-01-22
-Implemented base HTML/CSS in the React version

2026-01-27
-Added seat selection functionality
-Implemented individual seat click handling
-Refactored seat logic

2026-01-28 - 2026-01-30
-Added dynamic price calculation
-Refactored price handling logic
-Created Movies.json as local database
-Installed and configured json-server
-Fetched movies from local REST API
-Removed hardcoded movie options
-Connected movie selection to selectedMovie state