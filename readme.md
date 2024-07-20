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

Hosted render api url: https://payment-gateway-1-tkqp.onrender.com

Hosted aws Api url: http://ec2-13-49-1-88.eu-north-1.compute.amazonaws.com:5000

To run the project locally, follow these steps:

## Run using Docker

1. You can pull docker image -
   ```sh
   docker pull arvindydv/nxtjob-payment-gateway
   ```
2. Run This Docker command -

   ```sh
   sudo docker run -p 8000:8000 -e MONGODB_URI="" -e ACCESS_TOKEN_EXPIRY="" -e REFRESH_TOKEN_SECRET="" -e REFRESH_TOKEN_EXPIRY="" -e PORT=8000 arvindydv/nxtjob-payment-gateway:latest

   ```

3. Open your web browser and visit http://localhost:8000/api-docs to test the API's with swagger.

4. Clone the repository:

   ```sh
    git clone https://github.com/arvindydv/payment-gateway

   ```

5. Navigate to the project directory:

   ```sh
    cd payment-gateway

   ```

6. Provide all env variable values which is presented in .env.sample file.

7. If you want to run without Docker, run the following command:
   ```sh
     npm install
   ```
   ```sh
   npm start
   ```

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug fixes, feel free to open an issue or submit a pull request.
