# HealthCare

A Next.js application for tracking health activities, including meal history, exercises, and body weight-fat percentage records.

## Table of Contents

- [Overview](#overview)
  - [Screens](#screens)
- [Installation](#installation)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Mock Server](#mock-server)
  - [API Features](#api-features)
  - [Connection Between Frontend and Backend](#connection-between-frontend-and-backend)

## Overview

HealthCare is a web application designed to help users monitor and manage their health activities. Users can track their meal history, exercise routines, body weight and fat percentage, and more. The goal is to provide an easy-to-use tool for individuals looking to improve their health and well-being.

### Screens

- **Main Screen** (http://localhost:3000): Displays achievements, a body fat-body weight overall graph for the last 12 months, and a list of meal history.
- **My Record Screen** (http://localhost:3000/my-record): Shows a more detailed body fat-weight graph with options to view data by days, weeks, months, or years. Also presents exercise history with details and a diary list.
- **Column Screen** (http://localhost:3000/column): Features health recommendations for various activities, including diet, beauty, and health, with detailed information.

## Installation

1. Install dependencies:

```
npm install
```

2. Run the development server:

```
npm run dev
```

3. Build and run the production server:

```
npm run build
npm run start
```

Now, the application is ready and available at [http://localhost:3000](http://localhost:3000).

## Technologies

- **Next.js**: Utilized for its built-in React.js framework and router handling capabilities, allowing for easy mocking of data in a backend server without the need for a separate backend.
- **Mantine UI**: A lightweight, modern UI library providing a clean and responsive design for the application.
- **TypeScript**: TypeScript is used instead of JavaScript to provide static typing, which helps catch errors during development, improves code readability, and adds better tooling support for editor autocompletion and refactoring.

## Project Structure
```
.
├── app
│   ├── api                # Mock API handlers
│   └── ...                # Next.js pages and layout
├── components             # UI components
├── widgets                # Business logic components (UI components + logic handler)
├── hooks                  # Custom hooks for API interaction and business logic
├── utils                  # Helper functions
├── theme                  # Main place for setting up application theme (color, font, etc.)
├── package.json
├── tsconfig.json
└── README.md
```

## Mock Server

The mock server is located in the `api` folder and is used for simulating a backend server with pre-generated data for testing and development purposes. It generates 100 random records for exercises, meal histories, columns, and statistics.
The mock server is ready and available at [http://localhost:3000/api](http://localhost:3000/api) after running the application.

### API Features

- **Pagination**: APIs that return a list of records handle pagination using the `page` and `perPage` parameters to control the number of records displayed per page and the current page number.
- **Data for Graphs**: APIs for retrieving data for graphs generate random data based on the period type (day, week, month, or year) to simulate realistic data.

### Connection Between Frontend and Backend

The frontend interacts with the mock server located in the `api` folder by making API calls, just as it would with a real backend server. This allows for seamless integration when transitioning from the mock server to a production environment, as the frontend components and hooks are designed to work with the same API structure and data.