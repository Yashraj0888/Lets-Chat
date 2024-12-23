
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useChatStore } from "../../lib/chatStore";
import { auth, db } from "../../lib/firebase"
import { useUserStore } from "../../lib/useStore";
import image from "./image.js"
import "./detail.css"
import { useRef, useState } from "react";
const Detail = () => {
    const [img, setImg] = useState([image]);
    const [showMedia, setShowMedia] = useState(false);

    const { chatId, user, isCurrentUserBlocked, isReceiverBlocked } = useChatStore();
    const { currentUser } = useUserStore();

    const handleMediaClick = () => {
        setShowMedia(!showMedia); // Toggle showMedia state
    };

    const handleBlock = async () => {
        if (!user) return;

        const userDocRef = doc(db, "users", currentUser.id);

        try {
            await updateDoc(userDocRef, {
                blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id)
            });
            changeBlock();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="detail">
            <div className="user">
                <img src={user?.avatar || "./avatar.png"} alt="" />
                <h2>{user?.username}</h2>
                <p>Made with love by Yash.</p>
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
                    <div className="title" onClick={handleMediaClick}>
                        <span>Media</span>
                        <img src={showMedia ? "./arrowDown.png" : "./arrowUp.png"} alt="" />
                    </div>
                    {showMedia && ( // Conditionally render if showMedia is true
                        <div className="photos">
                            {image.map((img) => (
                        <div key={img.id} className="photos">
                            <div key={img.id} className="photoItem">
                                <div className="photoDetail">
                                    <img src={img.image} alt="" />
                                    <span>Im Batman.png</span> 
                                </div>
                                <img src="./download.png" alt="Download" />
                            </div>
                        </div>
                        ))}
                        </div>
                    )}
                </div>
                <div className="option">
                    <div className="title">
                        <span>Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>

                <button onClick={handleBlock}>
                    {isCurrentUserBlocked ? "You are blocked!" : isReceiverBlocked ? "User block" : "Block user"}
                </button>

                <button className="logOut" onClick={() => auth.signOut()}>Log out</button>
            </div>
        </div>
    );
};

export default Detail;