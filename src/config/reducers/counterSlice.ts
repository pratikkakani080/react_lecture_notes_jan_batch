import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fetchUserById } from '../actions/apis'

export interface CounterState {
  value: number
  str: string
  loading: string
  entities: any[]
  error: any
}

const initialState: CounterState = {
  value: 0,
  str: '',
  loading: 'idle',
  entities: [],
  error: ''
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementValue: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += Number(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.entities = action.payload.products;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.payload || action.error.message;
      });
  },

})

// Action creators are generated for each case reducer function
export const { incrementValue, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer