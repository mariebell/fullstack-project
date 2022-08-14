import React from 'react'
import ReactDOM from 'react-dom'
import AuthProvider from './AuthProvider'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginForm from './LoginForm'
import PrivateContent from './PrivateContent'
import PublicContent from './PublicContent'

function App(): React.ReactElement {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicContent />}/>
          <Route path="/login" element={<LoginForm />}/>
          <Route path="/user" element={<PrivateContent />}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

if (document.getElementById('example')) {
    ReactDOM.render(<App />, document.getElementById('example'));
}
