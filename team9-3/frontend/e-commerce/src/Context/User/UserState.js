import {
    createContext,
    // useState
} from 'react';


const UserContext = createContext();

const UserState = (props) => {

    // for seller or customer
    let type = false;


  return (
    <UserContext.Provider value={{type}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserState;
export {UserContext}