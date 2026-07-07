# Crime Evidence Tracker — UI

This is a small static browser UI for the `crime-evidence-tracker` project. It is intentionally client-side only so your existing C files remain unchanged.

Files added in `ui/`:
- `index.html` — main UI
- `style.css` — styles
- `app.js` — client-side logic (uses localStorage)

New features added:
- Connections UI: add/delete/list connections between evidence items.
- Find Connections: enter two evidence IDs and find direct links and the shortest path between them (BFS).
- Graph View: visualize evidence and connections using Cytoscape.js (loaded from CDN).
- Import/Export now includes connections alongside evidence (JSON format: { evidence: [...], connections: [...] }).

How it works
- Data is stored in the browser's localStorage under the key `crimeEvidence:v1`.
- Use the Import button to load a JSON file (array of evidence objects) and Export to download current data.

Run locally
1. Open `ui/index.html` in your web browser (double-click or "Open with" your browser). This runs fully offline.

OR (recommended for full file import behavior):
1. Open PowerShell in the project folder `c:\Users\dhriti\Documents\stuff\projects\crime-evidence-tracker\ui`.
2. Run a simple HTTP server:

```powershell
python -m http.server 8000
```

3. Open http://localhost:8000 in your browser.

Notes
- This is a light demo UI; it does not modify your C code or compile anything.
- Use Import/Export to move data between browsers or to keep backups.

How connections work
- Connections are stored separately in localStorage under key `crimeEvidence:connections:v1`.
- A connection object has shape: { id, source, target, note } where source/target are evidence IDs.

Graph and path-finding
- Open the "Graph" tab to see the network of evidence items.
- In "Connections" tab use the find form to enter two IDs and find the shortest path; the path (if found) will be highlighted in the graph.

Import format examples
- Old (legacy) format: array of evidence items (will import as evidence only).
- New format: an object { "evidence": [...], "connections": [...] }

Next steps you can ask for
- Persist data to disk with a tiny Node backend (I can add that).
- Add more connection types, labels, or edit connections in-place.

If you'd like, I can:
- Add a small Node/Express backend that reads/writes to files and integrates with the C app.
- Or create a native GUI (Electron) that bundles everything.
