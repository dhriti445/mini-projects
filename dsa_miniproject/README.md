# DSA Mini Project – Crime Evidence Tracker 🕵️‍♀️

## Course
**Data Structures and Algorithms (DSA)**  
3rd Semester, Academic Year 2025

---

## Project Title
Crime Evidence Tracker using Fundamental Data Structures

---

## Problem Statement
Design and implement a console-based system to manage crime evidence and analyze relationships between suspects using core data structures such as stacks, graphs, and queues.

---

## Project Description
The **Crime Evidence Tracker** is a C-based console application developed to simulate real-world investigative workflows.  
It allows investigators to store and manage crime evidence and visualize relationships between suspects.

The system applies **fundamental data structures** to efficiently handle evidence records and determine connection paths between suspects using graph traversal techniques.

---

## System Design
- **Stack** is used to store and manage evidence records in LIFO order
- **Graph (Adjacency Matrix)** represents relationships between suspects
- **Queue (BFS)** is used to determine the shortest connection path between suspects
- Menu-driven interface for ease of interaction

---

## Features
- Add, remove, and display crime evidence
- Create connections between suspects
- Find the shortest connection path between suspects using BFS
- Display the complete suspect network

---

## Data Structures Used

| Data Structure | Purpose |
|---------------|---------|
| Stack | Manage evidence records |
| Graph (Adjacency Matrix) | Represent suspect relationships |
| Queue (BFS) | Find shortest connection paths |

---

## Program Flow
Main Menu
├─ Add Evidence (Push)
├─ Remove Evidence (Pop)
├─ Display Evidence
├─ Add Suspect Connection
├─ Find Connection Path (BFS)
├─ Display Suspect Network
└─ Exit
---

## File Structure
- `main.c` – Menu-driven application logic
- `evidence.c / evidence.h` – Stack implementation for evidence management
- `graph.c / graph.h` – Graph representation and BFS traversal
- Executable files for testing

---

## Technologies Used
- **Programming Language:** C
- **Compiler:** GCC
- **Concepts Applied:**
  - Stack
  - Graph (Adjacency Matrix)
  - Queue
  - Breadth-First Search (BFS)

---

## How to Run

1. Compile the program:
   ```bash
   gcc main.c evidence.c graph.c -o tracker
   ./tracker
