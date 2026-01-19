import { useState } from "react";
import { ThemeContext } from "../context/context";

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    return (
        <ThemeContext value={{ theme, setTheme }}>
            {children}
        </ThemeContext>
    )
};

export default ThemeProvider;