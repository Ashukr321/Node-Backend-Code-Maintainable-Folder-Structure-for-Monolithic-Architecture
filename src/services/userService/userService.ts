// // src/services/userService/userService.js
// const User = require('./userModel');

// class UserService {
//     async createUser (userData) {
//         return await User.create(userData);
//     }

//     async getAllUsers() {
//         return await User.find();
//     }

//     async getUser ById(userId) {
//         return await User.findById(userId);
//     }

//     async updateUser (userId, userData) {
//         return await User.findByIdAndUpdate(userId, userData, { new: true });
//     }

//     async deleteUser (userId) {
//         return await User.findByIdAndDelete(userId);
//     }
// }

// module.exports = new UserService();