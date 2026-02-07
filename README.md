# PlayWriteAutomation

## Overview
This repository showcases a scalable end-to-end automation testing framework developed with Playwright using JavaScript and TypeScript. 
The framework supports comprehensive validation of both frontend and backend systems, ensuring high application quality through reliable and maintainable automated tests. 
Built with a focus on real-world engineering standards, the project incorporates modular architecture, reusable components, structured test data management, and CI-ready workflows. 
The framework is designed to accelerate regression cycles, improve defect detection, and support continuous delivery environments.

## Tech Stack
- Playwright – End-to-end UI automation  
- JavaScript / TypeScript – Test scripting  
- Node.js – Runtime environment  
- Mocha / Test Runner – Test execution  
- Supertest – API testing  
- Git & GitHub – Version control  
- HTML Reports – Test reporting  
- GitHub Actions (planned) – Continuous Integration

## Framework Architecture
The automation framework follows a modular and scalable architecture designed to support maintainable and reusable test development.
Key design patterns and principles implemented:
- **Page Object Model (POM):** Separates test logic from UI interactions, improving readability and reducing code duplication.
- **Reusable Utilities:** Common functions such as authentication, test data handling, and configuration are centralized for efficiency.
- **Environment Configuration:** Supports flexible execution across different environments using configurable settings.
- **Test Data Management:** Externalized test data enables parameterized and data-driven testing.
- **API & UI Layer Separation:** Distinct structure for frontend and backend validation ensures better organization and scalability.
- **Parallel Execution:** Tests are optimized for faster feedback through concurrent execution.
- **Reporting Integration:** Generates detailed HTML reports for test results and debugging.

## Test Coverage
- UI tests (login, forms, dropdowns, Radio buttons,...)
- API tests
- Error scenarios
- Reports

## How to Run
1. git clone
2. npm install
3. npm test

