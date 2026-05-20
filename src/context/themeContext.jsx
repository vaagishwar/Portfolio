import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)
const THEME_STORAGE_KEY = 'isDarkMode'

const applyThemeBackground = (isDarkMode) => {
    const backgroundColor = isDarkMode ? '#030712' : '#ffffff'

    document.documentElement.style.backgroundColor = backgroundColor
    document.documentElement.style.colorScheme = isDarkMode ? 'dark' : 'light'

    if (document.body) {
        document.body.style.backgroundColor = backgroundColor
    }
}

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)
        const initialTheme = savedTheme === 'true'

        applyThemeBackground(initialTheme)

        return initialTheme
    })

    useEffect(() => {
        localStorage.setItem(THEME_STORAGE_KEY, String(isDarkMode))
        applyThemeBackground(isDarkMode)
    }, [isDarkMode])

    const toggleDarkMode = (checked) => {
        setDarkMode(checked)
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, setDarkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error('useTheme must be used inside ThemeProvider')
    }

    return context
}
