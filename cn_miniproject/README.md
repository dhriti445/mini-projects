# Custom Port Scanner with Service Detection

## Overview

A TCP-based network scanner that discovers open ports on a target system and identifies the services running on those ports through banner grabbing.

## Features

- Multi-threaded concurrent scanning
- TCP port scanning
- Banner grabbing for service detection
- Configurable timeout and retry logic
- Performance evaluation of scan efficiency

## Technologies

- C / C++ / Python
- TCP Socket Programming
- Multithreading
- Network Programming

## How It Works

1. Accepts a target IP address or hostname.
2. Attempts TCP connections across a specified range of ports.
3. Detects open ports.
4. Retrieves service banners where available.
5. Displays discovered services and scan statistics.

## Learning Outcomes

- Socket Programming
- TCP Communication
- Concurrent Programming
- Network Security Fundamentals
