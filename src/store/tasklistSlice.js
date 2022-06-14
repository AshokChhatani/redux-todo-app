const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

export const fetchTasklist = createAsyncThunk("tasklist/fetch", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data;
});

const tasklistSlice = createSlice({
  name: "tasklist",

  initialState: {
    tasklist: [],
    status: STATUSES.IDLE,
  },

  reducers: {},
  extraReducers: {
    [fetchTasklist.pending]: (state, action) => {
      state.status = STATUSES.LOADING;
    },
    [fetchTasklist.fulfilled]: (state, action) => {
      state.tasklist = action.payload;
      state.status = STATUSES.IDLE;
    },
    [fetchTasklist.rejected]: (state, action) => {
      state.status = STATUSES.ERROR;
    },
  },
});

export const { setTasklist, setStatus } = tasklistSlice.actions;
export default tasklistSlice.reducer;

// Thunk
