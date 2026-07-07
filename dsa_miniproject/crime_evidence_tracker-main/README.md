🕵️‍♀️ Crime Evidence Tracker
-----------------------------
A simple C-based console project to manage crime evidence and suspect networks using fundamental data structures.


📘 Overview
-----------------
This program helps investigators record evidence and visualize connections between suspects.
It demonstrates use of:

Stack → to store and manage evidence

Graph (Adjacency Matrix) → to represent suspect relationships

Queue (BFS) → to find connection paths between suspects


⚙️ Features
-------------------------
Add / remove / display evidence

Add connections between suspects

Find the shortest connection path

Display complete suspect network


🧩 Data Structures Used
-------------------------
| Data Structure | Purpose                         |
| -------------- | ------------------------------- |
| Stack          | Manage evidence in LIFO order   |
| Graph          | Represent suspect relationships |
| Queue (BFS)    | Find connection paths           |



🧠 Flow
-----------------
Main Menu

 ├─ Add Evidence (push)
 
 ├─ Remove Evidence (pop)
 
 ├─ Display Evidence
 
 ├─ Add Connection (graph edge)
 
 ├─ Find Connection Path (BFS)
 
 ├─ Display Graph
 
 └─ Exit

 
🖥️ How to Run (VS code Terminal)
--------------------------------
gcc main.c evidence.c graph.c -o tracker

./tracker
