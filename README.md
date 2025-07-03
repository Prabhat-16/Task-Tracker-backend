# Task Tracker Application - Backend

This is the backend service for the Task Tracker Application, a RESTful API built with Node.js and Express.js that helps users manage their tasks efficiently.

## 🚀 Features

- RESTful API endpoints for task management
- MySQL database integration
- CORS enabled for cross-origin requests
- Environment variable configuration
- Express.js server with middleware support

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- MySQL Server
- npm (Node Package Manager)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database_name
```

4. Start the server:
```bash
node server.js
```

The server will start running on `http://localhost:5000` (or the port specified in your .env file).

## 🔧 API Endpoints

- `GET /api` - Welcome message
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## 📦 Dependencies

- express: ^5.1.0
- cors: ^2.8.5
- body-parser: ^2.2.0
- dotenv: ^16.5.0
- mysql: ^2.18.1
- mysql2: ^3.14.0
- axios: ^1.8.4

## 🔐 Environment Variables

The following environment variables are required:

- `PORT`: The port number for the server (default: 5000)
- `DB_HOST`: MySQL database host
- `DB_USER`: MySQL database user
- `DB_PASSWORD`: MySQL database password
- `DB_NAME`: MySQL database name

## 📝 License

This project is licensed under the ISC License.

## 👥 Authors

- Prabhat Mishra

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
