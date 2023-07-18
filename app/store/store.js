const configureStore = require('@reduxjs/toolkit').configureStore;
const userReducer = require('../features/userSlice.js');

const store = configureStore({
  reducer: { user: userReducer },
});

module.exports = store;
