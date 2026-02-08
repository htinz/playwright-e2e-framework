# playwright-e2e-framework

![Playwright](https://img.shields.io/badge/Playwright-Testing-green?logo=playwright)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue?logo=typescript)
<!-- ![CI](https://github.com/htinz/playwright-e2e-framework/actions/workflows/playwright.yml/badge.svg) -->

## Overview
This repository demonstrates a scalable end-to-end automation testing framework built with Playwright using JavaScript and TypeScript.
The framework supports automated validation of both frontend and backend systems, focusing on reliability, maintainability, and real-world testing practices.
It follows a modular architecture with reusable components, structured test data management, and CI-ready workflows to support efficient regression testing and continuous delivery pipelines.

## Tech Stack
- Playwright – End-to-end UI automation  
- JavaScript / TypeScript – Test scripting  
- Node.js – Runtime environment  
- Playwright Test – Test runner and assertions 
- Supertest – API testing  
- Git & GitHub – Version control  
- HTML Reports – Test reporting  
- GitHub Actions (planned) – Continuous Integration

## Framework Architecture
The automation framework follows a modular and scalable architecture designed to support maintainable and reusable test development.
Key design patterns and principles include:
- **Page Object Model (POM):** Separates test logic from UI interactions, improving readability and reducing duplication.
- **Reusable Utilities:** Centralized helpers for authentication, configuration, and common actions
- **Environment Configuration:** Supports multiple environments through configurable settings
- **Test Data Management:** Externalized data enables data-driven and parameterized testing
- **API & UI Layer Separation:** Clear distinction between frontend and backend validation layers
- **Parallel Execution:** Optimized for faster feedback through concurrent test execution
- **Reporting Integration:** Generates detailed HTML reports for analysis and debugging 

## Installation
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

## Reporting
The framework generates comprehensive HTML test reports providing visibility into test execution results.
Reports include:
- Execution summary  
- Error traces  
- Screenshots on failure  
- Test duration  
- Step-level insights  
This helps accelerate debugging and improves overall test reliability.

## CI/CD (Planned)
Continuous Integration will be implemented using GitHub Actions to automatically execute tests on pull requests and code changes.
Planned capabilities:
- Automated test execution  
- Parallel runs for faster feedback  
- HTML report generation  
- Failure notifications  
This will help ensure consistent quality and support modern DevOps practices.

## Project Structure
playwright-e2e-framework/
├── tests/        # UI and API test specifications
├── pages/        # Page Object Models (POM)
├── utils/        # Reusable utilities and helpers
├── test-data/    # Externalized test data
├── config/       # Environment configurations
├── reports/      # Generated test reports
└── package.json  # Project scripts and dependencies

## Test Coverage
- UI tests (login, forms, dropdowns, radio buttons, etc.)
- API tests
- Negative and error scenarios
- HTML reporting

## Future Improvements
- CI/CD pipeline integration  
- Dockerized test execution  
- Enhanced reporting dashboards  
- Expanded API coverage  
- Cross-browser testing  
- Performance testing integration  
