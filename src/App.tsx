import { useTranslation } from 'react-i18next'
import './App.css'
import Navbar from './components/commen/Navbar'
import { ThemeProvider } from './components/commen/theme-provider'
import { useDirection } from './i18n/useDirection'
function App() {
  useDirection()
  const { t } = useTranslation()

  return (
    <ThemeProvider>
      <Navbar />
      <h1>{t('welcome')}</h1>
    </ThemeProvider>
  )
}

export default App
