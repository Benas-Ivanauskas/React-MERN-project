The Apartment Reservation Platform is a convenient web application that enables users to easily find, explore, and reserve apartments. It offers real-time availability, detailed apartment listings, reservation management, and user profiles. With its intuitive interface and reservation system, users can effortlessly browse available apartments, make reservations, and view their booking history.

This project is a full-stack application for managing house rentals and reservations. It consists of both the back-end and front-end sides. The back-end is built with Node.js using Express.js for handling API routes, MongoDB for database management with Mongoose as the ODM, and JWT for authentication. The front-end is developed with React.js, utilizing React Router for navigation and state management through Context API.

Back-end Features:
1. User Authentication: Users can sign up, log in, and log out. JWT tokens are used for authentication, and passwords are hashed before being stored in the database.
2. House Management: Houses can be created, retrieved, updated, and deleted. Each house includes details such as name, location, price, number of rooms, description, and an image.
3. Reservation Management: Users can make reservations for houses. Each reservation includes the user's full name, email, start and end dates, and the house being reserved. Reservations can be created, retrieved, updated, and deleted by authenticated users.
4. Admin Functionality: Certain routes and functionalities are restricted to admin users. Admins have the ability to manage houses, view all reservations, and delete user reservations.

Front-end Features:
1. User Authentication: Users can sign up, log in, and log out from the front-end. Private routes are implemented to restrict access to certain pages for authenticated users.
2. House Display: Houses available for rent are displayed with options to filter by location, number of rooms, and price range. Users can search for houses using keywords.
3. Reservation Management: Users can view their reservations, delete existing reservations, and update reservation details such as dates.
4. Create House Listing: Admin users can create new house listings with details such as name, location, price, number of rooms, description, and an image upload feature.

Technologies Used:
1. Back-end: Node.js, Express.js, MongoDB, Mongoose, JWT
2. Front-end: React.js, React Router, React Quill (for rich text editor), React Select (for dropdowns)
3. Styling: CSS with some minimal usage of CSS frameworks like Bootstrap or Material UI (not explicitly mentioned in provided code)


