import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthProvider';

interface LoginFormData {
  email: string,
  password: string
}
const LoginForm = () => {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)
    const [form, setForm] = useState<LoginFormData>({
      email: '',
      password: ''
    })
    const [loginFailed, setLoginFailed] = useState(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleLogin = async () => {
        const user = await auth.login({
            email: form.email,
            password: form.password
        })
        if (!user) {
            setLoginFailed(true)
        }
    }
    useEffect(() => {
        if (auth.user) {
            navigate('/user')
        }
    })
    return (
        (auth.user || auth.user === null) ? <></>
        : <>
          <div className="row justify-content-center">
            <div className="p-4 bg-light" style={{ marginTop: 200, width: 400 }}>
              <h2 className="h5 text-center my-4">Login</h2>
              { loginFailed && (
                <div className="text-danger text-center mb-2">
                ログインに失敗しました。
                </div>
              )}
              <div className="mb-2">
                <input type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="メールアドレス"
                value={form.email}
                onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <input type="password"
                name="password"
                className="form-control form-control-lg"
                placeholder="パスワード"
                value={form.password}
                onChange={handleChange}
                />
              </div>
              <div className="d-grid gap-2 mt-4">
                <div className="btn btn-primary" onClick={handleLogin}>
                ログイン
                </div>
              </div>
            </div>
          </div>
        </>
    );
}

export default LoginForm;
