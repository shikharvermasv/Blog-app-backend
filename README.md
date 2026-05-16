# Blog App Backend API

A backend-only Blog Application built using Node.js, Express.js, and MongoDB.

This project provides REST APIs for:
- Creating blog posts
- Liking posts
- Unliking posts
- Adding comments
- Fetching all blog posts

The project was built to practice backend development concepts including REST APIs, MongoDB operations, controllers, models, routing, and project structuring.

---

# Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---

# Features

- Create Blog Posts
- Fetch All Blog Posts
- Like a Blog
- Unlike a Blog
- Add Comments
- MongoDB Integration
- Structured Backend Architecture

---

# Folder Structure

```bash
Blog-app-backend/
│
├── config/
│   └── database.js
│
├── controllers/
│   ├── commentController.js
│   ├── likeController.js
│   └── postController.js
│
├── models/
│   ├── commentModel.js
│   ├── likeModel.js
│   └── postModel.js
│
├── routes/
│   └── blog.js
│
├── index.js
├── .env
├── .gitignore
├── package.json
└── package-lock.json

Installation & Setup
1. Clone Repository
git clone https://github.com/YOUR_USERNAME/Blog-app-backend.git
2. Move Into Project Folder
cd Blog-app-backend
3. Install Dependencies
npm install
4. Create Environment Variables

Create a .env file in the root directory.

Add:

PORT=3000
DATABASE_URL=your_mongodb_connection_string
5. Start Server
npm start

OR if using nodemon:

npm run dev
API Endpoints
Create Blog Post
POST /api/v1/createPost
Get All Blog Posts
GET /api/v1/getPosts
Like a Blog Post
POST /api/v1/likePost
Unlike a Blog Post
POST /api/v1/unlikePost
Add Comment
POST /api/v1/commentPost
Learning Goals

This project was built for learning:

Express.js
REST APIs
MongoDB & Mongoose
CRUD Operations
Backend Architecture
Git & GitHub Workflow
MVC Pattern Basics
Future Improvements
JWT Authentication
Authorization
Blog Update/Delete APIs
User Accounts
Image Uploads
Pagination
Better Error Handling
Input Validation Middleware
