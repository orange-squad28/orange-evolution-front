import React, {createContext, useState} from "react";

type UserType ={
  nome: string;
  email: string;
  }

type PropsUserContext = {
  state: UserType;
  setState: React.Dispatch<React.SetStateAction<UserType>>
}
const ContextoGlobal = createContext({})

const ProviderGlobal = (props) => {
  const [user, setUser] = useState({nome:"", email=""})

  return (
    <ContextoGlobal.Provider value={{user,setUser}}>
      {props.children}
    </ContextoGlobal.Provider>
  )
}


export default ContextoGlobal
