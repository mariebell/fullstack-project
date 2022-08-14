import React, { useState } from 'react'
import axios from 'axios'

export const AuthContext = React.createContext<AuthContextType>(null!)

interface LoginFormData {
  email: string,
  password: string
}
interface User {
  id: number
  name: string
  email: string
  email_verified_at?: string|null
  created_at: string|null
  updated_at: string|null
}
interface AuthContextType {
  user: User|false|null;
  login: ({email, password}: LoginFormData) => Promise<User|false|null>;
  logout: () => void;
}

const AuthProvider = ({children}: {children: any}) => {
  const [user, setUser] = useState<User|false>(null!)
  axios.post('/user').then(res => {
    if (!user && res.data.error === null) {
      setUser(res.data.data)
    }
  }).catch(() => {
    setUser(false)
  })
  const login = async ({ email, password }: LoginFormData) => {
    await axios.get('/sanctum/csrf-cookie')
    await axios.post('/login', { email: email, password: password })
    await axios.post('/user').then(res => { setUser(res.data.data) })
    return user
  }
  const logout = async () => {
    await axios.post('/logout').then(() => {
      setUser(null!)
    })
  }
  const value = {user, login, logout}
  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider
