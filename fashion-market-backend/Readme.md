**\* This is backend codebase for project **Fashion Marketplace** \***

This Product has been made for practice purpose. The primary thoughts behind this application was to make a Full Stack E-commerce type web application

- Features

  > User Can Create Account and Login
  > Creators Can Upload Products
  > User Can Visit Profile page
  > User Can Update their Information

  - This Product is Build on Top of

  1.  Node JS
  2.  EXPRESS js
  3.  MongoDB
  4.  Mongoose
  5.  TypeScript

\*\* Project Structure and Folder
This peojects Followes MVC patterns. The `src` directory Contains the root Folder of the Project
inside the `src` folder there is `app.ts` , `server.ts` , `/config` , `/app`

- The `/server.ts` manages The connection between the database and backend server.
- `/app.ts` manage the whole express application and the root routes of the Application

- The `/config/config.js` file manages the logic to connect the `.env` file to the server.

- The `/app` folder manages the all of the logics of the server and controller of the applicaion

- Inside `/app` folder there is Two more folder named `middleware` and `module`

- The `/middleware` handles the middleware of the applicaion like integrating JWT

- Inside `/module` there is `/product` and `user` services and controllers of the applicaion

**\* Routes **

The Routes of the Applicaion is

** _User Routes_ **

1. user profile: `http://domain.com/api/v1/user/profile/:id` (GET)
2. Get all user : `http://domain.com/api/v1/user/all-users` (GET)
3. Create user : `http://domain.com/api/v1/user/create-user` (POST)
4. Login User : `http://domain.com/api/v1/user/login` (POST)
5. Assign JWT : `http://domain.com/api/v1/user/jwt` (POST)
6. Update User : `http://domain.com/api/v1/user/update-user/:id` (POST)

** _Producut Routes_ **

1. Create Product: `http://domain.com/api/v1/product/create-product` (POST)
2. Get all Product : `http://domain.com/api/v1/product/all-products`(GET)
3. Filter Products: `http://domain.com/api/v1/product/filter-products ` (GET)
