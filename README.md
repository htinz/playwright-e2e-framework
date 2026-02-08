# playwright-e2e-framework

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

## Installation
Follow the steps below to set up the test automation framework locally.

### Prerequisites
Ensure the following tools are installed:
- Node.js (v18 or higher)
- npm (comes with Node.js)
- Git
Verify installations:
node -v  
npm -v  
git --version  

### Setup Steps
1. Clone the repository
git clone https://github.com/htinz/playwright-e2e-framework.git

2. Navigate into the project folder
cd playwright-e2e-framework

3. Install dependencies
npm install

4. Install Playwright browsers
npx playwright install

## How to Run Tests
Run all tests:
npm test

Run UI tests only:
npm run test:ui

Run API tests only:
npm run test:api

Run tests in headed mode:
npm run test:headed

View HTML report:
npm run test:report

## Test Coverage
- UI tests (login, forms, dropdowns, Radio buttons,...)
- API tests
- Error scenarios
- Reports



