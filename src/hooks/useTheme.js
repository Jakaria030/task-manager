import { useContext } from "react";
import { ThemeContext } from "../context/context.js";

const useTheme = () => {
    return useContext(ThemeContext);
};

export default useTheme;