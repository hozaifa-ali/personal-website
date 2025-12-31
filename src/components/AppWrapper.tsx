import { ThemeProvider } from '../contexts/ThemeContext'
import App from '../App'
import SeasonalBackground from './SeasonalBackground'

export default function AppWrapper() {
    return (
        <ThemeProvider>
            <SeasonalBackground />
            <App />
        </ThemeProvider>
    )
}
