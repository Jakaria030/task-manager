import useTheme from "../../hooks/useTheme.js";

const Home = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div>
            Hello World! ---- {theme}
        </div>
    )
};

export default Home;