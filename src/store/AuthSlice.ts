import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../configs/axios'
import { hideLoading, showLoading } from './StylingSlice'
export type AuthState = {
  token: string | null
  error: string | null
  isAuthenticated: boolean
}

const initialState: AuthState = {
  token: '',
  isAuthenticated: false,
  error: null
}

export const login = createAsyncThunk<AuthState, { email: string; password: string }, { rejectValue: AuthState }>(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      thunkAPI.dispatch(showLoading())
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password)
      const token = await userCredential.user.getIdToken()
      thunkAPI.dispatch(hideLoading())
      return {
        token,
        isAuthenticated: true,
        error: null
      }
    } catch (error) {
      thunkAPI.dispatch(hideLoading())
      const errorMessage = (error as { message?: string }).message || 'An unknown error occurred'
      return thunkAPI.rejectWithValue({
        token: null,
        error: errorMessage,
        isAuthenticated: false
      })
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state,action: PayloadAction<{token:string}>)=>{
          state.token = action.payload.token 
          state.isAuthenticated = true;
    },
    logout: (state) => {
      localStorage.removeItem('user')
      state.error = null
      state.token = ''
      state.isAuthenticated = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.error = null
    })

    builder.addCase(login.fulfilled, (state, action: PayloadAction<AuthState>) => {
      state.token = action.payload.token
       state.isAuthenticated = true;
      const expirationTime = new Date().getTime() + 30 * 60 * 1000;
      localStorage.setItem('accessToken', JSON.stringify(action.payload))
      localStorage.setItem('tokenExpiration', expirationTime.toString());
    })

    builder.addCase(login.rejected, (state, action) => {
      // If action.payload exists then use its error, otherwise fallback to action.error.message
      state.error = action.payload?.error || action.error.message || 'Login failed. Please try again.'
      state.isAuthenticated = false
    })
  }
})

export const { logout,setCredentials } = authSlice.actions
export default authSlice.reducer
