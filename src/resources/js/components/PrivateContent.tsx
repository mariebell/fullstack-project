import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthProvider'

const PrivateContent = () => {
  const navigate = useNavigate()
  const auth = useContext(AuthContext)
  useEffect(() => {
    if (auth.user === false) {
      navigate('/login')
    }
  })
  return (
    auth.user ?
      <>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              Private Content
              <ul>
                <li>Name: {auth.user.name}</li>
                <li>Mail: {auth.user.email}</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    : <></>
  );
}

export default PrivateContent
