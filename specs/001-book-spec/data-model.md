# Data Model: Physical AI & Humanoid Robotics Book

## Overview
This document describes the key entities and their relationships for the Physical AI & Humanoid Robotics book project. These entities represent the core concepts that will be organized and presented in the Docusaurus-based documentation site.

## Entity: Book Chapter
- **Description**: A major section of the book containing related lessons and projects
- **Fields**:
  - id (string, required): Unique identifier for the chapter (e.g., "chapter-1-fundamentals")
  - title (string, required): Display title of the chapter
  - description (string, required): Brief summary of the chapter content
  - order (integer, required): Sequential order in the book
  - prerequisites (array of strings): List of chapter IDs that should be completed before this one
  - lessons (array of Lesson references): List of lessons contained in this chapter
  - projects (array of Project references): List of projects associated with this chapter
  - tags (array of strings): Relevant tags for search and categorization

## Entity: Lesson
- **Description**: A subsection of a chapter that covers specific concepts with explanations, examples, and exercises
- **Fields**:
  - id (string, required): Unique identifier for the lesson (e.g., "lesson-1-introduction-ai")
  - title (string, required): Display title of the lesson
  - description (string, required): Brief summary of the lesson content
  - chapterId (string, required): Reference to the parent chapter
  - order (integer, required): Sequential order within the chapter
  - content (string, required): The main content of the lesson in Markdown format
  - prerequisites (array of strings): List of lesson IDs that should be completed before this one
  - learningObjectives (array of strings): List of what the learner should understand after completing the lesson
  - exercises (array of Exercise references): List of exercises for the lesson
  - examples (array of Example references): List of code/configuration examples
  - tags (array of strings): Relevant tags for search and categorization

## Entity: Project/Exercise
- **Description**: A hands-on activity that allows users to apply concepts learned in the lessons
- **Fields**:
  - id (string, required): Unique identifier for the project (e.g., "project-1-first-robot")
  - title (string, required): Display title of the project/exercise
  - description (string, required): Brief summary of what the project involves
  - chapterId (string, required): Reference to the parent chapter
  - lessonIds (array of strings): List of lesson IDs that the project builds upon
  - difficulty (enum, required): "beginner", "intermediate", or "advanced"
  - estimatedTime (integer, required): Estimated time to complete in minutes
  - objectives (array of strings): List of learning objectives for the project
  - materialsNeeded (array of strings): List of required materials, tools, or software
  - steps (array of strings): Sequential steps to complete the project
  - expectedOutcome (string): Description of what the user should have built/learned
  - troubleshootingTips (array of strings): Common issues and solutions
  - tags (array of strings): Relevant tags for search and categorization

## Entity: Example
- **Description**: Code snippets, configurations, or other examples that illustrate concepts
- **Fields**:
  - id (string, required): Unique identifier for the example
  - title (string, required): Brief title of the example
  - description (string, required): Explanation of what the example demonstrates
  - lessonId (string, required): Reference to the lesson containing this example
  - code (string, required): The actual code/configuration content
  - language (string, required): Language/syntax highlighting (e.g., "python", "javascript", "bash", "text")
  - explanation (string, required): Step-by-step explanation of the example
  - tags (array of strings): Relevant tags for search and categorization

## Entity: Exercise
- **Description**: Practice problems or activities within a lesson to reinforce concepts
- **Fields**:
  - id (string, required): Unique identifier for the exercise
  - title (string, required): Brief title of the exercise
  - description (string, required): Explanation of what the exercise involves
  - lessonId (string, required): Reference to the lesson containing this exercise
  - type (enum, required): "practice_problem", "quiz", "coding_challenge", "reflection"
  - content (string, required): The actual exercise content in Markdown format
  - difficulty (enum, required): "beginner", "intermediate", or "advanced"
  - solution (string): Solution or expected answer (optional)
  - tags (array of strings): Relevant tags for search and categorization

## Entity: Quickstart Guide
- **Description**: A brief tutorial to help users get started with the book content
- **Fields**:
  - id (string, required): Unique identifier for the quickstart guide
  - title (string, required): Display title
  - description (string, required): Brief overview of what the guide covers
  - content (string, required): The main content of the guide in Markdown format
  - estimatedTime (integer, required): Estimated time to complete in minutes
  - prerequisites (array of strings): List of any required knowledge or setup steps
  - steps (array of strings): Sequential steps to complete the quickstart
  - nextSteps (array of strings): Suggestions for what to do after completing the quickstart
  - tags (array of strings): Relevant tags for search and categorization

## Relationships
- Book Chapter [1] → [0..n] Lesson (one chapter contains multiple lessons)
- Book Chapter [1] → [0..n] Project/Exercise (one chapter contains multiple projects/exercises)
- Lesson [1] → [0..n] Exercise (one lesson may contain multiple exercises)
- Lesson [1] → [0..n] Example (one lesson may contain multiple examples)
- Project/Exercise [1] → [0..n] Lesson (one project may build upon multiple lessons)