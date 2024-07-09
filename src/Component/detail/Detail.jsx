
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useChatStore } from "../../lib/chatStore";
import { auth, db } from "../../lib/firebase"
import { useUserStore } from "../../lib/useStore";
import "./detail.css"
const Detail=()=>{

    const { chatId, user, isCurrentUserBlocked, isReceiverBlocked } =
        useChatStore();

    const {currentUser}=useUserStore
    const handleBlock=async ()=>{
        if(!user) return

        const userDocRef=doc(db,"users",currentUser.id)

        try{
            await updateDoc(userDocRef,{
                blocked:isReceiverBlocked?arrayRemove( user.id):arrayUnion(user.id)

            })
            changeBlock()
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div className="detail">
            <div className="user">
                <img src={user?.avatar||"./avatar.png"} alt="" />
                <h2>{user?.username}</h2>
                <p>Lorem ipsum dolor sit amet.</p>

            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy and Help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Media</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510022_640.png" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                        <img src="./download.png" alt="" />

                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510022_640.png" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                        <img src="./download.png" alt="" />

                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510022_640.png" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                        <img src="./download.png" alt="" />

                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510022_640.png" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                        <img src="./download.png" alt="" />

                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510022_640.png" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                        <img src="./download.png" alt="" />

                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510022_640.png" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                        <img src="./download.png" alt="" />

                        </div>
                        
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>

                <button onClick={handleBlock}>{
                    isCurrentUserBlocked?"You are blocked!":isReceiverBlocked?"User block": "Block user"

                }</button>

                <button className="logOut" onClick={()=>auth.signOut()}>Log out</button>
                
            </div>
        </div>
        
    )
}

export default Detail