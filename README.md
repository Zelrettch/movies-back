This is the backend service for the FilmFinder app. It provides a RESTful API for managing a movie database—handling creation, retrieval, updating, and deletion of movie records. Built with Node.js, Express, MySQL and Prisma ORM

---

##  Features

- CRUD operations on movies and celebrities
- RESTful API endpoints
- Prisma ORM for database access
- MySQL support
- Built with modern JavaScript (ES6+), structured code
- Input validation and error handling

---

##  Prerequisites

- Node.js v16+ & npm
- MySQL database


---

## Setup & Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/Zelrettch/movies-back.git
   cd movies-back
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment**\
   Copy `.env.example` to `.env` and update the variables:

   ```dotenv
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=your_db_user
   DB_PASSWORD=your_db_pass
   DB_DATABASE=moviesdb
   PORT=3000
   ```

4. **Start the server**

   Build project and start it
   ```bash
   npm run build
   npm run start
   ```

   Or run it using nodemon and ts-node in dev mode
   ```bash
   npm run dev
   ```

   Server runs at `http://localhost:3000` by default.

