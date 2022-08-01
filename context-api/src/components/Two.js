import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
function Two(props) {
    const themeContext = useContext(ThemeContext)

    return (
      <div>
        <h1 style={{color: themeContext.theme ==='dark' ? '#999' : '#555'}}>Hello From Two</h1>
        <p>Theme: {themeContext.theme}</p>
      </div>
    );
  }
  
  export default Two;
  