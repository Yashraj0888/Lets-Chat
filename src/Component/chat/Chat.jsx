import { useEffect, useRef, useState } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"
import { doc, onSnapshot } from "firebase/firestore"
import { db } from "../../lib/firebase"

const Chat=()=>{

    const [chat,setChat]=useState(false)
    const [open,setOpen]=useState(false)
    const [text,setText]=useState("")
    const  endRef=useRef(null)

    useEffect(()=>{
        endRef.current?.scrollIntoView({behavior:"smooth"})
    })

    useEffect(()=>{
        const unSub=onSnapshot(doc(db,"chats","iLX32PJseiBJ2UJIyflU"),(res)=>{
            setChat(res.data())
        })
        return ()=>{
           unSub 
        }
    },[])
    const handleEmoji=(e)=>{
        setText((prev)=>prev+e.emoji);
        setOpen(false)
    }

    return (
        <div className="chat">
        <div className="top">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Yash</span>
                    <p>Lorem ipsum dolor sit </p>
                </div>
            </div>
            <div className="icons">
                <img src="./phone.png" alt="" />
                <img src="./video.png" alt="" />
                <img src="./info.png" alt="" />

            </div>
        </div>
        <div className="center">
            <div className="message">
                <img src="./avatar.png" alt="" />
                <div className="text">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    </p>
                    <span>1 minutes ago</span>
                </div>
            </div>
            <div className="message own">
                
                <div className="text">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                    <span>1 minutes ago</span>
                </div>
            </div>
            <div className="message">
                <img src="./avatar.png" alt="" />
                <div className="text">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas perspiciatis rem perferendis voluptate consectetur architecto quo ad, animi officia neque  
                    </p>
                    <span>1 minutes ago</span>
                </div>
            </div>
            <div className="message own">

                
                <div className="text">
                <img src="https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510022_640.png" alt="" />
                
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas perspiciatis rem perferendis voluptate consectetur architecto quo ad, animi officia neque 
                    </p>
                    <span>1 minutes ago</span>
                </div>
            </div>


            <div ref={endRef}></div>
        </div>
        <div className="bottom">
            <div className="icons">
                <img src="./img.png" alt="" />
                <img src="./camera.png" alt="" />
                <img src="./mic.png" alt="" />
            </div>
            <input type="text" placeholder="Type a message..."
            value={text} onChange={e=>setText(e.target.value)} />
            <div className="emoji">

                <img src="./emoji.png" alt="" onClick={()=>setOpen(prev=>!prev)} />
                <div className="picker">
                <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                </div>
                
            </div>
            <button className="sendButton">Send</button>

        </div>
        </div>

        
    )
}

export default Chat
