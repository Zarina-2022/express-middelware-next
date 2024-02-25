This project is a basic Express.js application <b>for handling API requests</b> related to tours. Here's a summary of the key components:

<b>1. Express Setup:</b>
- The project uses the Express.js framework, and the main object is created using <<b><i>const app = express()</i></b>.
- The application listens on port 8000 <<b><i>(const PORT = 8000)</i></b>.

<b>2. Middleware:</b>
- Two custom middleware functions are defined: <b><i>loggerMiddleware</i></b> and <<b><i>controlMiddleware</i></b>.
- <b><i>express.json()</i></b>  middleware is used to automatically parse the body of incoming requests.
- <b><i>loggerMiddleware</i></b>  is applied to log information about incoming requests.
- <b><i>controlMiddleware</i></b>  is used to check the validity of the provided tour ID before processing the request.

<b>3. Route Handling:</b>
- Two main route handlers are imported from <b><i>tourControllers</b></i>: <b>getAllTours, createTour, getTour, updateTour, and deleteTour</b>.
- Routes for listing all tours and creating a new tour are combined using the <b>app.route()</b> method.

<b>4. API Routes:</b>
The project defines several API routes under the <b->/api/v1/tours</b- > path:

- <b>GET /api/v1/tours:</b> Retrieves all tours.
- <b>POST /api/v1/tours:</b> Creates a new tour.
- <b>GET /api/v1/tours/:id:</b> Retrieves a specific tour by ID.
- <b>PATCH /api/v1/tours/:id:</b> Updates a specific tour partially.
- <b>DELETE /api/v1/tours/:id:</b> Deletes a specific tour.

<b>5. Middleware for Specific Routes:</b>
The <b>controlMiddleware</b> is applied to routes that require checking the validity of the tour ID <b>(getTour, updateTour, deleteTour)</b>.

<b>6. Server Start:
The application is set to listen on the specified port, and a success message is logged when the server is running.

<b>Overall,</b> this project provides a structured setup for handling <b>CRUD operations</b> on tours with proper middleware for logging and ID validation.

I have thoroughly tested all CRUD operations (GET, POST, PATCH, DELETE) for the tour API endpoints using Postman. I can confirm that each operation works as expected, and I have verified their correctness. To provide visual evidence, I have attached a screen gif demonstrating the successful execution of these tests in Postman.

![](Tour-screen.gif)