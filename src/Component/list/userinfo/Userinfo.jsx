

import { useUserStore } from "../../../lib/useStore";
import "./userInfo.css"
const Userinfo=()=>{
    const { currentUser } = useUserStore();

    const handleMore=()=>{
        
    }
    return (
        <div className="userinfo">
        <div className="user">
            <img src={currentUser.avatar||"./avatar.png"} alt="" />
            <h2>{currentUser.username}</h2>
        </div>
        <div className="icons">
            <img onClick={handleMore} src="./more.png" alt="" />
            <img src="./video.png" alt="" />
            <img src="./edit.png" alt="" />

        </div>
        </div>
        
    )
}

export default Userinfo