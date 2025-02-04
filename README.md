# Node.js Authentication API  

A simple authentication API using Node.js, Express, and MongoDB. Supports user registration, login, and protected routes with JWT authentication.  

## Project Structure  

```
.env            - Environment variables  
/config         - Configuration files  
/db.js          - Database connection  
/controllers    - Authentication logic (authController.js)  
/middlewares    - JWT authentication middleware (authMiddleware.js)  
/models         - User model (User.js)  
/routes         - API routes (auth.js)  
/services       - Authentication services (authService.js)  
/server.js      - Main entry point  
/package.json   - Project dependencies  
```

## Prerequisites  

- Node.js  
- MongoDB  

## Installation  

1. Clone the repository:  
   ```sh
   git clone git@github.com:kashishGadhiya-aub/nodeJS_-Exercise.git
   ```
2. Install dependencies:  
   ```sh
   npm install
   ```
3. Create a `.env` file and add:  
   ```sh
   MONGODB_URL=YOUR_MONGODB_CONNECTION_STRING  
   JWT_SECRET=YOUR_SECRET_KEY  
    
   ```

## Running the Application  

Start the server in development mode:  
```sh
npm run dev
```

## API Endpoints  

### Register a New User  
- **Endpoint:** `POST /api/auth/register`  
- **Request Body:**  
  ```json
  {
    "username": "exampleuser",
    "email": "user@example.com",
    "password": "securePassword123"
  }
  ```
- **Response:**  
  ```json
  { "message": "User registered successfully!" }
  ```

### Login User  
- **Endpoint:** `POST /api/auth/login`  
- **Request Body:**  
  ```json
  {
    "username": "exampleuser",
    "email": "user@example.com",
  }
  ```
- **Response:**  
  ```json
  {
    "message": "Login successful!",
  }
  ```

### Get All Users 
- **Endpoint:** `GET /api/auth/users`  
- **Response:**  
  ```json
  [
    {
      "username": "exampleuser",
      "email": "user@example.com",
      "createdAt": "2025-01-05T12:34:56Z"
    }
  ]
  ```

## Features  

- User registration with validation  
- Password hashing with bcrypt  
- JWT-based authentication  

## Technologies Used  

- Node.js  
- Express.js  
- MongoDB  
- bcrypt  
- jsonwebtoken  

This API provides a simple and secure authentication system using JWT and MongoDB.
