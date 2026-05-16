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
