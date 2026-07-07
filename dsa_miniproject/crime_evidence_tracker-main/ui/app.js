// Enhanced client-side UI: evidence + connections + graph
const STORAGE_EVIDENCE = 'crimeEvidence:items:v1';
const STORAGE_CONNECTIONS = 'crimeEvidence:connections:v1';

let evidenceList = [];
let connectionsList = [];

const $ = id => document.getElementById(id);

function load() {
  try {
    const rawE = localStorage.getItem(STORAGE_EVIDENCE);
    evidenceList = rawE ? JSON.parse(rawE) : [];
  } catch (e) { console.error('Failed to load evidence', e); evidenceList = []; }
  try {
    const rawC = localStorage.getItem(STORAGE_CONNECTIONS);
    connectionsList = rawC ? JSON.parse(rawC) : [];
  } catch (e) { console.error('Failed to load connections', e); connectionsList = []; }
}

function save() {
  localStorage.setItem(STORAGE_EVIDENCE, JSON.stringify(evidenceList));
  localStorage.setItem(STORAGE_CONNECTIONS, JSON.stringify(connectionsList));
}

function escapeHtml(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

/* Evidence rendering */
function renderEvidence() {
  const tbody = document.querySelector('#evidenceTable tbody');
  tbody.innerHTML = '';
  evidenceList.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${escapeHtml(item.id)}</td>
      <td>${escapeHtml(item.description)}</td>
      <td>${escapeHtml(item.location)}</td>
      <td>${escapeHtml(item.collectedBy)}</td>
      <td>${escapeHtml(item.dateCollected)}</td>
      <td class="actions">
        <button class="edit" data-id="${item.id}">Edit</button>
        <button class="delete" data-id="${item.id}">Delete</button>
      </td>`;
    tbody.appendChild(tr);
  });
  document.querySelectorAll('button.edit').forEach(b => b.addEventListener('click', onEditEvidence));
  document.querySelectorAll('button.delete').forEach(b => b.addEventListener('click', onDeleteEvidence));
}

function onEditEvidence(e){
  const id = e.currentTarget.dataset.id;
  const item = evidenceList.find(x => String(x.id) === String(id));
  if (!item) return;
  $('evidenceId').value = item.id;
  $('description').value = item.description || '';
  $('location').value = item.location || '';
  $('collectedBy').value = item.collectedBy || '';
  $('dateCollected').value = item.dateCollected || '';
  $('saveBtn').textContent = 'Update';
}

function onDeleteEvidence(e){
  const id = e.currentTarget.dataset.id;
  if (!confirm('Delete evidence entry ' + id + '?')) return;
  evidenceList = evidenceList.filter(x => String(x.id) !== String(id));
  // also remove related connections
  connectionsList = connectionsList.filter(c => String(c.source) !== String(id) && String(c.target) !== String(id));
  save(); renderAll();
}

function resetEvidenceForm(){
  $('evidenceForm').reset(); $('evidenceId').value = ''; $('saveBtn').textContent = 'Save';
}

function nextEvidenceId(){ let max = 0; evidenceList.forEach(i=>{ if (Number(i.id)>max) max = Number(i.id)}); return String(max + 1); }

function onSubmitEvidence(e){
  e.preventDefault();
  const id = $('evidenceId').value || nextEvidenceId();
  const entry = { id: String(id), description: $('description').value.trim(), location: $('location').value.trim(), collectedBy: $('collectedBy').value.trim(), dateCollected: $('dateCollected').value || '' };
  const exists = evidenceList.findIndex(x => String(x.id) === String(id));
  if (exists >= 0) evidenceList[exists] = entry; else evidenceList.push(entry);
  save(); renderAll(); resetEvidenceForm();
}

/* Connections rendering and handling */
function renderConnections(){
  const tbody = document.querySelector('#connectionsTable tbody');
  tbody.innerHTML = '';
  connectionsList.forEach(c => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${escapeHtml(c.id)}</td>
      <td>${escapeHtml(c.source)}</td>
      <td>${escapeHtml(c.target)}</td>
      <td>${escapeHtml(c.note||'')}</td>
      <td class="actions"><button class="delete-conn" data-id="${c.id}">Delete</button></td>`;
    tbody.appendChild(tr);
  });
  document.querySelectorAll('button.delete-conn').forEach(b => b.addEventListener('click', onDeleteConnection));
}

function nextConnectionId(){ let max = 0; connectionsList.forEach(i=>{ if (Number(i.id)>max) max = Number(i.id)}); return String(max+1); }

function onSubmitConnection(e){
  e.preventDefault();
  const src = $('sourceId').value.trim(); const tgt = $('targetId').value.trim();
  if (!src || !tgt) { alert('Enter both source and target IDs'); return; }
  const note = $('connectionNote').value.trim();
  const id = nextConnectionId();
  const conn = { id: id, source: String(src), target: String(tgt), note };
  connectionsList.push(conn);
  save(); renderAll(); resetConnectionForm();
}

function resetConnectionForm(){ $('connectionForm').reset(); $('connectionId').value = ''; $('saveConnectionBtn').textContent = 'Add Connection'; }

function onDeleteConnection(e){ const id = e.currentTarget.dataset.id; if (!confirm('Delete connection '+id+'?')) return; connectionsList = connectionsList.filter(c=>String(c.id)!==String(id)); save(); renderAll(); }

/* Find connections (direct links and shortest path) */
function findPathBFS(startId, endId){
  // build adjacency from connections (undirected for path finding)
  const adj = {};
  const addEdge = (a,b)=>{ adj[a]=adj[a]||new Set(); adj[a].add(b); };
  connectionsList.forEach(c=>{ addEdge(c.source,c.target); addEdge(c.target,c.source); });
  // BFS
  const q = [String(startId)]; const prev = {}; prev[String(startId)] = null; let found = false;
  while(q.length){ const cur = q.shift(); if (cur === String(endId)){ found = true; break; } const neighbors = adj[cur] ? Array.from(adj[cur]) : []; for(const n of neighbors){ if (prev[n]===undefined){ prev[n]=cur; q.push(n); } } }
  if (!found) return null;
  const path = []; let cur = String(endId); while(cur!=null){ path.push(cur); cur = prev[cur]===undefined?null:prev[cur]; } return path.reverse();
}

function onFindSubmit(e){
  e.preventDefault();
  const from = $('findFrom').value.trim(); const to = $('findTo').value.trim();
  if (!from || !to) return;
  const direct = connectionsList.filter(c => (String(c.source)===String(from) && String(c.target)===String(to)) || (String(c.source)===String(to) && String(c.target)===String(from)));
  const path = findPathBFS(from,to);
  const res = $('findResult'); res.classList.remove('hidden');
  res.innerHTML = `<strong>Direct links:</strong> ${direct.length} <br/><strong>Shortest path:</strong> ${path ? escapeHtml(path.join(' → ')) : 'No path found'}`;
  if (path && path.length) highlightPathInGraph(path);
}

function clearFind(){ $('findForm').reset(); const r=$('findResult'); r.classList.add('hidden'); r.innerHTML=''; renderGraph(); }

/* Graph (Cytoscape) */
// Graph functionality removed — UI now focuses on Evidence and Connections only

/* Import/Export (include connections) */
function exportJson(){
  const out = { evidence: evidenceList, connections: connectionsList };
  const data = JSON.stringify(out, null, 2);
  const blob = new Blob([data], {type:'application/json'});
  const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'evidence-export.json'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}

function importJsonFile(file){
  const reader = new FileReader();
  reader.onload = () => {
    try{
      const parsed = JSON.parse(reader.result);
      if (Array.isArray(parsed)) {
        // legacy: array of evidence items
        evidenceList = parsed.map((it, idx)=>({ id: it.id != null ? String(it.id) : String(idx+1), description: it.description||'', location: it.location||'', collectedBy: it.collectedBy||'', dateCollected: it.dateCollected||'' }));
        connectionsList = [];
      } else if (parsed && typeof parsed === 'object'){
        evidenceList = Array.isArray(parsed.evidence) ? parsed.evidence.map((it,idx)=>({ id: it.id != null ? String(it.id) : String(idx+1), description: it.description||'', location: it.location||'', collectedBy: it.collectedBy||'', dateCollected: it.dateCollected||'' })) : [];
        connectionsList = Array.isArray(parsed.connections) ? parsed.connections.map((c,idx)=>({ id: c.id != null ? String(c.id) : String(idx+1), source: String(c.source), target: String(c.target), note: c.note||'' })) : [];
      } else throw new Error('Invalid import format');
      save(); renderAll(); alert('Imported data (evidence: '+evidenceList.length+', connections: '+connectionsList.length+')');
    }catch(err){ alert('Failed to import: '+err.message); }
  };
  reader.readAsText(file);
}

function exportConnectionsOnly(){ const out = { connections: connectionsList }; const data = JSON.stringify(out, null,2); const blob = new Blob([data],{type:'application/json'}); const url = URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='connections-export.json'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url); }

function clearAll(){ if (!confirm('Clear all stored evidence and connections? This cannot be undone.')) return; evidenceList=[]; connectionsList=[]; save(); renderAll(); }

/* UI wiring */
function switchTab(targetId){ document.querySelectorAll('.view').forEach(v=>v.classList.add('hidden')); document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active')); const btn = Array.from(document.querySelectorAll('.tab')).find(b=>b.dataset.target===targetId); if(btn) btn.classList.add('active'); const el = $(targetId); if(el) el.classList.remove('hidden'); if(targetId==='graph-section') renderGraph(); }

function wire(){
  // evidence
  $('evidenceForm').addEventListener('submit', onSubmitEvidence); $('resetBtn').addEventListener('click', resetEvidenceForm);
  // import/export
  $('exportBtn').addEventListener('click', exportJson);
  $('importFile').addEventListener('change', (ev)=>{ const f = ev.target.files && ev.target.files[0]; if(f) importJsonFile(f); ev.target.value=''; });
  $('clearAllBtn').addEventListener('click', clearAll);
  // connections
  $('connectionForm').addEventListener('submit', onSubmitConnection); $('resetConnectionBtn').addEventListener('click', resetConnectionForm);
  $('exportConnectionsBtn').addEventListener('click', exportConnectionsOnly);
  // find
  $('findForm').addEventListener('submit', onFindSubmit); $('clearFindBtn').addEventListener('click', clearFind);
  // graph removed — no buttons to wire
  // tabs
  document.querySelectorAll('.tab').forEach(b=> b.addEventListener('click', ()=> switchTab(b.dataset.target)));
}

function renderAll(){ renderEvidence(); renderConnections(); }

document.addEventListener('DOMContentLoaded', ()=>{ load(); wire(); renderAll(); });
