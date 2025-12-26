import { useTranslation } from 'react-i18next'
import './App.css'
import Navbar from './components/commen/Navbar'
import { ThemeProvider } from './components/commen/theme-provider'
import { Button } from './components/ui/button'
import { useDirection } from './i18n/useDirection'

function App() {
  useDirection()
  const { t, i18n } = useTranslation()

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <div>
        <h1>{t('welcome')}</h1>

        <Button variant="outline" onClick={() => i18n.changeLanguage('en')}>English</Button>
        <Button variant="outline" onClick={() => i18n.changeLanguage('ar')}>العربية</Button>
      </div>
    </ThemeProvider>
  )
}

export default App
