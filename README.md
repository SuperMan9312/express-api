```markdown
# Back-End: Todo App API (Express.js)

## Overview

This is the back-end API for the Todo App, built with [Express.js](https://expressjs.com/). It handles task management and connects to a database using [Prisma](https://www.prisma.io/).

---

## Prerequisites

- Node.js >= 20.x
- npm or yarn
- MySQL

---

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SuperMan9312/express-api.git
   cd express-api

2. **Install dependencies:**
   ```bash
    npm install

3. **Set up environment variables: Create a .env file in the root directory with the following content:**
   ```bash
    DATABASE_URL="mysql://root:new_password@localhost:3306/todo"
    PORT=5000

4. **Initialize the database:**
   ```bash
    Generate the Prisma client:
       npx prisma generate
    Run database migrations:
        npx prisma migrate dev --name init
    Start the server:
        npm run dev

