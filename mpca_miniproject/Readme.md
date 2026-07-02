# Smart Helmet for Accident Detection and Alert

## Overview

The Smart Helmet is an Arduino-based accident detection system designed to detect sudden falls and automatically trigger emergency alerts. Using motion sensors and Bluetooth communication, the system provides immediate visual, audio, and wireless notifications during emergencies.

## Features

- Real-time fall detection using MPU6050 accelerometer and gyroscope
- Automatic accident detection based on acceleration changes
- 10-second cancellation window to prevent false alarms
- Bluetooth SOS notification to a paired mobile device
- LCD display for system status and alerts
- LED and buzzer for visual and audio warnings
- Battery-powered portable design

## Components

- Arduino Uno R3
- MPU6050 Accelerometer & Gyroscope
- HC-05 Bluetooth Module
- 16×2 I2C LCD Display
- Active Buzzer
- Push Button
- LED
- DC-DC Buck Converter
- 9V Battery

## Working

1. Continuously monitors motion using the MPU6050 sensor.
2. Detects sudden changes in acceleration indicating a possible fall.
3. Displays a warning and activates the buzzer and LED.
4. Allows the user to cancel the alert within 10 seconds.
5. If not cancelled, sends an SOS message via Bluetooth while continuing emergency alerts.

## Technologies

- Arduino C++
- Embedded Systems
- Sensor Programming
- Bluetooth Communication

## Future Improvements

- GPS location sharing
- GSM-based SMS alerts
- Mobile application integration
- Cloud-based emergency monitoring
