// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import passOpService from './passOpService'

// const initialState = {
//   passOps: [],
//   isError: false,
//   isSuccess: false,
//   isLoading: false,
//   message: '',
// }

// // Create new goal
// export const createpassOp = createAsyncThunk(
//   'passOp/create',
//   async (passOpData, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token
//       return await passOpService.createpassOp(passOpData, token)
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

// // Get user goals
// export const getpassOp = createAsyncThunk(
//   'passOp/getAll',
//   async (_, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token
//       return await passOpService.getpassOp(token)
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

// // Delete user goal
// export const deletepassOp = createAsyncThunk(
//   'passOp/delete',
//   async (id, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token
//       return await passOpService.deletepassOp(id, token)
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

// export const passOpSlice = createSlice({
//   name: 'passOp',
//   initialState,
//   reducers: {
//     reset: (state) => initialState,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(createpassOp.pending, (state) => {
//         state.isLoading = true
//       })
//       .addCase(createpassOp.fulfilled, (state, action) => {
//         state.isLoading = false
//         state.isSuccess = true
//         state.passOps.push(action.payload)
//       })
//       .addCase(createpassOp.rejected, (state, action) => {
//         state.isLoading = false
//         state.isError = true
//         state.message = action.payload
//       })
//       .addCase(getpassOp.pending, (state) => {
//         state.isLoading = true
//       })
//       .addCase(getpassOp.fulfilled, (state, action) => {
//         state.isLoading = false
//         state.isSuccess = true
//         state.passOps = action.payload
//       })
//       .addCase(getpassOp.rejected, (state, action) => {
//         state.isLoading = false
//         state.isError = true
//         state.message = action.payload
//       })
//       .addCase(deletepassOp.pending, (state) => {
//         state.isLoading = true
//       })
//       .addCase(deletepassOp.fulfilled, (state, action) => {
//         state.isLoading = false
//         state.isSuccess = true
//         state.passOps = state.passOps.filter(
//           (passOp) => passOp._id !== action.payload.id
//         )
//       })
//       .addCase(deletepassOp.rejected, (state, action) => {
//         state.isLoading = false
//         state.isError = true
//         state.message = action.payload
//       })
//   },
// })

// export const { reset } = passOpSlice.actions
// export default passOpSlice.reducer
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import passOpService from './passOpService';

const initialState = {
  passOps: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Create new password
export const createpassOp = createAsyncThunk(
  'passOp/create',
  async (passOpData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await passOpService.createpassOp(passOpData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get all passwords
export const getpassOp = createAsyncThunk(
  'passOp/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await passOpService.getpassOp(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Update password
export const updatepassOp = createAsyncThunk(
  'passOp/update',
  async ({ id, updatedData }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await passOpService.updatepassOp(id, updatedData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete password
export const deletepassOp = createAsyncThunk(
  'passOp/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await passOpService.deletepassOp(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const passOpSlice = createSlice({
  name: 'passOp',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createpassOp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createpassOp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.passOps.push(action.payload);
      })
      .addCase(createpassOp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getpassOp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getpassOp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.passOps = action.payload;
      })
      .addCase(getpassOp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updatepassOp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatepassOp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.passOps = state.passOps.map((passOp) =>
          passOp._id === action.payload._id ? action.payload : passOp
        );
      })
      .addCase(updatepassOp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deletepassOp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletepassOp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.passOps = state.passOps.filter(
          (passOp) => passOp._id !== action.payload.id
        );
      })
      .addCase(deletepassOp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = passOpSlice.actions;
export default passOpSlice.reducer;
