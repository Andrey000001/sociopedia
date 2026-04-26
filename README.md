# Sociopedia

A full-stack social network built with the MERN stack — profiles, posts, likes, comments, and role-based access.

**[Live Demo](https://sociopedia-gold-ten.vercel.app/)** &nbsp;·&nbsp; [Repo](https://github.com/Andrey000001/sociopedia)

---

## Features

- **Authentication** — JWT-based login with persistent sessions via Redux
- **Social Feed** — create posts, like, comment with optimistic UI updates
- **User Profiles** — view and edit profile, see other users
- **Protected Routes** — private/public route system based on auth state
- **Role-based Access** — different permissions per user role
- **Responsive UI** — built with Material UI

## Stack

![React](https://img.shields.io/badge/React-20232a?style=flat-square&logo=react&logoColor=61dafb)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764abc?style=flat-square&logo=redux&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47a248?style=flat-square&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000?style=flat-square&logo=jsonwebtokens&logoColor=white)

## Project Structure

```
/client   — React + Redux frontend
/server   — Node.js + Express backend
```

## Getting Started

```bash
git clone https://github.com/Andrey000001/sociopedia
```

**Backend:**
```bash
cd server
npm install
npm run dev
```

**Frontend:**
```bash
cd client
npm install
npm run dev
```

Create a `.env` file in `/server`:

```
MONGODB_URI=
PORT=3001
JWT_SECRET=
```
