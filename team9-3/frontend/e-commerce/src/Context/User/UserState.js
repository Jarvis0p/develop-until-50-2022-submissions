import {
    createContext,
    useState
} from 'react';


const UserContext = createContext();

const UserState = (props) => {

    // for seller or customer
    const [type, setType] = useState("")


  return (
    <UserContext.Provider value={{type,setType}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserState;
export {UserContext}