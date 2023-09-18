import React, { useContext } from "react";
import { UserProvider } from "../context/User";
import { ThemeContext, ThemeProvider } from "../context/Theme";
import Header from "./Header";
import Profile from "./Profile";

function App() {
  // const [theme, setTheme] = useState("dark");
  // const [user, setUser] = useState(null); NOT REQUIRED TO PASS USER OR THEME AS A PROP
  // const { theme } = useContext(ThemeContext)
  return (
      <main /*className={theme} */>
        <ThemeProvider>
        <UserProvider>
          <Header />
          <Profile />
        </UserProvider>
        </ThemeProvider>
      </main>
  );
}

export default App;
