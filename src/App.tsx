import './App.css'
import Navbar from './components/commen/Navbar'
import { ThemeProvider } from './components/commen/theme-provider'
import { useDirection } from './i18n/useDirection'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
  useDirection()

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes here */}
      </Routes>
    </ThemeProvider>
  )
}

export default App
