import { useState } from "react";
import { ThemeContext } from "../context/context";

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext value={{ theme, setTheme }}>
            {children}
        </ThemeContext>
    )
};

export default ThemeProvider;