import './App.css'
import Navbar from './components/commen/Navbar'
import Footer from './components/commen/Footer'
import { ThemeProvider } from './components/commen/theme-provider'
import { useDirection } from './i18n/useDirection'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NewsDetailsPage from './pages/NewsDetailsPage'

function App() {
  useDirection()

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news/:id" element={<NewsDetailsPage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App
