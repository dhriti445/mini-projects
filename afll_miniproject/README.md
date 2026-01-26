# AFLL Mini Project – Java Syntax Validator 🧩

## Course
**Automata Theory, Formal Languages and Logic (AFLL)**  
3rd Semester, Academic Year 2025

---

## Project Title
Syntax Validation of Java Programs using Context-Free Grammar

---

## Problem Statement
Design and implement a syntax validator for a subset of Java programming constructs using formal grammar rules and lexical analysis.

---

## Project Description
This project implements a **Java syntax validator** using **PLY (Python Lex-Yacc)**.  
The tool checks whether given Java statements follow correct syntax and basic semantic rules based on a **Context-Free Grammar (CFG)**.

It supports validation of common Java constructs such as:
- Variable declarations
- Array declarations
- Object creation
- Class definitions
- Looping constructs (`for`, `while`, `do-while`)

The program provides clear **Accepted / Rejected** feedback for each input statement.

---

## Language & Tools Used
- **Programming Language:** Python, Java (grammar target)
- **Parsing Tool:** PLY (Lex & Yacc for Python)
- **Concepts:**  
  - Lexical Analysis  
  - Context-Free Grammar  
  - Syntax & Basic Semantic Validation  

---

## Features Supported
- Simple data-type declarations
- Class definitions
- Object creation using `new`
- One-dimensional array declarations
- Looping constructs:
  - `for`
  - `while`
  - `do-while`
- Type compatibility checks (basic)

---

## File Structure
- `lexer.py` – Token definitions and lexical rules
- `parser.py` – Grammar rules and syntax validation
- `main.py` – User interface for input and output
- Screenshots of accepted and rejected test cases

---

## How to Run

1. Install PLY (if not installed):
   ```bash
   pip install ply
2. python main.py
