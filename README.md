# Backend Todo App — Node.js, Express, JWT, SQLite

A fully functional **authentication‑protected Todo App** built using **Node.js**, **Express.js**, **bcrypt**, **JWT**, and **SQLite**. This README is customized for Lord (the developer), includes licensing, accurate setup instructions, and a clean project structure.

---

## 🧾 Overview

This backend project is a simple yet solid full‑stack foundation for beginners and intermediate developers. It features:

* **User Authentication** (Register/Login)
* **JWT-based route protection**
* **CRUD operations for Todos**
* **SQLite database** (lightweight, file-based DB)
* Minimal **frontend** served via `public/index.html`

Built by **Lord**, a Computer Science student and backend developer skilled in Java, JavaScript, Go, Spring Boot, Node.js, and cloud-native development.

---

## 📂 Project Structure

```
backend-todo-app/
│
├── public/
│   └── index.html              # Basic UI for auth + todo actions
│
├── src/
│   ├── controllers/            # (Optional) For future expansion
│   ├── middlewares/
│   │   └── authMiddleware.js   # JWT verification middleware
│   ├── routes/
│   │   ├── authRoutes.js       # Register & Login endpoints
│   │   └── todoRoutes.js       # CRUD routes for todos
│   ├── db.js                   # SQLite DB connection + table creation
│   └── server.js               # Main server file
│
├── .env                        # Environment variables
├── package.json                # Dependencies + scripts
├── package-lock.json
└── todo-app.rest               # REST Client file for testing API
```

---

## 🔑 Important Files

* **`authMiddleware.js`** → Protects routes using JWT.
* **`authRoutes.js`** → Handles register/login.
* **`todoRoutes.js`** → Handles CRUD for authenticated users.
* **`db.js`** → SQLite initialization.
* **`server.js`** → Express app setup.
* **`todo-app.rest`** → API testing script.

---

## ⚙️ Node.js Version (Must Read)

This app requires **Node.js v22+**.

Check your version:

```bash
node -v
```

If lower than 22, install using **nvm**:

```bash
nvm install 22
nvm use 22
```

### Start the App With Required Flags

```bash
node --env-file=.env --experimental-sqlite ./src/server.js
```

---

## 🔧 Change the Port (Optional)

Default: **5000** → you can switch to **3000**.

In `.env`:

```bash
PORT=3000
```

Restart the app:

```bash
npm start
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/backend-todo-app.git
cd backend-todo-app
```

### 2. Install Dependencies

```bash
npm install express bcryptjs jsonwebtoken sqlite3
```

### 3. Install Dev Dependencies

```bash
npm install --save-dev nodemon
```

### 4. Update package.json Description

```
A Node.js Todo App using Express, SQLite, and JWT Authentication.
```

### 5. Add Scripts

```json
"scripts": {
  "dev": "nodemon --env-file=.env --experimental-sqlite ./src/server.js"
}
```

### 6. Setup Environment Variables

Create `.env`:

```bash
JWT_SECRET=your_secret_here
PORT=5000
```

### 7. Run the Server

```bash
npm run dev
```

### 8. Access App

```
http://localhost:5000
```

(or port 3000 if changed)

---

## 🧪 REST Client Usage (`todo-app.rest`)

This file includes:

* Register a user
* Login and get JWT
* Fetch todos
* Add todo
* Update todo
* Delete todo

Use VS Code extension **REST Client**.

Steps:

1. Install REST Client.
2. Open `todo-app.rest`.
3. Click **Send Request**.
4. Replace `{{token}}` with real JWT from login response.

---

## 📌 Notes & Tips

* SQLite database file will be auto‑created.
* JWT tokens expire based on your settings.
* You can replace SQLite with PostgreSQL or MongoDB in future versions.

---

## 🧑‍💻 Author

**Lord (EternalKnight002)**
Computer Science student • Backend Developer • MERN, Spring Boot, Go, Cloud‑native learner
GitHub: [https://github.com/EternalKnight002](https://github.com/EternalKnight002)

---

## 📜 License — MIT License

```
MIT License

Copyright (c) 2025 Aman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---


