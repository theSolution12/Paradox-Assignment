# Paradox - Idea Tracker API

A simple REST API to manage ideas, built with **TypeScript**, **Express**, and **MongoDB**.  
Demonstrates **Separation of Concerns** (Routes → Controllers → Services → Database).

---

## 🧩 Features

- **POST /ideas** - Create a new idea  
- **GET /ideas** - Fetch all ideas  
- Tags support for ideas  
- Timestamped ideas (createdAt)  
- Fully typed with TypeScript  
- Clean folder structure with professional separation

---

## 📂 Folder Structure

src/ <br>
├── server.ts # Entry point <br>
├── routes/ <br>
│ └── idea.routes.ts <br>
├── controllers/ <br>
│ └── idea.controller.ts <br>
├── services/ <br>
│ └── idea.service.ts <br>
├── db/ <br>
│ └── idea.db.ts # In-memory or MongoDB connection <br>
└── types/ <br>
└── idea.types.ts <br>

---

## ⚡ Endpoints

### **POST /ideas**

**Request Body**
```json
{
  "title": "Build a SaaS",
  "description": "A simple idea tracking tool",
  "tags": ["startup", "project"]
}
```

**Response**
```json
{
  "id": 1,
  "title": "Build a SaaS",
  "description": "A simple idea tracking tool",
  "tags": ["startup", "project"],
  "createdAt": "2025-12-04T08:00:00.000Z"
}
```

### **GET /ideas**

**Response**
```json
[
  {
    "id": 1,
    "title": "Build a SaaS",
    "description": "A simple idea tracking tool",
    "tags": ["startup", "project"],
    "createdAt": "2025-12-04T08:00:00.000Z"
  }
]
```

---

## 🚀 Installation & Run

```bash
# Clone repo
git clone <repo-url>
cd paradox

# Install dependencies
npm install

# Build TypeScript
npm run build

# Start server
npm start
```

---

## ⚙️ Notes

- Currently using **in-memory database** (data resets on restart).  
- Can be switched to **MongoDB** by updating `db/idea.db.ts` and service layer.  
- Designed to demonstrate **Separation of Concerns** and **TypeScript best practices**.  
- Fully extensible for future features like update/delete endpoints.  

---

## 🛠 Tech Stack

- **Node.js / Express**  
- **TypeScript**  
- **MongoDB (optional)**  
- **ES Modules**  
- **In-memory storage (default)**  

---

## 💡 Learnings

- Implemented clean **folder structure** for backend.  
- Practiced **SoC (routes → controllers → services)**.  
- Learned TypeScript typing for **API requests/responses**.  
- Optional MongoDB integration to show **real persistence**.
