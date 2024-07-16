# Payment gateway

payment gateway backend built with nodejs, expressJs and mongoDB that aims to provide basic payment functionality like create payment, process payment and refund.

## Features

- _User Authentication_: Users can register, login and logout Retrieves our data .
- _Payment_: User can make payment, and check payment status.
- _refund_: User can send request to refund.

## Technologies Used

- _Node&Express.js_: Node and Express.js used for creating API's.
- _MongoDB_: MongoDB is a document database used for store our data.
- _Docker_: Docker is used for containerizing the application.

## API Testing

If you want to test API without cloning repository you can use the following url
Hosted Api url: https://user-auth-qvhu.onrender.com

## Hosted API Routes and Payload

1. Register User Api-
   Route: https://user-auth-qvhu.onrender.com/api/auth/register
   Payload: firstName, lastName, email, password, username.
2. Login User Api-
   Route: https://user-auth-qvhu.onrender.com/api/auth/login
   Payload: email, password.
3. Logout User Api-
   Route: https://user-auth-qvhu.onrender.com/api/auth/logout
4. Get User Profile Api-
   Route: https://user-auth-qvhu.onrender.com/api/user/profile

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
   ```sh
    git clone https://github.com/arvindydv/payment-gateway.

2. Navigate to the project directory: 
 ```sh
  cd payment-gateway
3. Provide all env variable values which is presented in .env.sample file.
4. Start the development server using docker: ``` docker run -p port mapping -e env variables image_name
5. Open your web browser and visit http://localhost:8000/api-docs to test the API's with swagger.



## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug fixes, feel free to open an issue or submit a pull request.
