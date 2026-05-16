# Blog App Backend API

A backend-only Blog Application built using Node.js, Express.js, and MongoDB.

This project provides REST APIs for managing blogs, likes, unlikes, and comments. It was built for learning backend development concepts and practicing API architecture using Express and MongoDB.

---

# Features

- Create a blog
- Fetch all blogs
- Like a blog
- Unlike a blog
- Add comments to blogs
- MongoDB database integration
- REST API architecture
- Structured backend folder organization

---

# Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---

# Project Structure

```bash
Blog-app-backend/
│
├── config/
│   └── database.js
│
├── controllers/
│   ├── createBlog.js
│   ├── likeBlog.js
│   ├── unlikeBlog.js
│   ├── commentBlog.js
│   └── getAllBlogs.js
│
├── models/
│   ├── Blog.js
│   ├── Like.js
│   └── Comment.js
│
├── routes/
│   └── blogRoutes.js
│
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
