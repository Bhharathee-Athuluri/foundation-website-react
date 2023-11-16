import React, { createContext, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { SigninSignup } from './components'
import CompletePage from './components/CompletePage'

export const logContext = createContext();
const LogContextProvider = ({ children }) => {
  const [log, setLog] = useState(false);

  return (
      <logContext.Provider value={{ log, setLog }}>
          {children}
      </logContext.Provider>
  );
};
function App() {
  return (
    <LogContextProvider>
    <Routes>
        <Route path="/foundation-website-react" element={<CompletePage />}/>
        <Route path="/foundation-website-react/signinsignup" element = {<SigninSignup />} />
    </Routes>
    </LogContextProvider>
  )
}

export default App
