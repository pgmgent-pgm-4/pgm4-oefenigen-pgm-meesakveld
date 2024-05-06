import React, { useContext, useEffect } from 'react'
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { ThemeContext } from '../context/ThemeContext';

export default function ThemeSwitcher() {
    const [isDarkMode, setIsDarkMode] = useContext(ThemeContext)

    useEffect(() => {
        document.body.classList[isDarkMode ? 'add' : 'remove']('dark')
    }, [isDarkMode])

    const handleClick = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <div>
            <button onClick={handleClick}>
                {isDarkMode ? <MdSunny /> : <IoMdMoon />}
            </button>
        </div>
    )
}
