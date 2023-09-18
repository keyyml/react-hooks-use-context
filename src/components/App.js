import React from "react";
import { UserProvider } from "../context/User";
import { ThemeProvider } from "../context/Theme";
import Body from "./Body";

function App() {
  // const [theme, setTheme] = useState("dark");
  // const [user, setUser] = useState(null); NOT REQUIRED TO PASS USER OR THEME AS A PROP
  // const { theme } = useContext(ThemeContext)
  return (
      <>
        <ThemeProvider>
        <UserProvider>
          <Body />
        </UserProvider>
        </ThemeProvider>
      </>
  );
}

export default App;
