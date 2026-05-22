# Task Manager App

A full-stack task management application built with the MERN stack.

---

# Features

- Create tasks
- Edit tasks
- Delete tasks
- Search tasks
- Filter by status
- Due date tracking
- Overdue badges
- Responsive UI
- Dark mode
- Loading skeletons
- Toast notifications
- Framer Motion animations

---

# Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Axios
- Framer Motion
- React Hot Toast

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

---

# Project Structure

```txt
project-root/
│
├── backend/
├── frontend/
├── README.md
└── ANSWERS.md
```

---

# Environment Variables

## Backend `.env`

```env
PORT=5000
MONGO_URI=mongodb+srv://salman:Bsit21205+@cluster0.ayubfde.mongodb.net/?appName=Cluster0
```

## Frontend `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

---

# Installation & Run Instructions

## 1. Clone Repository

```bash
git clone https://github.com/Salman2105/Technical-Assessment.git
cd Technical-Assessment
```

---

## 2. Install Backend Dependencies

```bash
cd server
npm install
```

---

## 3. Configure Backend Environment Variables

Create a `.env` file inside backend:

```env
PORT=5000
MONGO_URI=mongodb+srv://salman:Bsit21205+@cluster0.ayubfde.mongodb.net/?appName=Cluster0
```

---

## 4. Run Backend

```bash
npm run dev
```

Backend runs on:

```txt
http://localhost:5000
```

---

## 5. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

---

## 6. Configure Frontend Environment Variables

Create a `.env` file inside frontend:

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 7. Run Frontend

```bash
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

# API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/tasks | Get all tasks |
| POST | /api/tasks | Create task |
| PUT | /api/tasks/:id | Update task |
| DELETE | /api/tasks/:id | Delete task |

---

# UI Features

- Responsive dashboard
- Task cards
- Search and filters
- Modal forms
- Dark mode
- Loading skeletons
- Hover animations
- Due date countdowns

---

# Future Improvements

- Authentication
- Drag and drop task reordering
- Task categories
- Pagination
- Real-time collaboration
- Unit testing

---

