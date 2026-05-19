import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setDarkMode] = useState(false)

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
