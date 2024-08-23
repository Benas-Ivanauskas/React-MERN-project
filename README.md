# React-Mern Rental listing app

## About the Project

The React-MERN Rental Listings App is a web application designed to facilitate the renting of properties such as apartments and houses. Users can browse available properties, filter their search based on criteria like location, price, and number of rooms, and even make reservations.

This application is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and follows a modular design pattern. The backend serves as a RESTful API that the frontend interacts with.

## Features

- User authentication with JWT (JSON Web Token)
- Admin functionalities for adding, editing, and deleting property listings
- Dynamic filtering based on location, price, and room count
- Image upload and display
- Reservation system with form validation
- Responsive design for mobile and desktop

## Technologies Used

Frontend

- React.js
- React Router DOM
- React Select
- React Toastify
- CSS for styling

Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Multer for image uploads

Other tools

- Docker for containerization
- Nginx for serving the frontend in production
- dotenv for environment variable management

## Installation and Setup

1. Clone the repository:

- Create new folder on your system for the project and open in Visual Studio Code.
- Open current folder terminal and clone the repository using the following command:
  `https://github.com/Benas-Ivanauskas/React-MERN-project.git`

2. Install dependencies:

- Navigate to the `server` folder and create `.env` file.
- add the following content from mongoDB to connect database `MONGO_CONNECT=mongodb+srv://<username>:<password>@cluster0.bhnr1pa.mongodb.net/<CREATE_WHAT_YOU_WANT>`

3. Build Dokcer-compose:
- In the terminal open `cd React-MERN-project` folder and start the docker-compose by the command `docker-compose up`

4. Start the app:

- You can open your app in web-browser using `http://localhost:4000` port.
