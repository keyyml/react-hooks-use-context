import React, { useState } from 'react';


const ThemeContext = React.createContext()

function ThemeProvider({ children }){
    //NOW WE DECLARE A VALUE TO OUR CONTEXT PROVIDER THAT THE CHILD COMPONENTS CAN ACCESS THROUGH USECONTEXT(USERCONTEXT)
        const [theme, setTheme] = useState("dark");
        return ( 
        <ThemeContext.Provider value={{ theme, setTheme }}>{ children }
        </ThemeContext.Provider>
        )
    }

    export { ThemeContext, ThemeProvider }