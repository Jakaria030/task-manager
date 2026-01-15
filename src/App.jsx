import { useState } from "react";
import { ThemeContext } from "./context/context.js";
import Home from "./pages/Home/Home.jsx";

const App = () => {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext value={{ theme, setTheme }}>
            <Home />
        </ThemeContext>
    )
};

export default App;