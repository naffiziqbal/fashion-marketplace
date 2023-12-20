## This is the backend codebase for project **Fashion Marketplace 

**This Product has been made for practice purposes. The primary thoughts behind this application were to make a Full Stack E-commerce type web application**

*** - Features ***

  > User Can Create an Account and Login
  > Creators Can Upload Products
  > User Can Visit Profile page
  > Users can Update their Information

  - This Product is Built on Top of

  1.  Node JS
  2.  EXPRESS js
  3.  MongoDB
  4.  Mongoose
  5.  TypeScript

### Project Structure and Folder
This project follows MVC patterns. The `src` directory Contains the root Folder of the Project
inside the `src` folder there are `app.ts`, `server.ts`, `/config`, `/app`

- The `/server.ts` manages The connection between the database and the backend server.
- `/app.ts` manages the whole express application and the root routes of the Application

- The `/config/config.js` file manages the logic to connect the `.env` file to the server.

- The `/app` folder manages all of the logic of the server and controller of the application

- Inside the `/app` folder there is Two more folders named `middleware` and `module`

- The `/middleware` handles the middleware of the application like integrating JWT

- Inside `/module` there are `/product` and `user` services and controllers of the application

### Routes

The Routes of the Application is

** _User Routes_ **

1. user profile: `http://domain.com/api/v1/user/profile/:id` (GET)
2. Get all user: `http://domain.com/api/v1/user/all-users` (GET)
3. Create user: `http://domain.com/api/v1/user/create-user` (POST)
4. Login User: `http://domain.com/api/v1/user/login` (POST)
5. Assign JWT: `http://domain.com/api/v1/user/jwt` (POST)
6. Update User: `http://domain.com/api/v1/user/update-user/:id` (POST)

** _Producut Routes_ **

1. Create Product: `http://domain.com/api/v1/product/create-product` (POST)
2. Get all Product: `http://domain.com/api/v1/product/all-products`(GET)
3. Filter Products: `http://domain.com/api/v1/product/filter-products ` (GET)
