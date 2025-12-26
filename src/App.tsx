import './App.css'
import { ThemeProvider } from './components/commen/theme-provider'
import { Button } from './components/ui/button'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button variant="outline">Click me</Button>
      </div>
    </ThemeProvider>
  )
}

export default App
