// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Manual sidebar structure for the Physical AI & Humanoid Robotics book
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Chapter 1: AI & Robotics Fundamentals',
      items: [
        'chapter-1-fundamentals/index',
        {
          type: 'category',
          label: 'Lessons',
          items: [
            'chapter-1-fundamentals/lesson-1-introduction-ai/index',
            'chapter-1-fundamentals/lesson-2-robot-components/index',
            'chapter-1-fundamentals/lesson-3-basic-programming/index',
            'chapter-1-fundamentals/lesson-4-project-planning/index',
          ],
        },
        {
          type: 'category',
          label: 'Projects',
          items: [
            'chapter-1-fundamentals/projects/project-1-first-robot',
            'chapter-1-fundamentals/projects/project-2-sensor-input',
            'chapter-1-fundamentals/projects/project-3-complex-control',
            'chapter-1-fundamentals/projects/troubleshooting',
            'chapter-1-fundamentals/projects/project-validation',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorials/quickstart',
      ],
    },
    // Additional chapters will be added as they are created
  ],
};

export default sidebars;
