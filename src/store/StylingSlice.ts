import { createSlice } from '@reduxjs/toolkit'
import { StylingModel } from '../types/styling'

const initialState: StylingModel = {
  isSideBarOpen: false,
  isLoading: false,
  error: ''
}

export const stylingSlice = createSlice({
  name: 'styling',
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen
    },
    showLoading: (state) => {
      state.isLoading = true
    },
    showError: (state, action) => {
      state.error = action.payload
    },
    hideLoading: (state) => {
      state.isLoading = false
    }
  }
})

// Action creators are generated for each case reducer function
export const { toggleSideBar, showLoading, hideLoading, showError } = stylingSlice.actions

export default stylingSlice.reducer
