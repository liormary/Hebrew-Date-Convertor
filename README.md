# Hebrew Date Converter

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
5. [Usage](#usage)
6. [Acknowledgments](#acknowledgments)

---

## Introduction
The **Hebrew Date Converter** is a React-based application that converts Gregorian dates into Hebrew calendar dates and displays user-submitted messages alongside their associated dates. The project demonstrates the integration of a simple backend server with a React frontend for managing date-based messages.

---

## Features
- Converts timestamps into the Hebrew calendar format.
- Displays messages associated with specific Hebrew dates.
- Simple and user-friendly interface.
- Integration of backend and frontend for message management.

---

## Technologies Used
- **Frontend**: React.js, JavaScript, CSS
- **Backend**: Node.js, Express.js
- **Styling**: CSS modules

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- A package manager like `npm` or `yarn`.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hebrew-date-converter.git
2. Navigate to the project directory:
   ```bash
   cd hebrew-date-converter

#### Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
2. Install backend dependencies:
   ```bash
   npm install
3. Start the backend server:
   ```bash
   node server.js

   The backend will run on http://localhost:5000.

#### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
2. Install frontend dependencies:
   ```bash
   npm install
3. Start the frontend development server:
   ```bash
   npm start

The app will be available at http://localhost:3000.

---

## Usage

1. **Open the app in your browser** at `http://localhost:3000`.

2. **Enter a Gregorian date** in the input field (e.g., `2024-12-04`).

3. **Click Convert** to send the request to the backend to convert the Gregorian date into the Hebrew date.

4. **View the Hebrew date** displayed on the screen.

---

## Acknowledgments

- **Hebcal API**: Used for converting Gregorian dates to Hebrew calendar dates.
- **[React Documentation](https://reactjs.org/docs/getting-started.html)**: For providing the framework and tools for building the frontend.

