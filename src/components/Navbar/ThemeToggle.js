"use client"
import React from "react";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button aria-label='theme toggler'
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center text-black rounded-full cursor-pointer bg-gray-2 dark:bg-dark-bg h-9 w-9 dark:text-white md:h-14 md:w-14"
        >
           <FaMoon />
        </button>
    )
}