import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/AuthSlice'
import { AppDispatch, RootState } from '../store/store'
// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 74vh;
  background-color: #f3f4f6;
`

const Form = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`

const ErrorMessage = styled.span`
  color: red;
  margin-bottom: 1rem;
  display: block;
`

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  text-align: center;
`

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.3);
  }
`

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: var(--clr-primary-5);
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--clr-primary-3);
  }
`

const ResponsiveText = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #666;
`

// Component
const LoginForm: React.FC = () => {
  const auth = useSelector((state: RootState) => state.auth)
  const [formData, setFormData] = useState({
    email: 'userTest@gmail.com',
    password: '123456789'
  })
  const navigate = useNavigate()

  const dispatch = useDispatch<AppDispatch>()

  const handleForm = (e: React.FormEvent): void => {
    const input = e.target as HTMLInputElement
    setFormData((prev) => ({ ...prev, [input.name]: input.value }))
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(login(formData))
  }

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate('/')
    }
  }, [auth.isAuthenticated, navigate])

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Title>Login</Title>
        <Input
          type='email'
          placeholder='Email'
          onChange={(event) => handleForm(event)}
          name='email'
          required
          value={formData.email}
        />
        <Input
          type='password'
          placeholder='Password'
          onChange={(event) => handleForm(event)}
          required
          name='password'
          value={formData.password}
        />
        {auth.error && <ErrorMessage> Wrong email or password </ErrorMessage>}
        <Button type='submit'>Login</Button>
      </Form>
      <ResponsiveText>Don’t have an account? Sign up here.</ResponsiveText>
    </Container>
  )
}

export default LoginForm
