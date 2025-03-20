// // src/tests/userService.test.ts
// import request from 'supertest'; // Import Supertest for making HTTP requests
// import app from '../app'; // Import the Express app

// // Describe the test suite for the User Service
// describe('User  Service', () => {
    
//     // Test case for creating a new user
//     it('should create a new user', async () => {
//         // Make a POST request to the /api/users endpoint with user data
//         const response = await request(app)
//             .post('/api/users')
//             .send({
//                 name: 'John Doe', // User's name
//                 email: 'john@example.com', // User's email
//             });

//         // Check that the response status is 201 (Created)
//         expect(response.status).toBe(201);
//         // Check that the response body contains an 'id' property
//         expect(response.body).toHaveProperty('id');
//     });

//     // Test case for getting all users
//     it('should get all users', async () => {
//         // Make a GET request to the /api/users endpoint
//         const response = await request(app).get('/api/users');

//         // Check that the response status is 200 (OK)
//         expect(response.status).toBe(200);
//         // Check that the response body is an array
//         expect(Array.isArray(response.body)).toBe(true);
//     });
// });


// supertest is widely  use to test node js app 