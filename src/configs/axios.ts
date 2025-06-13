import axios from 'axios'
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const axiosInstance = axios.create({
  baseURL: 'https://reduxstore0704-default-rtdb.asia-southeast1.firebasedatabase.app/', // Base API URL
  timeout: 5000, // Timeout in milliseconds
  headers: {
    'Content-Type': 'application/json'
  }
})

const firebaseConfig = {
  apiKey: 'AIzaSyBExNBZgB_RbhKuNsZNZ4qHNzhrMvHu3Dw',
  authDomain: 'reduxstore0704.firebaseapp.com',
  projectId: 'reduxstore0704',
  storageBucket: 'reduxstore0704.firebasestorage.app',
  messagingSenderId: '',
  appId: '1:1085374106164:web:0621e7274c84da8c9bd861'
}
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);

export default axiosInstance
