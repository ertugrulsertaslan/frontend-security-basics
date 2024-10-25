# CSRF Example Application 🚫💻

## Overview

The **CSRF Example Application** is a React-based project designed to educate users about Cross-Site Request Forgery (CSRF) attacks. This application provides an interactive way to understand CSRF concepts, how attacks work, their effects, and prevention techniques. Users can also test inputs to see how unsafe and sanitized outputs differ.

## Features

- **Interactive Learning** 📚: Understand the basics of CSRF through a sidebar that lists key information.
- **Input Testing** 🖥️: Users can input text to see examples of unsafe and safe output.
- **Input Sanitization** 🔒: Demonstrates the use of DOMPurify to protect against potential XSS vulnerabilities.

## Technologies Used

- **React** ⚛️: Frontend framework for building the user interface.
- **DOMPurify** 🧼: A library for sanitizing HTML to prevent XSS attacks.
- **Tailwind CSS** 🎨: Styling to enhance the user experience.

## Getting Started

### Prerequisites

- Install Node.js ⚙️
- Clone the repo 🔄

### Installation

1. Clone the repository:
 ```sh 
  git clone https://github.com/ertugrulsertaslan/frontend-security-basics.git
```

2. Navigate to the project directory:
 ```sh 
  cd frontend-security-basics
```
3.Install the dependencies:
 ```sh 
  npm install
```

### Running the Application
1. Start the development server:
 ```sh 
  npm run dev
```
2. Open your browser and go to http://localhost:3000 to view the application.

## Understanding CSRF

1. 📝 What is CSRF?: An attack that tricks a user into executing unwanted actions without their consent.
2. ✅ How It Works: Attacks utilize the user's authentication to perform actions on their behalf.
3. 📧 Effects: Can lead to data manipulation, unauthorized fund transfers, or changes to account settings.
4. 🔒 Prevention: Use anti-CSRF tokens, SameSite cookies, and secure headers to mitigate risks.
5. 📋 Best Practices: Always validate user actions and implement user confirmation for sensitive actions.

## License 📄

[MIT](https://choosealicense.com/licenses/mit/)
