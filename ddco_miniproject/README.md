# DDCO Mini Project – Traffic Light Controller 🚦

## Course
**Digital Design and Computer Organization Laboratory (UE24CS251A)**  
3rd Semester, Academic Year 2025

---

## Problem Statement
Design and implement the control logic for a traffic light system, handle timing constraints, and simulate the system’s behavior using digital design principles.

---

## Project Description
This project implements a **traffic light controller** using **Verilog HDL**.  
The system manages traffic signals for **North–South (NS)** and **East–West (EW)** directions by cycling through **Green → Yellow → Red** states with predefined timing constraints.

A **Finite State Machine (FSM)** approach is used along with counters to ensure correct state transitions and synchronization between directions.

---

## System Design
- FSM-based controller with 4 states:
  - NS Green
  - NS Yellow
  - EW Green
  - EW Yellow
- Parameterized timing for green and yellow cycles
- Counter-based state transitions
- Reset logic to initialize the system safely

---

## Files Included
- `traffic_controller.v` – Main Verilog design file
- `tb_traffic_controller.v` – Testbench for simulation
- `traffic_tb.vcd` – Simulation waveform output (VCD)
- Screenshots of:
  - Block/Circuit diagram
  - VVP output
  - GTKWave waveform

---

## Technologies Used
- **Language:** Verilog HDL  
- **Simulation Tools:** Icarus Verilog (iverilog), VVP  
- **Waveform Viewer:** GTKWave  

---

## How to Run the Simulation

1. Compile the design and testbench:
   ```bash
   iverilog -o traffic_sim traffic_controller.v tb_traffic_controller.v
   vvp traffic_sim
   gtkwave traffic_tb.vcd
