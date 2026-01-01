---
sidebar_position: 3
---

# Lesson 3: Basic Programming for Robotics

## Overview

This lesson introduces fundamental programming concepts essential for controlling robots. You'll learn how software commands translate to physical actions and explore the unique challenges of programming for real-world systems.

## Learning Objectives

After completing this lesson, you will be able to:

- Understand the relationship between code and physical robot actions
- Identify key programming concepts specific to robotics
- Recognize the importance of timing and real-time constraints
- Understand basic sensor-feedback loops
- Appreciate the challenges of programming for uncertainty in physical systems

## Programming for Physical Systems

Programming a robot differs significantly from writing traditional software because:

- **Real-world constraints**: Physical systems have limitations (weight, power, processing speed)
- **Real-time requirements**: Responses must occur within specific timeframes
- **Uncertainty handling**: Sensors provide imperfect information
- **Safety considerations**: Mistakes can damage hardware or harm humans

## Key Programming Concepts in Robotics

### 1. State Machines

Robots often operate in distinct states with defined transitions between them:

```
State A: Idle
  ↓ (command received)
State B: Walking
  ↓ (obstacle detected)
State C: Avoiding Obstacle
  ↓ (obstacle cleared)
State B: Walking
  ↓ (destination reached)
State A: Idle
```

### 2. Sensor-Action Loops

The fundamental pattern in robotics programming:

```
1. Read sensor data
2. Process information (using AI algorithms)
3. Decide on action
4. Send commands to actuators
5. Wait for next cycle
6. Repeat
```

### 3. Asynchronous Operations

Many robot tasks run simultaneously:

- Navigation system running
- Speech recognition active
- Balance maintenance ongoing
- Object detection continuing

## Programming Languages and Frameworks

### Common Languages
- **C/C++**: For high-performance, low-level control
- **Python**: For AI, machine learning, and rapid prototyping
- **ROS (Robot Operating System)**: Framework for building robot applications
- **MATLAB**: For algorithm development and simulation

### Robot Frameworks
- **ROS/ROS2**: Standard middleware for robot communication
- **Gazebo**: Robot simulation environment
- **MoveIt**: Motion planning framework

## Control Systems

### Open-Loop Control
- Commands sent without feedback
- No adjustment based on results
- Simple but unreliable for complex tasks

```
send_command("move_forward(1_meter)")
// Robot moves, no verification of actual movement
```

### Closed-Loop Control (Feedback Control)
- Monitors performance and adjusts accordingly
- Essential for precise robot tasks
- Uses sensor feedback to correct actions

```
while (not_at_target()) {
  error = target_position - current_position;
  adjustment = calculate_adjustment(error);
  send_command(adjustment);
  wait(0.01); // Check again after 10ms
}
```

## Real-Time Programming Considerations

### Timing Constraints
- **Hard Real-Time**: Missing a deadline causes system failure
- **Soft Real-Time**: Missing deadlines degrades performance but doesn't fail

### Scheduling
- Critical tasks (balance) must take priority
- Background tasks (logging) can be delayed
- Predictable timing is essential

## Safety Programming

Robots must include multiple safety layers:

```
// Safety Check 1: Hardware Limits
if (motor_current > MAX_CURRENT) {
  emergency_stop();
}

// Safety Check 2: Position Limits
if (joint_angle > MAX_ANGLE) {
  limit_joint_motion();
}

// Safety Check 3: Trajectory Validation
if (path_collision_detected()) {
  stop_motion();
}
```

## Handling Uncertainty

Physical systems introduce uncertainty that programs must handle:

### Sensor Noise
- All sensors have measurement errors
- Filtering algorithms (e.g., Kalman filters) reduce noise
- Multiple sensor readings may be averaged

### Environmental Uncertainty
- Real world differs from models
- Algorithms must adapt to changes
- Planning should include contingency options

## Basic Programming Patterns

### 1. Behavior-Based Programming
```
// Define simple behaviors
Behavior walk_forward = { /* walking logic */ };
Behavior avoid_obstacle = { /* obstacle avoidance logic */ };
Behavior balance = { /* balance maintenance logic */ };

// Coordinator manages behavior conflicts
execute_highest_priority_behavior();
```

### 2. Task Planning
```
// Break complex tasks into subtasks
Task: Serve Drink
  1. Move to kitchen
  2. Identify cup
  3. Grasp cup
  4. Move to table
  5. Place cup down
```

## Debugging Physical Systems

### Challenges
- Cannot pause time to inspect state
- Actions affect environment permanently
- Remote debugging is often impossible

### Solutions
- Extensive logging
- Simulated environments for testing
- Modular design for easier testing
- Safety interlocks to prevent damage

## Exercises

1. **Logic Exercise**: Write pseudocode for a robot that moves forward until it detects an obstacle, then turns right and continues. Include safety checks.

2. **Scenario Exercise**: You're programming a robot to pick up a cup. List three different sensor failures that could occur and how your program should handle each.

3. **Design Exercise**: Why might a robot need both fast and slow control loops? Give examples of tasks that would use each.

## Examples

### Example 1: Simple Navigation with Obstacle Avoidance
```
while (not_at_destination()) {
    // Check for obstacles
    if (front_sensor.distance < SAFE_DISTANCE) {
        // Stop to avoid collision
        stop_motors();
        
        // Plan new route
        int turn_angle = 45;
        while (sensor_at_angle(turn_angle).distance < SAFE_DISTANCE) {
            turn_angle += 15;  // Check next direction
        }
        
        // Turn to safe direction
        turn_robot(turn_angle);
    }
    
    // Move forward if safe
    move_forward(SPEED_NORMAL);
    
    delay(100);  // Check again in 100ms
}
```

### Example 2: Grasping with Force Feedback
```
void grasp_object() {
    // Start with gentle grip
    set_gripper_force(LOW_FORCE);
    close_gripper();
    
    // Monitor force sensors
    while (gripper_position < MAX_CLOSURE) {
        if (force_sensor.value > GRIP_THRESHOLD) {
            // Object detected, stop closing
            break;
        }
        close_gripper_slowly();
        delay(10);
    }
    
    // Verify grasp with additional sensors
    if (tactile_sensors.confirmed_grip()) {
        report("Grasp successful");
    } else {
        report("Grasp failed");
    }
}
```

## Summary

This lesson covered fundamental programming concepts essential for robotics. You learned about the unique challenges of programming for physical systems, including real-time constraints, uncertainty, safety considerations, and feedback control.

The key insight is that robot programming must account for the real world's complexity, imperfection, and unpredictability. Success requires understanding both the software and mechanical aspects of robot systems.

## Next Steps

Complete the exercises in this lesson, then proceed to the projects for Chapter 1, where you'll apply these concepts to practical scenarios. Begin with [Project 1: First Robot](../projects/project-1-first-robot.md).