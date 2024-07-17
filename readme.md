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
Hosted Api url: http://ec2-13-49-1-88.eu-north-1.compute.amazonaws.com:5000

## Hosted API Routes and Payload

1. Register User Api-
   Route: http://ec2-13-49-1-88.eu-north-1.compute.amazonaws.com:5000/api/auth/register
   Payload:
   ```sh
       name: John
       email: john@gmail.com
       password: 123
   ```
2. Login User Api-
   Route: http://ec2-13-49-1-88.eu-north-1.compute.amazonaws.com:5000/api/auth/login
   Payload:
   ```sh
       email: john@gmail.com
       password: 123
   ```
3. Logout User Api-
   Route: http://ec2-13-49-1-88.eu-north-1.compute.amazonaws.com:5000/api/auth/logout

4. Create payment Api -
   Route: http://ec2-13-49-1-88.eu-north-1.compute.amazonaws.com:5000/api/payment/payment
   payload:
   ```sh
   "amount": 50,
    "currency": "USD",
    "paymentMethod": "credit_card"
   ```
 5. Process payment
   Route: http://ec2-13-49-1-88.eu-north-1.compute.amazonaws.com:5000/api/payment/process/paymentId

 6. Check Payment status
    Route: http://ec2-13-49-1-88.eu-north-1.compute.amazonaws.com:5000/api/payment/payment/paymentId
 
 7. Refund Api - 
    Route: http://ec2-13-49-1-88.eu-north-1.compute.amazonaws.com:5000/api/refund/refund/paymentId


## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```sh
    git clone https://github.com/arvindydv/payment-gateway

   ```

2. Navigate to the project directory:

   ```sh
    cd payment-gateway

   ```

3. Provide all env variable values which is presented in .env.sample file.

4. Start the development server using docker:

   ```sh
    docker run -p port mapping -e env variables image_name

   ```

5. Open your web browser and visit http://localhost:8000/api-docs to test the API's with swagger.

6. If you want to run without Docker, run the following command:
   ```sh
     npm install
   ```
   ```sh
   npm start
   ```

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug fixes, feel free to open an issue or submit a pull request.
