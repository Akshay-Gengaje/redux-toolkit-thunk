const createSlice = require('@reduxjs/toolkit').createSlice;
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
const axios = require('axios');
const initialState = {
  isLoading: true,
  users: [],
  error: '',
};

const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  return axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
    res.data.map((user) => user.id);
  });
});
const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      (state.isLoading = false),
        (state.users = []),
        (state.error = action.error.message);
    });
  },
});

//exporting reducers default
module.exports = userSlice.reducer;
//exporting fetchUser async functiom
module.exports.fetchUsers = fetchUsers;
