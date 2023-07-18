const store = require("./app/store/store.js");
const fetchUsers = require("./app/features/userSlice").fetchUsers;

console.log("Initial State : ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State : ", store.getState());
});

store.dispatch(fetchUsers())
  .then(() => {
    // Dispatch completed
    unsubscribe();
  })
  .catch((error) => {
    console.error("Failed to fetch users:", error);
    unsubscribe();
  });
