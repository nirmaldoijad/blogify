🚀 Blogify - Full Stack Blogging Platform
A modern, full-stack blogging application built with Node.js, Express, and EJS, designed for seamless deployment on Vercel. This project features user authentication, dynamic blog creation, and cloud-based image hosting.

✨ Features
User Authentication: Secure Signup and Login using JWT (JSON Web Tokens) and Cookie-based sessions.

Dynamic Blogging: Create and view blog posts with rich content and cover images.

Cloud Image Storage: Integrated with Vercel Blob to handle persistent image uploads in a serverless environment.

Database: Uses MongoDB Atlas for managed cloud database storage.

Responsive UI: Styled with Bootstrap for a clean, mobile-friendly experience.

🛠️ Tech Stack
Backend: Node.js, Express.js

Frontend: EJS (Embedded JavaScript Templates), Bootstrap

Database: MongoDB (Mongoose ODM)

File Storage: Vercel Blob

Deployment: Vercel

🚀 Deployment on Vercel
This project is optimized for Vercel's serverless architecture.

1. Environment Variables
To run this project, you must add the following variables in your Vercel Dashboard:

MONGO_URL: Your MongoDB Atlas connection string.

JWT_SECRET: Your secret key for token signing.

BLOB_READ_WRITE_TOKEN: Automatically generated when you connect Vercel Blob.

{
  "version": 2,
  "builds": [{ "src": "app.js", "use": "@vercel/node" }],
  "routes": [{ "src": "/(.*)", "dest": "app.js" }]
}

📦 Installation & Local Setup
1. Clone the repository:
git clone https://github.com/yourusername/blogify.git

2.Install dependencies:
npm install

3.Create a .env file in the root and add your MONGO_URL and JWT_SECRET.

4.Start the server:
npm start

2. Serverless Configuration
The project uses a vercel.json file to route all requests to the Express app.js entry point.
