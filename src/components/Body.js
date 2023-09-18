import React, { useContext } from 'react'
import Header from "./Header";
import Profile from "./Profile";
import { ThemeContext } from '../context/Theme';

function Body(){

    const { theme } = useContext(ThemeContext)

    return (
        <main className={theme}>
          <Header />
          <Profile />
        </main>
    )
}

export default Body 