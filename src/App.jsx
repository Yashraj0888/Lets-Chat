import { useEffect } from "react"
import Chat from "./Component/chat/Chat"
import Detail from "./Component/detail/Detail"
import List from "./Component/list/List"
import Login from "./Component/login/Login"
import Notification from "./Component/notification/Notification"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./lib/firebase"
import {useUserStore} from "./lib/useStore"



const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) return <div className="loading">Loading...</div>;
  return (
    <div className='container'>
    
      (
        <>
          <List />
          <Chat />
          <Detail/>
        </>
        
      ):(<Login/>)
      <Notification/>
      
    </div>
  )
}

export default App