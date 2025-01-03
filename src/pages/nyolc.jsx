import useLocalStorage from "../components/useLocalStorage";
import "../styles/nyolctstyle.css";
import HomeButton from "../components/homebutton";


function ThemeSwitch() {

    const [theme, setTheme] = useLocalStorage('theme', "dark")
    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }


    console.log(theme)
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="theme-cont">
        <p className="szovegecskedombocska">Hello World!</p>
        <button className="megnyomhatosdombocska" onClick={handleToggleTheme}>Change Theme</button>
        <HomeButton/>
      </div>
    </div>
  );
}

export default ThemeSwitch;
