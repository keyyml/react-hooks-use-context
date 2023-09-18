import React, { useState } from 'react';

const UserContext = React.createContext()


function UserProvider({ children }){
//NOW W DECLARE A VALUE TO OUR CONTEXT PROVIDER THAT THE CHILD COMPONENTS CAN ACCESS THROUGH USECONTEXT(USERCONTEXT)
    const [user, setUser] = useState(null);

    return ( 
    <UserContext.Provider value={{ user, setUser }}>{ children }
    </UserContext.Provider>
    )
}



export { UserContext, UserProvider }