import { useTheme } from "../context/ThemeContext";

function ThemeToggle(){
    const {theme, toggleTheme} = useTheme()
    return <button onClick={toggleTheme}>Theme: {theme}</button>
}
export default ThemeToggle