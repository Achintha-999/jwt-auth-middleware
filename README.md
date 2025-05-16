# Middleware Practical

This project demonstrates the use of middleware in an Express.js application. It includes logging, authentication, and error-handling middleware, along with a protected route.

## Project Structure
/src
├── middlewares/
│   ├── auth.js       # JWT validation
│   ├── logger.js     # Request logging
│   └── errorHandler.js
├── routes/
│   └── protected.js  # Secure routes
├── server.js         # Main app
└── generate-token.js # Test token generator


## Features

- **Logger Middleware**: Logs the request method and URL with timestamps.
- **Authentication Middleware**: Protects routes by verifying JWT tokens.
- **Error Handling Middleware**: Handles errors and sends appropriate responses.
- **Protected Route**: Accessible only with a valid JWT token.

## Installation

 1. Clone the repository:
   ```sh
   git clone https://github.com/Achintha-999/jwt-auth-middleware.git


 2. Navigate to the project directory:
   cd jwt-auth-middleware

 3. Install dependencies:
   npm install
 Configuration
Create a .env file in the root directory with the following content:

JWT_SECRET=your_secret_key_here
PORT=3000


Usage

1. Start the server:
node server.js

2. The server will run on the port specified in the .env file (default: 3000).

API Endpoints

Protected Route

GET /api/secret

Requires a valid JWT token in the Authorization header (format: Bearer <token>).
Response:
{
  "message": "Protected data!",
  "user": { /* Decoded JWT payload */ }
}

Middleware Details
Logger Middleware
Logs the request method and URL with timestamps.
File: logger.js
Authentication Middleware
Verifies the JWT token in the Authorization header.
Adds the decoded user information to req.user.
File: auth.js
Error Handling Middleware
Catches errors and sends a 500 Internal Server Error response.
File: errorHandler.js
Dependencies
dotenv: For environment variable management.
express: Web framework for Node.js.
jsonwebtoken: For JWT token generation and verification.



