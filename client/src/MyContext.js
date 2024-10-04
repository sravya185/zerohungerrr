const { createContext, useState ,useEffect,useRef} = require("react");
const UserContext = createContext();

const Provider = ({ children }) => {
  
  const [loggedIn, setLoggedIn] = useState(false);
  

  const valueToShare = {
    loggedIn,setLoggedIn,
  };
//   useEffect(()=>{
//     let token = localStorage.getItem('token');
//     if(token){
//         setLoggedIn(true)
//     }
//   })
 
  return (
    <UserContext.Provider value={valueToShare}>
      {children}
    </UserContext.Provider>
  );
};

export { Provider };

export default UserContext;